import React, {useState} from "react";

import './style.scss';

export default function TextFieldComponent(props) {

    const {keyObj, valueObj} = props;

    const {keyItem} = props;
    const {getValueHook} = props;

    const [isTextUpdate, setTextUpdate] = useState(valueObj);
    const [isTextAdd, setTextAdd] = useState('');


    const getTextFieldAddForm = () => {

        const handleChangeInput = (value) => {
            setTextAdd(value);
            // передаю значение хука текстфилда
            // в хук модального окна
            getValueHook(keyItem, value);
        }

        return (
            <div className={'modalWindow-textField margin-top15'}>
                {keyObj}
                <input type={'text'} value={isTextAdd} onChange={(e) => {
                    handleChangeInput(e.currentTarget.value)
                }} disabled={keyObj === 'id'}/>
            </div>
        )
    }

    const getTextFieldUpdateForm = () => {

        const handleChangeInput = (value) => {
            setTextUpdate(value);
            // передаю значение хука текстфилда
            // в хук модального окна
            getValueHook(keyItem, value);
        }

        return (
            <div className={'modalWindow-textField margin-top15'}>
                {keyObj}
                <input type={'text'} value={isTextUpdate} onChange={(e) => {
                    handleChangeInput(e.currentTarget.value)
                }} disabled={keyObj === 'id'}/>
            </div>
        )
    }

    return (
        valueObj ? (getTextFieldUpdateForm()) : (getTextFieldAddForm())
    )
}