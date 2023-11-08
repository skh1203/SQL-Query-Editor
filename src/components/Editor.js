import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import AceEditor from "react-ace";
import Output from "./Output";

import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-error_marker";

import "../styles/editor.css"

export default function Editor({ val, addQueryToList }) {
    const [value, setValue] = useState(val);
    const [selectedCSV, setSelectedCSV] = useState(null);
    const [result, setResult] = useState("Please execute a query!");
    const [csvData, setCsvData] = useState([]);

    useEffect(() => {
        setValue(val);
    }, [val]);

    const onLoad = (editor) => {
        console.log("Editor loaded");
    };

    const onChange = (newValue) => {
        setValue(newValue);
    };

    const handleLoadCSV = (value) => {
        let csvFileName = null;
        let newValue = value.replace(/\s+/g, " ").trim().toLowerCase();
        const sqlQueryPattern = /^\s*SELECT.*\sFROM\s.*/i;

        if (newValue === "") {
            setResult("Query cannot be empty");
            setCsvData([])
        }
        else if (sqlQueryPattern.test(newValue)) {
            if (newValue === "select * from customers") {
                csvFileName = "/customers.csv";
            } else if (newValue === "select * from employees") {
                csvFileName = "/employees.csv";
            }
            else if (newValue === "select supplierid, companyname from suppliers") {
                csvFileName = "/suppliers.csv";
            }
            else {
                csvFileName = "/orders.csv"
            }
        }
        else {
            setResult("Please enter a proper query using SELECT and FROM");
            setCsvData([])
        }

        if (csvFileName) {
            setSelectedCSV(csvFileName);
        }
    };

    useEffect(() => {
        if (selectedCSV) {
            Papa.parse(selectedCSV, {
                download: true,
                complete: (result) => {
                    if (selectedCSV === "/suppliers.csv") {
                        const firstTwoColumnsData = result.data.map(row => [row[0], row[1]]);
                        setCsvData(firstTwoColumnsData);
                    }
                    else {
                        setCsvData(result.data);
                    }
                }
            });
        }
    }, [selectedCSV]);

    const addQuery = () => {
        console.log(value)
        let newValue = value.replace(/\s+/g, " ").trim().toLowerCase();
        const sqlQueryPattern = /^\s*SELECT.*\sFROM\s.*/i;
        if (sqlQueryPattern.test(newValue)) {
            addQueryToList({ query: value })
        }
    }

    return (
        <div className="editor pt-4">
            <div className="editor-title">
                Input
            </div>
            <AceEditor
                placeholder="Write your queries here!"
                mode="sql"
                name="blah2"
                onLoad={onLoad}
                onChange={onChange}
                fontSize={20}
                showPrintMargin={false}
                // showGutter={true}
                highlightActiveLine={true}
                value={value}
                setOptions={{
                    enableBasicAutocompletion: true,
                    showLineNumbers: true,
                    tabSize: 2
                }}
                style={{ width: "100%", height: "35vh" }}
            />
            <div className="buttons">
                <button
                    className="clear button"
                    onClick={() => {
                        addQuery(value)
                    }}
                >
                    Save
                </button>
                <button
                    className="clear button"
                    onClick={() => {
                        setValue("");
                    }}
                >
                    Clear
                </button>
                <button
                    className="run button"
                    onClick={() => {
                        handleLoadCSV(value)
                    }}
                >
                    Run
                </button>
            </div>
            <Output csvData={csvData} result={result} />
        </div>
    );
}