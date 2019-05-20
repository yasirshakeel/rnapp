import { employeeUpdate, employeeCreate } from
"../actions";
import { EMPLOYEE_UPDATE } from "./types";

export default connect(
    mapStateToProps,
    { employeeUpdate, employeeCreate }
    )(EmployeeCreate);
export const employeUpdate = ({ prop, value })
=> {
return {
type: EMPLOYEE_UPDATE,
payload: { prop, value }
};
};