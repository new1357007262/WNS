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
                <div style={{backgroundColor:'rgba(207,219,198,0.9)',width:500,height:150,position:"absolute",left:100,top:20,borderRadius:20}}>
                    <img src={require('../../static/logo_bg.png')} style={{width:500,height:150,}} />
                    <div className="title">——新生数据管理</div>
                </div>
                <div className="LoginForm">
                    <LoginForm/>
                </div>
                <div style={{position:"absolute",bottom:50,right:160}}><img src={require("../../static/house.gif")} style={{width:150,height:100}}/></div>
            </div>
        )
    }
}

export default withRouter(Login);

