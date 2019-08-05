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
    componentWillMount(){
        this.loadStudents();
    }
    loadStudents(){
        this.setState({dataloading:true})
        let url = "http://localhost:8083/stuBf/findAllWithExtend";
        $.get(url,({status,message,data})=>{
            if(status === 200 && data != null){
                    this.setState({
                        Students:data,
                        dataloading:false
                    })
            }else{
                alert(message)
                this.setState({dataloading:false})
            }
        })
    }



    handleCancel =()=>{
        this.setState({
            visible:false
        })
    }
    handleDelete=(id)=>{
        alert(id)
    }
    Alldel=()=>{
        this.setState({loading:true})
        alert(this.state.selectedRowKeys)
        this.setState({loading:false})
    }
    submitHandler=()=>{
        this.state.form.validateFieldsAndScroll((err,values)=>{
            if(!err){
                // console.log(values);
              console.log("====="+JSON.stringify(values));
              
            //   let url = "http://localhost:8083/stuBf/saveOrUpdate";
            //   $.post(url,values,({status,message})=>{
            //     if(status === 200){
            //       this.setState({
            //         visible:false
            //       })
            //       this.props.history.push("/start")
                
            //     }else{
            //       alert(message)
            //       this.setState({visible:false})
            //     }
            //   })
            }
        })
    }

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
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.id)}>
                      <Button type="danger">Delete</Button>
                    </Popconfirm>
                  ) : null)},{(this.state.Students.length >= 1 ? (
                    <Popconfirm title="Sure to update?" onConfirm={() => this.setState({visible:true,Student:record})}>
                      <Button type="primary">Update</Button>
                    </Popconfirm>
                  ) : null)}
                      
                </span>,
                width:50,
                align:'center'
            }
          ];
        const { dataloading,loading, selectedRowKeys,Students } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: selectedRowKeys =>{this.setState({selectedRowKeys})}
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={()=>{this.setState({visible:true})}} style={{marginRight:10}}>添加用户</Button>
                <Popconfirm title="Sure to delete?" onConfirm={this.Alldel}>
                    <Button type="danger"  disabled={!hasSelected} loading={loading}>
                        批量删除
                    </Button>
                </Popconfirm>
               
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `选择了 ${selectedRowKeys.length} 条数据` : ''}
                </span>
                </div>
                <Table loading={dataloading} rowSelection={rowSelection} rowKey={record => record.id} columns={columns} dataSource={Students} />
                <Modal
                title="弹框"
                visible={this.state.visible}
                onOk={this.submitHandler}
                onCancel={this.handleCancel}
                >
                    <StuForm Student={this.state.Student} ref={this.SaveRef}/>

                </Modal>
            </div>
        )
    }
}

export default Student
