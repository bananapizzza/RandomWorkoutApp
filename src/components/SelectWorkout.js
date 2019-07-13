import React from 'react';
import PropTypes from 'prop-types';

class SelectWorkout extends React.Component {
    constructor(props){
        super(props);
        this.state = {workoutList: ""};
    }
    getWorkoutList = () => {
        fetch("http://localhost:5000/").then(result => {
            if (result.status >= 400) {
                throw new Error("Bad response from server");
            }
            return result.json();
        }).then((data) => {
            console.log(data);
            this.setState({
                workoutList: data
            });
        });
    };

    render(){
        return(
            <div>
                <button onClick={this.props.onClick}>
                    {this.props.selectedWorkout ? 'Select Again' : 'Select Workout Randomly'}
                </button>
                <p>
                    {this.props.selectedWorkout}
                </p>
                <button onClick={this.getWorkoutList}>
                    Get Workout List
                </button>
                <p>
                    {this.state.workoutList}
                </p>
            </div>
        );
    }
}



SelectWorkout.propTypes = {
    onClick: PropTypes.func.isRequired,
    selectedWorkout: PropTypes.string.isRequired
};


export default SelectWorkout;