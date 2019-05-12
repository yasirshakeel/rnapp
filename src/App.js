import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import Loginform from "./component/LoginForm";


export default class App extends Component {


componentWillMount() {
    firebase.initializeApp( {
       apiKey: "AIzaSyDhi2fUHUXcIpfqTTNlm98fEvznMg-Elp8",
       authDomain: "rnapp-9dd2d.firebaseapp.com",
       databaseURL: "https://rnapp-9dd2d.firebaseio.com",
       projectId: "rnapp-9dd2d",
       storageBucket: "rnapp-9dd2d.appspot.com",
       messagingSenderId: "960050194325",
       appId: "1:960050194325:web:fdeae4fbfd9ff99d"
    });
}
    
    render() {
        return(
            <Provider store={createStore(reducers)}>
            <View>

               <Loginform/> 
            
            
            </View>
           
            </Provider>
        );
    }
}