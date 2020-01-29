import React from "react";
import HeadComponent from "../HeadComponent";
import {GroupButtonConfigContainer} from "../../../containers/Table/GroupButtonConfigContainer";
import {BodyContainer} from "../../../containers/Table/BodyContainer";

import './style.scss';

export default function TableComponent(props) {

    const {characteristic, cars} = props;

    return (
        <div className={'table'}>
            <GroupButtonConfigContainer/>
            <table className={'margin-top15'}>
                <HeadComponent characteristic={characteristic}/>
                <BodyContainer cars={cars}/>
            </table>
        </div>
    )
}