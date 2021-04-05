import React from "react";
import "./SidebarOption.css";

//Pass a component as a prop
function SidebarOption({ active, text, Icon}) { //pass props with active, text, and icon
    return (
        //if youre active then we want the color of the text to change the color of blue but by default home should be active
        <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
            <Icon />
            <h2>{text}</h2>            
        </div>
    )
}

export default SidebarOption
