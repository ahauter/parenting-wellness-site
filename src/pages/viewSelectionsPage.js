import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';

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
            <div>
                {showSelections &&
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