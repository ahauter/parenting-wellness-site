import React from "react";

export default function ViewSelectionsPage({ selections, onBack }) {
    console.log(selections)
    return (
        <div>
            <h1>View Selections</h1>
            <button onClick={onBack}>Back</button>
            <div>
                <h2>Here are the items you have selected</h2>
                <ul>
                    {selections.map((selection) => (
                        <li key={selection.id}>
                            {selection}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}