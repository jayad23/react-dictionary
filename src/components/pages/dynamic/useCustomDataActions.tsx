import React, { useContext } from "react"
import { SearchContext } from "@context/Context";
import { CustomRow } from "./components/CustomRow";

export const useCustomDataActions = () => {
    const { state } = useContext(SearchContext);
    const rowTitles = {
        en: {
            id: "Id",
            description: "Description",
            reading: "Reading Material",
            media: "YouTube Tutorial",
            lang: "Language"
        },
        es: {
            id: "Id",
            description: "Descripción",
            reading: "Material de Lectura",
            media: "Tutorial en YouTube",
            lang: "Lenguaje"
        }
    };

    const columns = [
        {
            name: `${rowTitles[state.lang].id}`,
            selector: (row: any) => row.id,
            width: "5%",
            center: true
        },
        {
            name: `${rowTitles[state.lang].description}`,
            selector: (row: any) => row.description[state.lang],
            center: false
        },
        {
            name: `${rowTitles[state.lang].lang}`,
            selector: (row: any) => row.lang === "es" ? "Español" : "English",
            width: "10%",
            center: true
        },
        {
            name: `${rowTitles[state.lang].reading}`,
            selector: (row: any) => <CustomRow from="reading" row={row.reading}/>,
            center: false
        },
        {
            name: `${rowTitles[state.lang].media}`,
            selector: (row: any) => <CustomRow from="video" row={row.media}/>,
            center: false
        },
    ];


    return { columns };
}