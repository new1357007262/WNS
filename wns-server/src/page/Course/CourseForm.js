import React from "react";
import { Form,Icon,Input, Select} from "antd";
import $ from 'jquery'


class CourseForm extends React.Component{
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
        const nameError = isFieldTouched('name') && getFieldError('name');
        const descriptionError = isFieldTouched('description') && getFieldError('description');
        const majorIdError = isFieldTouched('majorId') && getFieldError('majorId');
          // 注册id属性
        getFieldDecorator("id")
 
        const {majors} = this.state;
        return (
            <div>
                 <Form {...formItemLayout} layout="inline" hideRequiredMark>
                    <Form.Item style={{width:458}} label="课程名称" validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
                      {getFieldDecorator('name',{
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
                    {/* <Form.Item style={{width:458}} label="缴费金额" validateStatus={paymentNumberError ? 'error' : ''} help={paymentNumberError || ''}>
                      {getFieldDecorator('paymentNumber',{
                        // initialValue:major.paymentNumber,     //加默认值
                        rules: [{ required: true, message: '金额不能为空!' }],
                      })(
                        <Input
                        prefix={<Icon type="pay-circle"  style={{ color: 'rgba(0,0,0,.25)' }} />}
                        // readOnly
                        // readOnly   //只读
                        placeholder="请优先输入学号查看缴纳学费" 
                        />,
                        )}
                    </Form.Item> */}
                    <Form.Item style={{width:458}} label="所属专业" validateStatus={majorIdError ? 'error' : ''} help={majorIdError || ''}>
                      {getFieldDecorator('majorId',{
                        // initialValue:1,     //加默认值
                        rules: [{ required: true, message: '专业不能为空!' }],
                      })(
                          <Select placeholder="请选择所属专业">
                            {
                              majors.map(item =>{
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
//   console.log("sss"+JSON.stringify(props))
  for(let key in props.Course){
    obj[key] = Form.createFormField({
      value: props.Course[key]
    })
  }
  return obj;
}
export default Form.create({mapPropsToFields})(CourseForm);