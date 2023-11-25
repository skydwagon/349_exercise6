import React from 'react';
import Keys from "./ButtonKeys"; 
import Screen from "./DisplayScreen"; 

export default function Container() {
    return (
        <div>
            <div className="calcBody">
                <Screen />
                <Keys />
            </div>
        </div>
    )
}