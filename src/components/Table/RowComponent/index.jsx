import React from "react";
import CellComponent from "../CellComponent";

import './style.scss';

export default function RowComponent(props) {

    const {car} = props;

    return (
        <tr className={'row'}>
            {
                car && Object.keys(car).map((item, key) => (
                    <CellComponent value={car[item]} key={key}/>
                ))
            }
            <CellComponent car={car}/>
        </tr>
    )
}