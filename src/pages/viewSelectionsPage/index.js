import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';
import styles from './styles.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from '../../icons';


export default function ViewSelectionsPage({ selections, categoryData, onBack }) {
    const categories = Object.keys(categoryData);
    // show selections if at least one category has selections
    const showSelections = selections &&
        categories.map(cat => selections[cat])
            .filter(sel => sel && sel.length > 0).length > 0;
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Wellness Selections</h1>
            <div
                className={styles.description}>
                Based on your selections, here is a list of incremental changes
                that may be helpful in improving your mental wellness:
            </div>
            <div className={styles.contentContainer}>
                {showSelections && <div>
                    {categories.map((category) => (
                        <>
                            {
                                selections[category] &&
                                selections[category].length > 0 &&
                                <div key={category}>
                                    <div
                                        style={{
                                            color: categoryData[category].color,
                                            borderBottom: `5px solid ${categoryData[category].color}`,
                                        }}
                                        className={styles.headerContainer}>
                                        <FontAwesomeIcon icon={icons(category)} />
                                        <div className={styles.categoryHeader}>{category}</div>
                                    </div>
                                    <ul className={styles.selectionList}>
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
                    <PDFDownloadLink document={<ViewSelectionsPDF selections={[]} />} fileName="wellnessTips.pdf">
                        Click here to download your selections
                    </PDFDownloadLink>
                }
            </div>
        </div >
    );
}

export function ViewSelectionsPDF({ selectionsWithCategories, selections }) {
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