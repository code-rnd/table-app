import {connect} from 'react-redux'
import TableComponent from "../../../components/Table/TableComponent";

const mapStateToProps = state => ({
    cars: state.content.data.cars,
    characteristic: state.content.data.characteristic
})

const mapDispatchToProps = dispatch => ({})

export const TableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TableComponent)