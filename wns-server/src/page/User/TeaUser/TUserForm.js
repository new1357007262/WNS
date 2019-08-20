import React from "react";
import { Form,Icon,Input} from "antd";
import $ from 'jquery'


class TUserForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    componentDidMount(){
      // this.loadMajors();
    }
    // 自定义校验器 
    checkUser=(rule, value, callback)=>{
        // let url = "http://localhost:8083/teaUser/CheckUsername";
        let url = "http://203.195.219.213:8083/teaUser/CheckUsername";
        setTimeout(() => {
          // 为防止在更新时做校验
          if(!this.props.TeaUser){
            $.get(url,{username:value},(data)=>{
                if(data != null){
                  callback("用户存在，请勿重复添加");
                }
                callback(); 
            })
          }else{
            callback();
          }
        }, 1000);
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
        const passowrdError = isFieldTouched('password') && getFieldError('password');
        const realnameError = isFieldTouched('realname') && getFieldError('realname');
          // 注册id属性
        getFieldDecorator("id")
 
        return (
            <div>
                 <Form {...formItemLayout} layout="inline" hideRequiredMark>
                    <Form.Item style={{width:458}} label="学号" validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                    {getFieldDecorator('username', {
                      // initialValue:123,     //加默认值
                        // 规则   表单验证规则
                        rules: [{ required: true, message: '学号不能为空!' },{validator:this.checkUser}],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="请输入学号" 
                        />,
                    )}
                    </Form.Item>
                     <Form.Item style={{width:458}} label="密码" validateStatus={passowrdError ? 'error' : ''} help={passowrdError || ''}>
                      {getFieldDecorator('password',{
                        //  initialValue:this.substr(this.state.cardNumber),     //加默认值
                        rules: [{ required: true, message: '密码不能为空!' }],
                      })(
                        <Input
                          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          // readOnly   //只读  
                           placeholder="请输入密码"  type="password"
                        />,
                      )}
                    </Form.Item>
                    <Form.Item style={{width:458}} label="真实姓名" validateStatus={realnameError ? 'error' : ''} help={realnameError || ''}>
                      {getFieldDecorator('realname', {
                        rules: [{ required: true, message: '姓名不能为空!' }],
                      })(
                        <Input
                          prefix={<Icon type="schedule" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          // readOnly   //只读
                           placeholder="请输入姓名" 
                        />,
                      )}
                    </Form.Item>
                </Form>

            </div>
        )
    }

}
const mapPropsToFields = (props) =>{
  let obj = {};
  // console.log("sss"+JSON.stringify(props))
  for(let key in props.TeaUser){
    obj[key] = Form.createFormField({
      value: props.TeaUser[key]
    })
  }
  return obj;
}
export default Form.create({mapPropsToFields})(TUserForm);