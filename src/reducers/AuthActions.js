import { EMAIL_CHANGED } from "./types";
import { Actions } from "./node_modules/react-native-router-flux";
export * from "./AuthActions";
export * from "./EmployeeActions";

export const emailChanged = text => {
    return {
        type: "EMAIL_CHANGED",
        payload: text
    };
};
export const loginUser = ({ email, password }) => {
    return dispatch => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => this.loginUserSuccess(dispatch, user))
    .catch(() => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => this.loginUserSuccess(dispatch, user));
    });
    };
    };
    const loginUserSuccess = (dispatch, user) => {
        dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
        });
        Actions.employeeList();
        };