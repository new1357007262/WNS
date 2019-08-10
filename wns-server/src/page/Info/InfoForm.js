import React from "react";
import { Form,Icon,Input, Select,Upload,Button} from "antd";
import $ from 'jquery'


class InfoForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            majors:[]
        }
    }
    componentDidMount(){
      this.loadCollage();
    }
    loadCollage=()=>{
      let url = "http://localhost:8083/major/findAllWithExtend";
      $.get(url,({status,data})=>{
          if(status === 200){
              this.setState({majors:data})
          }else{
            alert("error")
          }
      })
    }
    // 自定义校验器 
    checkname=(rule, value, callback)=>{
        let url = "";
        // let url2 = "http://localhost:8083/major/FindById";
        setTimeout(() => {
          $.get(url,{name:value},({status,message,data})=>{
              if(status === 200 && data != null){
                callback("专业已存在，请勿重复添加");
              }
              callback();
                
          })
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
        const titleError = isFieldTouched('title') && getFieldError('title');
        const descriptionError = isFieldTouched('description') && getFieldError('description');
        const paymentNumberError = isFieldTouched('paymentNumber') && getFieldError('paymentNumber');
        const majorIdError = isFieldTouched('majorId') && getFieldError('majorId');
          // 注册id属性
        getFieldDecorator("id")
 
        const {majors} = this.state;
        return (
            <div>
                 <Form {...formItemLayout} layout="inline" hideRequiredMark>
                    <Form.Item style={{width:458}} label="课程名称" validateStatus={titleError ? 'error' : ''} help={titleError || ''}>
                      {getFieldDecorator('title',{
                        //  initialValue:defaultData.realname || '',     //加默认值
                        rules: [{ required: true, message: '课程名不能为空!' }],
                      })(
                        <Input
                          prefix={<Icon type="schedule" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          // readOnly   //只读
                           placeholder="请输入课程名称" 
                        />,
                      )}
                    </Form.Item>
                    <Form.Item style={{width:458}} label="描述" validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
                      {getFieldDecorator('description', {
                        rules: [{ required: true, message: '描述信息不能为空!' }],
                      })(
                        <Input
                          prefix={<Icon type="wallet" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          // readOnly   //只读
                           placeholder="请输入专业描述信息" 
                        />,
                      )}
                    </Form.Item>
                    <Form.Item style={{width:458}} label="上传主题图片" validateStatus={paymentNumberError ? 'error' : ''} help={paymentNumberError || ''}>
                      {getFieldDecorator('paymentNumber',{
                        // initialValue:major.paymentNumber,     //加默认值
                      })(
                        <Upload name="logo" action="/upload.do" listType="picture">
                          <Button>
                            <Icon type="upload" /> Click to upload
                          </Button>
                        </Upload>,
                        )}
                    </Form.Item>
                    <Form.Item style={{width:458}} label="消息路径地址" validateStatus={majorIdError ? 'error' : ''} help={majorIdError || ''}>
                      {getFieldDecorator('majorId',{
                        // initialValue:1,     //加默认值
                        rules: [{ required: true, message: '路径不能为空!' }],
                      })(
                        <Input
                        prefix={<Icon type="wallet" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        // readOnly   //只读
                         placeholder="请输入专业描述信息" type="url"
                        />
                        )}
                    </Form.Item>
                </Form>

            </div>
        )
    }

}
const mapPropsToFields = (props) =>{
  let obj = {};
//   console.log("sss"+JSON.stringify(props))
  for(let key in props.Info){
    obj[key] = Form.createFormField({
      value: props.Info[key]
    })
  }
  return obj;
}
export default Form.create({mapPropsToFields})(InfoForm);