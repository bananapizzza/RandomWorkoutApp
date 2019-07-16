import {connect} from 'react-redux';
import {fetchWorkout} from "../actions/actions_selectWorkout";
import SelectWorkout from "../components/SelectWorkout";

const mapStateToProps = state => ({
    selectedWorkout: state.selectedWorkout.name,
});

const mapDispatchToProps = dispatch => ({
   onClick: () => dispatch(fetchWorkout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectWorkout)