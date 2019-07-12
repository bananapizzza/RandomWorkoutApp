import React from 'react';
import PropTypes from 'prop-types';

const SelectWorkout = ({onClick, selectedWorkout}) => (
    <div>
        <button onClick={onClick}>
            {selectedWorkout ? 'Select Again' : 'Select Workout Randomly'}
        </button>
        <p>
            {selectedWorkout}
        </p>
    </div>
);

SelectWorkout.propTypes = {
    onClick: PropTypes.func.isRequired,
    selectedWorkout: PropTypes.string.isRequired
}


export default SelectWorkout;