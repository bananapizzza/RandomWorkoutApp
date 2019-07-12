import {connect} from 'react-redux';
import {clickRandomButton} from "../actions/actions_selectWorkout";
import SelectWorkout from "../components/SelectWorkout";

const mapStateToProps = state => ({
    selectedWorkout: state.selectedWorkout,
});

const mapDispatchToProps = dispatch => ({
   onClick: () => dispatch(clickRandomButton())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectWorkout)