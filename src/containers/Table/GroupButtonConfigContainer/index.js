import {connect} from 'react-redux'
import GroupButtonConfigComponent from '../../../components/Table/GroupButtonConfigComponent'
import {addItem, searchItem} from "../../../store/actions/Table";

const mapStateToProps = state => ({
    characteristic: state.content.data.characteristic,
})

const mapDispatchToProps = {
    addItem,
    searchItem
}

export const GroupButtonConfigContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupButtonConfigComponent);