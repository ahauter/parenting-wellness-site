import React from "react";
import {
    Page,
    Text,
    View, Document, PDFDownloadLink, Font
} from '@react-pdf/renderer';
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
            <div className={styles.linkContainer}>
                <PDFDownloadLink className={styles.link} document={<ViewSelectionsPDF selections={selections} />} fileName="wellnessTips.pdf">
                    Click here to download your selections
                </PDFDownloadLink>
            </div>
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
        </div >
    );
}

export function ViewSelectionsPDF({ selections }) {
    /*
    TODO finish that there styles 
    We want bullets for each selection
    */
    const categories = Object.keys(selections);

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
                        fontFamily: 'Lora',
                        padding: 10
                    }}>
                    List of incremental changes that for mental wellness
                </Text>
            </View>
            <View>
                {categories.map((category) => {
                    const selected = selections[category];
                    return <View>
                        <Text
                            style={{
                                fontSize: 20,
                                marginBottom: 10,
                                fontFamily: 'Lora',
                                padding: 10,
                                color: selections[category].color,
                                textDecoration: 'underline'
                            }}
                        >
                            {category}
                        </Text>
                        {selected.map(selection => {
                            return <Text
                                style={{
                                    fontSize: 12,
                                    marginBottom: 10,
                                    marginRight: 10,
                                    fontFamily: 'Lora',
                                    padding: 10,
                                }}
                                key={selection}>
                                {selection}
                            </Text>
                        })}
                    </View>
                })}
            </View>
        </Page>
    </Document>
}