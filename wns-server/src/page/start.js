import React from 'react'
import {  withRouter, Route , Switch ,Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import "../style/start.css"

import Student from "./Student/Student"
import StuUser from "./User/StuUser/StuUser"
import TeaUser from './User/TeaUser/TeaUser'
import Major from './Major/Major'
import Course from './Course/Course'
import Info from './Info/Info'

class Start extends React.Component{
    constructor(props){
        super(props)
        this.state={
            User:null
        }
    }
  componentDidMount(){
      // console.log(this.props.location.state.User)
      if(this.props.location.state){
        this.setState({User:this.props.location.state.User})
      }else{
        this.setState({User:null})
      }
      // if(this.props.location.state){
      //   this.setState({
      //     User:this.props.location.state.User
      //   })
      // }else{
      //   // alert("请先登录")
      //   this.props.history.push("/")
      // }
      
    }
    render(){
        const { Header, Content, Footer, Sider } = Layout;
        const {SubMenu} = Menu;
  return (
    <Layout>
      <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      >
        <div className="logo" ><img src={require("../static/logo_bg.png")} style={{width:200,height:60,backgroundColor:'#fff'}}/></div>
        <Menu theme="light" style={{height:'100%'}} mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to={`${this.props.match.path}/student`}>
            <Icon type="contacts" />
            <span>学生管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={`${this.props.match.path}/course`}>
            <Icon type="file-text" />
            <span>课程管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={`${this.props.match.path}/major`}>
            <Icon type="appstore" />
            <span>专业管理</span>
            </Link>
          </Menu.Item>
          <SubMenu
            title={
              <span>
                <Icon type="user" />
                <span>用户管理</span>
              </span>}
          >
            <Menu.Item key="4">
                <Link to={`${this.props.match.path}/teaUser`}>
                <span>教师用户</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="5">
                <Link to={`${this.props.match.path}/stuUser`}>
                <span>学生用户</span>
                </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="6">
            <Link to={`${this.props.match.path}/info`}>
            <Icon type="notification" />
            <span>消息管理</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
      <Header className="start_header" style={{ background:"#11BCB1",color:"#fff", padding: 0 ,textAlign:'center',fontSize:25}} >迎新数据管理系统{ 
      (
        this.state.User != null ?  
        (<span className="start_user">{this.state.User.realname+" 你好！"}<span onClick={()=>{this.props.history.push("/");this.setState({User:{}})}}>退出</span></span>)
        : (<span className="start_user" onClick={()=>{this.props.history.push("/");this.setState({User:{}})}}>请登录</span>))}
              
        </Header>
        <Content style={{ margin: '16px 12px 0' }}>
          <div style={{ padding: 16, background: '#fff', minHeight:450  }}>
          <Switch>
            <Route exact path={`${this.props.match.path}`} component={Student}/>
            <Route path={`${this.props.match.path}/student`} component={Student}/>
            <Route path={`${this.props.match.path}/stuUser`} component={StuUser}/>
            <Route path={`${this.props.match.path}/teaUser`} component={TeaUser}/>
            <Route path={`${this.props.match.path}/major`} component={Major}/>
            <Route path={`${this.props.match.path}/course`} component={Course}/>
            <Route path={`${this.props.match.path}/info`} component={Info}/>
           </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>迎新数据管理 ©2019 Created by 刘少雄</Footer>
      </Layout>
      
    </Layout>
  );
    }
}

export default withRouter(Start);