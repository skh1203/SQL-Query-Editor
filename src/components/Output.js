import React from "react";
import "../styles/output.css";

export default function Output({ csvData, result }) {
    return (
        <div className="output-container">
            <div className="output-title">Output</div>
            <div className={`output ${csvData.length > 0 ? "" : "active"}`}>
                {csvData.length > 0 ? (
                    <table className="output-table">
                        <thead>
                            <tr>
                                {csvData[0].map((columnName, index) => (
                                    <th key={index} className="modal-columns">
                                        {columnName}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {csvData.slice(1).map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex} className="modal-data">
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="result-notFound">{result}</div>
                )}
            </div>
        </div>
    );
}
