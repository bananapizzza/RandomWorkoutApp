import React from 'react';
import PropTypes from 'prop-types';


const MyProfile = ({username}) => (
    <div>
        {username}
    </div>
);


MyProfile.propTypes = {
    username: PropTypes.string.isRequired
};

export default MyProfile;
