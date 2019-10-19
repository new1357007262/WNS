import React from "react";
import { withRouter } from "react-router-dom";
// import {  } from "antd";
import LoginForm from "./LoginForm"
import "../../style/login.css"

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return (
            <div className="Login">
                {/* <div className="LoginImg"><img src={require('../../static/logo.png')} style={{width:180,height:132}}/></div> */}
                <div className="LoginForm">
                    <LoginForm/>
                </div>
                <div className="LoginBottom"><img src={require("../../static/house.gif")} style={{width:150,height:100}}/></div>
            </div>
        )
    }
}

export default withRouter(Login);

