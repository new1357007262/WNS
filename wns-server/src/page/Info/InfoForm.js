import React from "react";
import { Form,Icon,Input} from "antd";
import $ from 'jquery'


class InfoForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            majors:[],
            // autoCompleteResult:[]
        }
    }
    componentDidMount(){
      // this.loadCollage();
    }
    loadCollage=()=>{
      // let url = "http://localhost:8083/major/findAllWithExtend";
      let url = "http://203.195.219.213:8083/major/findAllWithExtend";
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
    // handleWebsiteChange = value => {
    //   let autoCompleteResult;
    //   if (!value) {
    //     autoCompleteResult = [];
    //   } else {
    //     autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    //   }
    //   this.setState({ autoCompleteResult });
    // };
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
        const headingError = isFieldTouched('heading') && getFieldError('heading');
        const decsError = isFieldTouched('decs') && getFieldError('decs');
          // 注册id属性
        getFieldDecorator("id")
 
        
        return (
            <div>
                 <Form {...formItemLayout} layout="inline" hideRequiredMark>
                    <Form.Item style={{width:458}} label="消息头" validateStatus={headingError ? 'error' : ''} help={headingError || ''}>
                      {getFieldDecorator('heading',{
                        //  initialValue:defaultData.realname || '',     //加默认值
                        rules: [{ required: true, message: '消息头不能为空!' }],
                      })(
                        <Input
                          prefix={<Icon type="schedule" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          // readOnly   //只读
                           placeholder="请输入消息头" 
                        />,
                      )}
                    </Form.Item>
                    <Form.Item style={{width:458}} label="消息标题" validateStatus={titleError ? 'error' : ''} help={titleError || ''}>
                      {getFieldDecorator('title', {
                        rules: [{ required: true, message: '消息标题不能为空!' }],
                      })(
                        <Input
                          prefix={<Icon type="wallet" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          // readOnly   //只读
                           placeholder="请输入消息标题" 
                        />,
                      )}
                    </Form.Item>
                    <Form.Item style={{width:458}} label="上传主题图片" validateStatus={decsError ? 'error' : ''} help={decsError || ''}>
                      {getFieldDecorator('decs',{
                        // initialValue:major.paymentNumber,     //加默认值
                      })(
                        <Input.TextArea
                          prefix={<Icon type="wallet" style={{ color: 'rgba(0,0,0,.25)' }} />} rows={4}
                          // readOnly   //只读
                           placeholder="请输入消息正文" 
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
//   console.log("sss"+JSON.stringify(props))
  for(let key in props.Info){
    obj[key] = Form.createFormField({
      value: props.Info[key]
    })
  }
  return obj;
}
export default Form.create({mapPropsToFields})(InfoForm);