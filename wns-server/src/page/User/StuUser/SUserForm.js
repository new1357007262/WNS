import React from "react";
import { Form,Icon,Input,Select} from "antd";
import $ from 'jquery'


class SUserForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cardNumber:"",
            majors:[]
        }
    }
    componentDidMount(){
      this.loadMajors();
    }
    loadMajors=()=>{
      let url = "http://localhost:8083/major/findAllWithExtend";
      $.get(url,({status,message,data})=>{
          if(status === 200 ){
            this.setState({majors:data})
          }else{
            alert(message)
          }
      })
    }
    // 自定义校验器 
    checkUser=(rule, value, callback)=>{
        let url = "http://localhost:8083/stuUser/CheckUsername";
        setTimeout(() => {
          // 为防止在更新时做校验
          if(!this.props.StuUser){
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
    saveCardNumber=(rule,value,callback)=>{
       setTimeout(() => {
        if(value.length !== 18 ){
          callback("请输入正确的身份证号")
      }else{
        this.setState({cardNumber:value})
        callback()
      }
       }, 1000);
    }
    substr=(str)=>{
      let LenMax = str.length;
        let newstr = str.substring(LenMax-6,LenMax)
        return newstr;
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
        const passowrdError = isFieldTouched('passowrd') && getFieldError('passowrd');
        const realnameError = isFieldTouched('realname') && getFieldError('realname');
        const cardNumberError = isFieldTouched('cardNumber') && getFieldError('cardNumber');
        const houseNumberError = isFieldTouched('houseNumber') && getFieldError('houseNumber');
        const studentStatusError = isFieldTouched('studentStatus') && getFieldError('studentStatus');
        const majorIdError = isFieldTouched('majorId') && getFieldError('majorId');
          // 注册id属性
        getFieldDecorator("id")
 
        const {majors} = this.state;
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
                      {getFieldDecorator('passowrd',{
                         initialValue:this.substr(this.state.cardNumber),     //加默认值
                        rules: [{ required: true, message: '密码不能为空!' }],
                      })(
                        <Input
                          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          readOnly   //只读  
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
                    <Form.Item style={{width:458}} label="身份证号" validateStatus={cardNumberError ? 'error' : ''} help={cardNumberError || ''}>
                      {getFieldDecorator('cardNumber',{
                        rules: [{validator:this.saveCardNumber}],
                      })(
                        <Input
                          prefix={<Icon type="wallet" style={{ color: 'rgba(0,0,0,.25)' }} />}
                           placeholder="请输入身份证号" 
                        />,
                      )}
                    </Form.Item>
                   <Form.Item style={{width:458}} label="宿舍门牌号" validateStatus={houseNumberError ? 'error' : ''} help={houseNumberError || ''}>
                      {getFieldDecorator('houseNumber',{
                        rules: [{ required: true, message: '门牌号不能为空!' }],
                      })(
                        <Input
                        prefix={<Icon type="pay-circle"  style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="请输入宿舍门牌号" 
                        />,
                        )}
                    </Form.Item>
                    <Form.Item style={{width:458}} label="学生报到状态" validateStatus={studentStatusError ? 'error' : ''} help={studentStatusError || ''}>
                      {getFieldDecorator('studentStatus',{
                         initialValue:0,     //加默认值
                      })(
                        <Input
                        prefix={<Icon type="phone"  style={{ color: 'rgba(0,0,0,.25)' }} />}
                        readOnly
                        placeholder="初始默认为0（未报到状态）" 
                        />,
                        )}
                    </Form.Item>
                    <Form.Item style={{width:458}} label="专业名称" validateStatus={majorIdError ? 'error' : ''} help={majorIdError || ''}>
                      {getFieldDecorator('majorId',{
                        //  initialValue:1,     //加默认值
                      })(
                        <Select placeholder="请选择专业">
                            { majors.map(item =>{
                              return (<Select.Option value={item.id}>{item.name}</Select.Option>)
                            })
                          }
                         </Select>
                        
                        )}
                    </Form.Item>
                </Form>

            </div>
        )
    }

}
const mapPropsToFields = (props) =>{
  let obj = {};
  console.log("sss"+JSON.stringify(props))
  for(let key in props.StuUser){
    obj[key] = Form.createFormField({
      value: props.StuUser[key]
    })
  }
  return obj;
}
export default Form.create({mapPropsToFields})(SUserForm);