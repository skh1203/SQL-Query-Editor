import "../styles/sidebar.css";
import SidebarItem from "./SidebarItem";
import items from "../json/Sidebar.json";

export default function CombinedComponent() {
    return (
        <div>
            <div className="heading-container">
                <p className="table-heading">TABLES</p>
            </div>
            <div className="sidebar">
                {items.map((item, index) => (
                    <div key={index} className="sidebar-container">
                        <SidebarItem item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}
