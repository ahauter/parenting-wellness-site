import React from "react";

export default function ViewSelectionsPage({ selections, onBack }) {
    const showSelections = selections && selections.length ? true : false;
    return (
        <div>
            <h1>View Selections</h1>
            <div>
                {showSelections && <h2>Here are the items you have selected</h2>}
                <ul>
                    {showSelections && selections.map((selection) => (
                        <li key={selection.id}>
                            {selection}
                        </li>
                    ))}
                </ul>
                {!showSelections && <h2>You have not selected any items yet</h2>}
                {!showSelections && <button onClick={onBack}>Go Back</button>}
            </div>
        </div>
    );
}