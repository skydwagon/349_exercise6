import React from "react"; 
import Keys from "./ButtonKeys"; 

export default function Screen() {
    return (
        <div class="calcDisplay">
            <input type="text" className="displayText" id="displayBox"></input>
        </div>
    );
}