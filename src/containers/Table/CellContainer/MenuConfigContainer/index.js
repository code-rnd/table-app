import {connect} from 'react-redux'
import MenuConfigComponent from "../../../../components/Table/CellComponent/MenuConfigComponent";
import {removeItem} from "../../../../store/actions/Table";

const mapStateToProps = state => ({
    characteristic: state.content.data.characteristic
})

const mapDispatchToProps = {
    removeItem
}

export const MenuConfigContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuConfigComponent)