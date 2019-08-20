import React from "react"
import { Table, Button,Modal,Popconfirm} from 'antd';
import $ from "jquery"
import StuForm from "./StuForm"

class Student extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:false,
            dataloading:false,
            visible:false,
            Students:[],
            selectedRowKeys:[],
            Student:{}
        }
    }
    componentDidMount(){
        this.loadStudents();
    }
    //获取数据库中的所有数据
    loadStudents(){
        this.setState({dataloading:true})
        // let url = "http://localhost:8083/stuBf/findAllWithExtend";
        let url = "http://203.195.219.213:8083/stuBf/findAllWithExtend";
        $.get(url,({status,data})=>{
            if(status === 200 && data != null){
                    this.setState({
                        Students:data,
                        dataloading:false
                    })
            }else{
                this.setState({dataloading:false})
            }
        })
    }
    // 点击模态框清除，关闭模态框并且清除表单数据
    handleCancel =()=>{
        this.setState({
            visible:false
        })
    }
    // 删除单个
    handleDelete=(id)=>{
        // let url ="http://localhost:8083/stuBf/DelById?id="+id;
        let url ="http://203.195.219.213:8083/stuBf/DelById?id="+id;
        $.get(url,({status,message})=>{
            if(status === 200){
                this.loadStudents();
            }else{
                alert(message)
            }
        })
    }
    // 删除多个
    Alldel=()=>{
        let {selectedRowKeys} = this.state;
        this.setState({loading:true})
        // let url ="http://localhost:8083/stuBf/DelById";
        let url ="http://203.195.219.213:8083/stuBf/DelById";
        selectedRowKeys.forEach(item=>{
            console.log(item)
             $.get(url,{id:item},({status,message})=>{
                if(status === 200){
                    this.loadStudents();
                }else{
                    alert(message)
                }
            })
        })   
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading:false
            });
        }, 1000);
    }
    // form验证提交
    submitHandler=(e)=>{
        e.preventDefault();
        // let url = "http://localhost:8083/stuBf/saveOrUpdate";
        // let url1 = "http://localhost:8083/stuBf/findAll";
        // let url2 = "http://localhost:8083/stuUser/update";
        let url = "http://203.195.219.213:8083/stuBf/saveOrUpdate";
        let url1 = "http://203.195.219.213:8083/stuBf/findAll";
        let url2 = "http://203.195.219.213:8083/stuUser/updatestatus";
        this.state.form.validateFieldsAndScroll((err,values)=>{
            if(!err){
                if(values.id === undefined){
                    // 保存
                    $.get(url1,{studentNumber:values.studentNumber},({data})=>{
                        if(data.length !== 0){
                            this.setState({visible:false})
                            alert("信息已录入，请勿重复录入")
                        }else{
                            $.post(url,values,({status,message})=>{
                                if(status === 200){
                                    console.log("进来了11")

                                    $.post(url2,{username:values.studentNumber},({status})=>{
                                        if(status === 200){
                                            alert("报到成功")
                                        }else{
                                            alert(message)
                                        }
                                    })
                                this.handleCancel();
                                this.loadStudents();
                                }else{
                                alert(message)
                                this.handleCancel();
                                }
                            })
                        }
                    })
                }else{
                    // 修改
                    $.post(url,values,({status,message})=>{
                        if(status === 200){
                        this.handleCancel();
                        this.loadStudents();
                        }else{
                        alert(message)
                        this.handleCancel();
                        }
                    })
                }
            }
        })
    }

    toAdd =()=>{
        this.setState({
            visible:true,
            Student:{}
        })
    }
    toUpdate(record){
        this.setState({
            visible:true,
            Student:record
        })
    }
    // 保存ref到state
    SaveRef=(form)=>{
        this.setState({form})
    }
    render(){
        const columns = [
            {
              title: '学号',
              dataIndex: 'studentNumber',
              key:'studentNumber',
              align:'center'
            },
            {
              title: '姓名',
              dataIndex: 'name',
              key:'name',
              align:'center'
            },
            {
                title:'性别',
                dataIndex:'gender',
                key:'gender',
                width:60,
                align:'center'
            },
            {
                title:'专业名称',
                dataIndex:'stuUser.major.name',
                key:'stuUser.major.name',
                align:'center'
            },
            {
                title:'身份证号',
                dataIndex:'stuUser.cardNumber',
                key:'stuUser.cardNumber',
                width:150,
                align:'center'
            },
            {
                title:'宿舍门牌号',
                dataIndex:'stuUser.houseNumber',
                key:'stuUser.houseNumber',
                width:80,
                align:'center'
            },
            {
                title:'家庭住址',
                dataIndex:'address',
                key:'address',
                width:150,
                align:'center'
            },
            {
                title:'电话',
                dataIndex:'telephone',
                key:'telephone',
                align:'center'
            },
            {
                title:'操作',
                render: (record) => <span>{(
                this.state.Students.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={this.handleDelete.bind(this,record.id)}>
                      <Button type="danger">Delete</Button>
                    </Popconfirm>
                  ) : null)},{(this.state.Students.length >= 1 ? (
                    <Popconfirm title="Sure to update?" onConfirm={this.toUpdate.bind(this,record)}>
                      <Button type="primary">Update</Button>
                    </Popconfirm>
                  ) : null)}
                      
                </span>,
                width:60,
                align:'center'
            }
        ];
        
        const { dataloading,loading, selectedRowKeys,Students } = this.state;
        // table选择框，重新赋值到变量中
        const rowSelection = {
            selectedRowKeys,
            onChange: selectedRowKeys =>{this.setState({selectedRowKeys})}
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={this.toAdd} style={{marginRight:10}}>添加学生</Button>
                <Popconfirm title="Sure to delete?" onConfirm={this.Alldel}>
                    <Button type="danger"  disabled={!hasSelected} loading={loading}>
                        批量删除
                    </Button>
                </Popconfirm>
               
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `选择了 ${selectedRowKeys.length} 条数据` : ''}
                </span>
                </div>
                <Table loading={dataloading} rowSelection={rowSelection} rowKey={record => record.id} columns={columns} dataSource={Students} size="small" />
                <Modal
                title="学生信息"
                visible={this.state.visible}
                onOk={this.submitHandler}
                onCancel={this.handleCancel}
                destroyOnClose
                >
                    <StuForm Student={this.state.Student} ref={this.SaveRef}/>

                </Modal>
            </div>
        )
    }
}

export default Student
