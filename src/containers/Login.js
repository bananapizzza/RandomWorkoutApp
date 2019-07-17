import {connect} from 'react-redux';
import LoginScreen from "../components/LoginScreen";
import {fetchLoginResult} from "../actions/actions_login";


const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(fetchLoginResult())
});

export default connect(
    mapDispatchToProps
)(LoginScreen);