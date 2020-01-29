import React, {useState} from "react";
import TextFieldComponent from "./TextFieldComponent";
import {generateCarObj} from "../../../utils/Table/generateCarObj";

import './style.scss';
import {checkForEmptiness} from "../../../utils/Table/ checkForEmptiness";

export default function ModalWindowComponent(props) {

    const {car, characteristic} = props;
    const {updateItem, removeItem, addItem} = props;

    const {closed} = props;

    const [isCarUpdate, setCarUpdate] = useState(car);
    const [isCarAdd, setCarAdd] = useState(generateCarObj(characteristic));

    const handleUpdateItem = () => {
        updateItem({...car, ...isCarUpdate})
        closed(false);
    }
    const handleRemoveItem = () => {
        removeItem(car);
        closed(false);
    }

    const handleAddItem = () => {
        addItem(isCarAdd);
        closed(false);
    }

    const getAddForm = () => {

        // возвращаю, ключ и вэлью хука из текстфилда
        // в хук Модального окна, обновляя локальное значение объекта "car"
        const getValueHook = (key, value) => {
            setCarAdd({...isCarAdd, ...{[key]: value}});
        }

        return (
            <div className={'modalWindow'}>
                {
                    Object.keys(characteristic).map((key, id) => (
                        <TextFieldComponent keyObj={characteristic[key]} getValueHook={getValueHook} keyItem={key}
                                            key={id}/>
                    ))
                }

                <div className={'modalWindow-configButtons margin-top15'}>
                    <input type={'button'} value={'save'} onClick={() => {
                        handleAddItem()
                    }}
                           disabled={checkForEmptiness(isCarAdd)}/>
                    <input type={'button'} value={'cancel'} onClick={() => {
                        closed(false);
                    }}/>
                </div>
            </div>
        )
    }

    const getUpdateForm = () => {

        // возвращаю, ключ и вэлью хука из текстфилда
        // в хук Модального окна, обновляя локальное значение объекта "car"
        const getValueHook = (key, value) => {
            setCarUpdate({...isCarUpdate, ...{[key]: value}});
        }

        return (
            <div className={'modalWindow'}>
                {
                    Object.keys(characteristic).map((key, id) => (
                        <TextFieldComponent keyObj={characteristic[key]} valueObj={car[key]} key={id}
                                            keyItem={key}
                                            getValueHook={getValueHook}/>
                    ))
                }

                <div className={'modalWindow-configButtons margin-top15'}>
                    <input type={'button'} value={'save'} onClick={() => {
                        handleUpdateItem()
                    }}/>
                    <input type={'button'} value={'remove'} onClick={() => {
                        handleRemoveItem()
                    }}/>
                    <input type={'button'} value={'cancel'} onClick={() => {
                        closed(false);
                    }}/>
                </div>
            </div>
        )
    }

    return (
        <div className={'modalWindow-background'}>
            {car && characteristic ? (
                getUpdateForm()
            ) : (
                getAddForm()
            )}
        </div>
    )
}