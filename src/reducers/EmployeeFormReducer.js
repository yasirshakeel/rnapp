import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeFormReducer from
"./EmployeeFormReducer";

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
    });

import { EMPLOYEE_UPDATE } from
"../actions/types";
const INITIAL_STATE = { name: "", phone: "",
shift: "" };
export default (state = INITIAL_STATE, action)
=> {
switch (action.type) {

case EMPLOYEE_UPDATE:

return { ...state, [action.payload.prop]:
action.payload.value };
default:
return state;
}
};