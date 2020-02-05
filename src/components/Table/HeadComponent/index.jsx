import React from "react";
import CellComponent from "../CellComponent";

export default function HeadComponent(props) {

    const {characteristic} = props;

    return (
        <thead>
        <tr>
            {
                characteristic && Object.keys(characteristic).map((item, key) => (
                    <CellComponent value={characteristic[item]} key={key}/>
                ))
            }
        </tr>
        </thead>
    )
}