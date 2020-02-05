import React from "react";
import RowComponent from "../RowComponent";
import {searchItemUtil} from "../../../utils/Table/searchItemUtil";

export default function BodyComponent(props) {

    const {cars} = props;
    const {searchString} = props;

    return (
        <tbody>
        {
            cars && cars.length ? (
                searchItemUtil(cars,searchString).map((car, key) => (
                    <RowComponent car={car} key={key}/>
                ))
            ) : (
                <RowComponent/>
            )
        }
        </tbody>
    )
}