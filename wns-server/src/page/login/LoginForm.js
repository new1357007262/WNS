import { Form, Icon, Input, Button ,Modal} from 'antd';
import React from "react"
import {withRouter} from "react-router-dom"
import $ from "jquery";
import Register from "./Register";
// import '../style/login.css'

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginForm extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        visible:false,
        // disabled:true,
        User:{},
        NewUser:{}
      }
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    // validateFields  数据校验    form自带
    this.props.form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
              // let url = "http://localhost:8083/teaUser/Login";
              let url = "http://203.195.219.213:8083/teaUser/Login";
              $.get(url,values,({status,message,data})=>{
                if(status === 200 && data!=null){
                  console.log(JSON.stringify(data))
                  this.setState({
                    User:data
                  })
                  console.log(this.state.User)
                  this.props.history.push({"pathname":"/start",state:{User:data}})
                }else{
                  alert(message)
                }
          })
        }
      })
    }

    SelectSubmit = (e) =>{
      // e.preventDefault();
      // this.state.form.validateFields((err,values)=>{
      this.state.form.validateFieldsAndScroll((err,values)=>{
        if(!err){
          console.log("====="+JSON.stringify(values));
          // let url = "http://localhost:8083/teaUser/saveOrUpdate";
          let url = "http://203.195.219.213:8083/teaUser/saveOrUpdate";
          $.post(url,values,({status,message})=>{
            if(status === 200){
              
              this.setState({
                NewUser:values,
                visible:false
              })
              console.log(JSON.stringify("--------"+this.state.NewUser))
              this.props.history.push("/start")
            
            }else{
              alert(message)
              this.setState({visible:false})
            }
          })
        }
      })
  }


    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
    SaveFormRef = (form) => {
      console.log(form);
      this.setState({
        form
      })
    }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span:16 },
      },
    };
    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div className="login" style={{textAlign:"center"}}>
        <Form {...formItemLayout} layout="inline" onSubmit={this.handleSubmit}>
        {/* getFieldDecorator获取属性包装器 */}
        <Form.Item style={{width:299}} label="用户名" validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            // 规则   表单验证规则
            rules: [{ required: true, message: '用户名不能为空!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名" 
            />,
          )}
        </Form.Item><br/>
        <Form.Item style={{width:299,marginBottom:20,marginTop:10}} label="密码" validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '密码不能为空!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />,
          )}
        </Form.Item>
        <br/>
              <div>
              <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} >
              Log in
            </Button>
            <Button type="primary" style={{marginLeft:10}} onClick={this.showModal}>Register</Button>
              </div>
           
      </Form>
      <Modal
          title="请输入需要注册的用户信息"
          visible={this.state.visible}
          onOk={this.SelectSubmit}
          onCancel={this.handleCancel}
        >
           <Register ref={this.SaveFormRef}/>
      </Modal>
      </div>
    );
  }
}



export default withRouter(Form.create()(LoginForm));

