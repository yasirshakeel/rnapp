import React, { Component } from "react";
import {Card, CardSection, Input, CustomButton} from "./common";
import { connect } from "react-redux";
import { emailChanged } from "../action";
class LoginForm extends Component{
    
    onEmailChange(text) {
        this.PaymentResponse.emailChanged(text);
    }
    
    render(){

        return(
            <Card>
                <CardSection>
                    <Input  label="Email" placeholder="User@gmail.com" 
                    onChangeText = {this.onEmailChange.bind(this)}/>
                </CardSection>
                <CardSection>
                    <Input  label="Password" placeholder="Pasword"/>
                </CardSection>
                <CardSection>
                    <CustomButton> Login </CustomButton>
                </CardSection>
            </Card>
        );
    }
}
export default connect(null,emailChanged) (LoginForm);
