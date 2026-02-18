import { useState } from "react";
import { Link } from "react-router-dom";
import { DynamicIcon } from 'lucide-react/dynamic';

const menuItems = [
    {menuID: 1, menuTitle: "Dashboard", navigation: "/", menuIcon: "layout-dashboard" as const},
    {menuID: 2, menuTitle: "Worksheets", navigation: "/worksheet", menuIcon: "pickaxe" as const},
    {menuID: 3, menuTitle: "Schedule", navigation: "/schedule", menuIcon: "calendar-days" as const},
    {menuID: 4, menuTitle: "Parts", navigation: "/parts", menuIcon: "package" as const},
    {menuID: 5, menuTitle: "Admin", navigation: "/admin", menuIcon: "shield-user" as const},
]

const notSelectedStyles = "flex items-center px-2 py-1.5 text-body rounded-base hover:bg-gray-50 hover:text-blue-500 group";
const selectedStyles = "flex items-center px-2 py-1.5 text-body rounded-lg text-blue-500 font-semibold bg-blue-200 hover:bg-blue-300 hover:text-blue-700 group";

function SideNav() {
    const [selectedMenu, setSelectedMenu] = useState<number>(1);
    return (
        <aside id="default-sidebar" className="h-screen z-40 w-50 h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft shadow-lg rounded-br-2xl rounded-tr-2xl border border-gray-200">
                <ul className="space-y-2 font-medium">
                    {menuItems.map((item) => (
                        <li onClick={() => setSelectedMenu(item.menuID)} key={item.menuID}>
                            <Link to={item.navigation} className={item.menuID === selectedMenu ? selectedStyles : notSelectedStyles}>
                                <DynamicIcon name={item.menuIcon} size={24} />
                                <span className="ms-3">{item.menuTitle}</span>
                            </Link>
                        </li>
                    ))}
                    
                </ul>
            </div>
        </aside>
    )
}

export default SideNav