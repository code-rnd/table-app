import {connect} from 'react-redux'
import ModalWindowComponent from "../../../components/Table/ModalWindowComponent";
import {addItem, removeItem, updateItem} from "../../../store/actions/Table";

const mapStateToProps = state => ({})

const mapDispatchToProps = {
    updateItem,
    removeItem,
    addItem
}

export const ModalWindowContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalWindowComponent)