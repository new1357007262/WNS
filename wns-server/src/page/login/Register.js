import React from "react";
import { Form,Icon,Input} from "antd";
import $ from 'jquery'


// function hasErrors(fieldsError) {
//     return Object.keys(fieldsError).some(field => fieldsError[field]);
//   }
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            User:{}
        }
    }



    SelectSubmit = (e) =>{
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
          if(!err){
            console.log(values);
            let url = "";
            $.get(url,values,({status,message,data})=>{
              if(status === 200 && data != null){
                console.log(JSON.stringify(data))
                this.setState({
                      User:data,
                })
                console.log(this.state.User)
              }else{
                alert(message)
              }
            })
          }
        })
    }

    checkUser=(rule, value, callback)=>{
        let url = "http://localhost:8083/teaUser/CheckUsername";
        $.get(url,{username:value},({status,message,data})=>{
            if(status === 200 && data !=null){
                callback("用户名存在请重新输入")
            }else{
                callback();
            }
        })
    }


    render(){
        const { getFieldDecorator,  getFieldError, isFieldTouched } = this.props.form;
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
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        const realnameError = isFieldTouched('realname') && getFieldError('realname');
        return (
            <div>
                 <Form {...formItemLayout} layout="inline">
                    <Form.Item style={{width:458}} label="用户名" validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                    {getFieldDecorator('username', {
                        // 规则   表单验证规则
                        rules: [{ required: true, message: '用户名不能为空!' },{validator:this.checkUser}],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="请输入用户名" 
                        />,
                    )}
                    </Form.Item>
                    <Form.Item style={{width:458}} label="密码" validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
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
                    <Form.Item style={{width:458}} label="真实姓名" validateStatus={realnameError ? 'error' : ''} help={realnameError || ''}>
                      {getFieldDecorator('realname', {
                        rules: [{ required: true, message: '姓名不能为空!' }],
                      })(
                        <Input
                          prefix={<Icon type="solution" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="请输入真实姓名"
                        />,
                      )}
                    </Form.Item>
                    
                </Form>

            </div>
        )
    }

}
// const mapPropsToFields=(props)=>{
//     // alert(JSON.stringify(props))
//     return {
//         username: Form.createFormField({
//             // ...props.username,
//             value: props.username
//           }),
//     }
// }
export default Form.create()(Register);