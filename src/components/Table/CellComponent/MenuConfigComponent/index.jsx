import React, {useState} from "react";
import {ModalWindowContainer} from "../../../../containers/Table/ModalWindowContainer";

import './style.scss';

export default function MenuConfigComponent(props) {

    const {car, characteristic} = props;
    const {removeItem} = props;

    const [isOpen, setOpen] = useState(false);

    return (
        <div className={'menuConfig'}>
            <input type={'button'} value={'edit'} className={'menuConfig-button'} onClick={() => {
                setOpen(!isOpen)
            }}/>

            {
                isOpen ? <ModalWindowContainer car={car} characteristic={characteristic} remove={removeItem}
                                               closed={setOpen}/> : ''
            }
        </div>
    )
}