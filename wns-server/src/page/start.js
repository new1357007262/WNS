import React from 'react'
import { BrowserRouter , Route , Switch ,Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import "../style/start.css"

import Student from "./Student/Student"

class Start extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){
      console.log("看这")
      // console.log(this.props.location.state.User)
      console.log("上面")
    }
    render(){
        const { Header, Content, Footer, Sider } = Layout;
        const {SubMenu} = Menu;
  return (
    <Layout>
      <BrowserRouter>
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
        <Menu theme="light" style={{height:'100%'}} mode="vertical" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/student">
            <Icon type="contacts" />
            <span>学生管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/category">
            <Icon type="file-text" />
            <span>课程管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/order">
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
                <Link to="/stuUser">
                <span>教师用户</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="5">
                <Link to="/tesUser">
                <span>学生用户</span>
                </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="6">
            <Link to="/user">
            <Icon type="notification" />
            <span>消息管理</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
      <Header className="start_header" style={{ background:"#11BCB1",color:"#fff", padding: 0 ,textAlign:'center',fontSize:25}} >迎新数据管理系统
              <span className="start_user">{this.props.location.state.User.realname+" 你好！"}<span onClick={()=>{this.props.history.push("/")}}>退出</span></span>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight:480  }}>
          <Switch>
            <Route path="/start" component={Student}/>
            <Route path="/student" component={Student}/>
           </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>迎新数据管理 ©2019 Created by 刘少雄</Footer>
      </Layout>
      </BrowserRouter>
    </Layout>
  );
    }
}

export default Start;