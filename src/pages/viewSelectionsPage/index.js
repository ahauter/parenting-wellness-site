import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';
import styles from './styles.module.css'

export default function ViewSelectionsPage({ selections, categoryData, onBack }) {
    const categories = Object.keys(categoryData);
    // show selections if at least one category has selections
    const showSelections = selections &&
        categories.map(cat => selections[cat])
            .filter(sel => sel && sel.length > 0).length > 0;
    return (
        <div>
            <h1>View Selections</h1>
            <div>
                {showSelections && <h2>Here are the items you have selected</h2>}
                {showSelections && <div>
                    {categories.map((category) => (
                        <>
                            {
                                selections[category] && selections[category].length > 0 &&
                                <div key={category}>
                                    ADD a logo here
                                    <h3>{category}</h3>
                                    <ul>
                                        {selections[category].map((selection) => (
                                            <li key={selection}>{selection}</li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </>))}
                </div>}
                {!showSelections && <h2>You have not selected any items yet</h2>}
                {!showSelections && <button onClick={onBack}>Go Back</button>}
            </div>
            <div>
                {false &&
                    <PDFDownloadLink document={<ViewSelectionsPDF selections={selections} />} fileName="wellnessTips.pdf">
                        Click here to download your selections
                    </PDFDownloadLink>
                }
            </div>
        </div>
    );
}

export function ViewSelectionsPDF({ selections }) {
    /*
    TODO finish that there styles 
    We want bullets for each selection
    */
    Font.register({ family: 'Lora', src: 'https://fonts.gstatic.com/s/lora/v32/0QI6MX1D_JOuGQbT0gvTJPa787weuxJBkqg.ttf' });
    return <Document>
        <Page size="LETTER">
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text
                    style={{
                        fontSize: 20,
                        marginBottom: 10,
                        fontFamily: 'Lora'
                    }}>
                    Here are a list of incremental changes that will may be helpful in improving your mental wellness
                </Text>
            </View>
            <View>
                {selections.map((selection) => (
                    <Text
                        style={{
                            fontSize: 12,
                            marginBottom: 10,
                            marginRight: 10,
                            fontFamily: 'Lora'
                        }}
                        key={selection.id}>
                        {selection}
                    </Text>
                ))}
            </View>
        </Page>
    </Document>
}