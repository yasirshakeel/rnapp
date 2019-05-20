import React from "react";
import { Scene, Router } from
"react-native-router-flux";
import LoginForm from "./components/LoginForm";
const RouterComponent = () => {
return (
<Router>
<Scene key="root" hideNavBar>
<Scene key="auth">
<Scene
key="login"
component={LoginForm}
title="Please Login"
initial
/>
</Scene>
<Scene key="main">
<Scene
key="employeeList"
component={EmployeeList}
title="Employees"
/>
</Scene>
</Scene>


<Scene
key="employeeList"
rightTitle="Add"
onRight={() => {
Actions.employeeCreate();
}}
component={EmployeeList}
title="Employees"
/>
<Scene
key="employeeCreate"
title="Add Employee"
component={EmployeeCreate}
/>

<Card>
<CardSection>
<Input label="Name"
placeholder="Zahid" />
</CardSection>
<CardSection>
<Input label="Phone"
placeholder="+55-555-5555555" />
</CardSection>
<CardSection />
<CardSection>
<CustomButton>Add
Employee</CustomButton>
</CardSection>
</Card>
</Router>
);
};