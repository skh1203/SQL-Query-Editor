import React, { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Editor from "./Editor";
import PredefinedQuery from "./PredefinedQuery";
import queryValue from "../constants/Queries"

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.css";

export default function Main() {
    const [query, setQuery] = useState("Select * from Customers");
    const [queryList, setQueryList] = useState(queryValue);

    const updateQuery = (newData) => {
        setQuery(newData);
    };

    const addQueryToList = (item) => {
        setQueryList((prevList) => [...prevList, item]);
    };

    return (
        <div className="main">
            <Navbar />
            <div className="container-fluid main-container">
                <div className="row">
                    <div className="col-lg-3 pt-3">
                        <Sidebar />
                    </div>

                    <div className="col-lg-6 center-container">
                        <Editor val={query} addQueryToList={addQueryToList} />
                    </div>

                    <div className="col-lg-3 pt-2">
                        <PredefinedQuery update={updateQuery} queryList={queryList} />
                    </div>
                </div>
            </div>
        </div>
    );
}
