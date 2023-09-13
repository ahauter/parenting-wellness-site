import React from "react";
import {
    Page,
    Text,
    View, Document, PDFDownloadLink, Font,
} from '@react-pdf/renderer';
import styles from './styles.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from '../../icons';


export default function ViewSelectionsPage({
    selections,
    categoryData,
    onBack
}) {
    const categories = Object.keys(categoryData);
    // show selections if at least one category has selections
    const showSelections = selections &&
        categories.map(cat => selections[cat])
            .filter(sel => sel && sel.length > 0).length > 0;
    return (
        <div className={styles.container}>
            {showSelections && <>
                <h1 className={styles.title}>Your Wellness Selections</h1>
                <div className={styles.linkContainer}>
                    <PDFDownloadLink
                        className={styles.link}
                        document={
                            <ViewSelectionsPDF
                                selections={selections}
                                categoryData={categoryData}
                            />
                        }
                        fileName="wellnessTips.pdf"
                    >
                        Click here to download a printable version of your selections
                    </PDFDownloadLink>
                </div>
                <div
                    className={styles.description}>
                    Based on your selections, here is a list of incremental changes
                    that may be helpful in improving your mental wellness:
                </div>
            </>}
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
                {!showSelections &&
                    <h2 className={styles.noSelection}>You have not selected any items yet</h2>}
                {!showSelections &&
                    <button
                        className={styles.goBackButton}
                        onClick={onBack}>
                        Go Back
                    </button>
                }
            </div>
        </div >
    );
}

export function ViewSelectionsPDF({ selections, categoryData }) {
    /*
    TODO finish that there styles 
    We want bullets for each selection
    */
    const categories = Object.keys(selections);
    Font.register({
        family: 'Lora',
        src: 'https://fonts.gstatic.com/s/lora/v32/0QI6MX1D_JOuGQbT0gvTJPa787weuxJBkqg.ttf'
    });
    return <Document>
        <Page size="LETTER">
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <Text
                    style={{
                        fontSize: 25,
                        margin: 10,
                        fontFamily: 'Lora',
                        padding: 10,
                        textDecoration: 'underline'
                    }}>
                    Incremental changes for mental wellness
                </Text>
            </View>
            <View>
                {categories.map((category) => {
                    const selected = selections[category];
                    const links = categoryData[category].links;
                    console.log("links", links);
                    return <View>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginBottom: 10,
                                    fontFamily: 'Lora',
                                    padding: 10,
                                    color: `${categoryData[category].color}`,
                                    textDecoration: 'underline'
                                }}
                            >
                                {category}
                            </Text>
                        </View>
                        {
                            selected.map(selection => {
                                return <Text
                                    style={{
                                        fontSize: 12,
                                        marginRight: 30,
                                        marginLeft: 30,
                                        fontFamily: 'Lora',
                                        textDecoration: 'underline'
                                    }}
                                    key={selection}>
                                    • {selection}
                                </Text>
                            })
                        }
                        {
                            (links && links.length > 0) && <View>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        marginBottom: 10,
                                        marginRight: 30,
                                        marginLeft: 30,
                                        fontFamily: 'Lora',
                                    }}
                                >
                                    Resources:
                                </Text>
                                {
                                    links.map(link => {
                                        return <Text
                                            style={{
                                                fontSize: 12,
                                                marginRight: 30,
                                                marginLeft: 30,
                                                fontFamily: 'Lora',
                                            }}
                                            key={link}
                                        >
                                            • {link.title}: {link.url}
                                        </Text>
                                    })
                                }
                            </View>
                        }
                    </View>
                })}
            </View>
        </Page>
    </Document >
}