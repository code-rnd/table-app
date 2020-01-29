import React, {useState} from "react";
import ModalWindowComponent from "../ModalWindowComponent";

import './style.scss';

export default function GroupButtonConfigComponent(props) {

    const {characteristic} = props;
    const {addItem, searchItem} = props;

    const [isOpen, setOpen] = useState(false);
    const [isSearchText, setSearchText] = useState('');

    const handleChangeSearch = (value) => {
        setSearchText(value);
        searchItem(value);
    }

    return (
        <div className={'groupButtonConfig'}>

            <div className={'groupButtonConfig-configInputs'}>
                <input type={'text'} value={isSearchText} placeholder={'global search...'} onChange={(e) => {
                    handleChangeSearch(e.currentTarget.value);
                }}/>
                <input type={'button'} value={'add item'} onClick={() => {
                    setOpen(!isOpen);
                }}/>
            </div>
            {
                isOpen ? (
                    <ModalWindowComponent
                        characteristic={characteristic}
                        addItem={addItem}
                        closed={setOpen}/>
                ) : ('')
            }

        </div>
    )
}