import React from "react";
import {MenuConfigContainer} from "../../../containers/Table/CellContainer/MenuConfigContainer";

import './style.scss';

export default function CellComponent(props) {

    const {value} = props;
    const {car} = props;

    return (
        <td className={'cell'}>
            {
                value
            }

            {
                car ? <MenuConfigContainer car={car}/> : ''
            }
        </td>
    )
}