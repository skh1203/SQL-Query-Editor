import React from "react";
import "../styles/PredefinedQuery.css"

export default function PredefinedQuery({ update, queryList }) {
    const handleButtonClick = (newValue) => {
        update(newValue);
    };

    return (
        <div className="query-container">
            <div className="query-title">
                <p className="query-text">Available Queries</p>
            </div>

            <div className="query-main">
                {queryList.map((item, index) => (
                    <p
                        key={index}
                        className="query-box"
                        onClick={() => handleButtonClick(item.query)}
                    >
                        {item.query}
                    </p>
                ))}
            </div>
        </div>
    );
}