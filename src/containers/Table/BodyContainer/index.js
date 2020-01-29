import {connect} from 'react-redux'
import BodyComponent from "../../../components/Table/BodyComponent";

const mapStateToProps = state => ({
    searchString: state.content.searchString,
})

const mapDispatchToProps = {}

export const BodyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BodyComponent);