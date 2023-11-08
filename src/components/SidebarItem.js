import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import ModalComponent from "./TableModal.js"

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/sidebar.css";

export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(item.title === "Employee");
    const [selectedCSV, setSelectedCSV] = useState(null);
    const [csvData, setCsvData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const iconMapping = {
        Customers: "bi-people-fill",
        Employee: "bi-person-square",
        Suppliers: "bi-cart-check-fill",
        Orders: "bi-bag-check-fill"
    };

    const handleLoadCSV = (title) => {
        let csvFileName = null;

        if (title === "Customers") {
            csvFileName = "/customers.csv";
        } else if (title === "Employee") {
            csvFileName = "/employees.csv";
        }
        else if (title === "Suppliers") {
            csvFileName = "/suppliers.csv";
        }
        else {
            csvFileName = "/orders.csv";
        }

        if (csvFileName) {
            setSelectedCSV(csvFileName);
            openModal();
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCSV(null);
        setCsvData([]);
    };

    useEffect(() => {
        if (selectedCSV) {
            Papa.parse(selectedCSV, {
                download: true,
                complete: (result) => {
                    setCsvData(result.data);
                }
            });
        }
    }, [selectedCSV]);

    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open table-name" : "sidebar-item table-name"}>
                <div className="sidebar-title">
                    <span>
                        <i
                            className={iconMapping[item.title] || "bi-file-earmark"}
                        ></i>
                        {item.title}
                    </span>
                    <i
                        className="bi-chevron-down toggle-btn"
                        onClick={() => setOpen(!open)}
                    ></i>
                </div>
                <div className="sidebar-content">
                    {item.childrens.map((child, index) => (
                        <SidebarItem key={index} item={child} />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="sidebar-item plain" onClick={() => handleLoadCSV(item.parent)}>
                    <div className="custom-style">
                        <div className="custom-border"></div>
                        <div className="sidebar-subitems">
                            {item.title}{"    "}
                            {item.subtitle && <span className="sidebar-itemSubtitle">{item.subtitle}</span>}
                        </div>
                    </div>
                </div>
                <ModalComponent
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    csvData={csvData}
                    closeModal={closeModal}
                />
            </div>
        );
    }
}