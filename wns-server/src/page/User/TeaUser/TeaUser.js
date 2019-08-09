import React from "react"
import { Table, Button,Modal,Popconfirm} from 'antd';
import $ from "jquery"
import TUserForm from "./TUserForm"

class TeaUser extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:false,
            dataloading:false,
            visible:false,
            TeaUsers:[],
            selectedRowKeys:[],
            TeaUser:{}
        }
    }
    componentDidMount(){
        this.loadTeaUsers();
    }
    //获取数据库中的所有数据
    loadTeaUsers(){
        this.setState({dataloading:true})
        let url = "http://localhost:8083/teaUser/findAll";
        $.get(url,({status,data})=>{
            if(status === 200 && data != null){
                    this.setState({
                        TeaUsers:data,
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
        let url ="http://localhost:8083/teaUser/DelById?id="+id;
        $.get(url,({status,message})=>{
            if(status === 200){
                this.loadTeaUsers();
            }else{
                alert(message)
            }
        })
    }
    // 删除多个
    Alldel=()=>{
        let {selectedRowKeys} = this.state;
        this.setState({loading:true})
        let url ="http://localhost:8083/teaUser/DelById";
        selectedRowKeys.forEach(item=>{
            console.log(item)
             $.get(url,{id:item},({status,message})=>{
                if(status === 200){
                    this.loadTeaUsers();
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
        let url = "http://localhost:8083/teaUser/saveOrUpdate";
        this.state.form.validateFieldsAndScroll((err,values)=>{
            if(!err){
                $.post(url,values,({status,message})=>{
                    if(status === 200){
                    this.handleCancel();
                    this.loadTeaUsers();
                    }else{
                    alert(message)
                    this.handleCancel();
                    }
                })         
            }  
        })
    }

    toAdd =()=>{
        this.setState({
            visible:true,
            TeaUser:{}
        })
    }
    toUpdate(record){
        this.setState({
            visible:true,
            TeaUser:record
        })
    }
    // 保存ref到state
    SaveRef=(form)=>{
        this.setState({form})
    }
    render(){
        const columns = [
            {
              title: '用户名',
              dataIndex: 'username',
              key:'usernamae',
              align:'center'
            },
            {
                title:'教师真实姓名',
                dataIndex:'realname',
                key:'realname',
                align:'center'
            },
            {
                title:'操作',
                render: (record) => <span>{(
                this.state.TeaUsers.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={this.handleDelete.bind(this,record.id)}>
                      <Button type="danger">Delete</Button>
                    </Popconfirm>
                  ) : null)},{(this.state.TeaUsers.length >= 1 ? (
                    <Popconfirm title="Sure to update?" onConfirm={this.toUpdate.bind(this,record)}>
                      <Button type="primary">Update</Button>
                    </Popconfirm>
                  ) : null)}
                      
                </span>,
                width:60,
                align:'center'
            }
        ];
        
        const { dataloading,loading, selectedRowKeys,TeaUsers } = this.state;
        // table选择框，重新赋值到变量中
        const rowSelection = {
            selectedRowKeys,
            onChange: selectedRowKeys =>{this.setState({selectedRowKeys})}
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={this.toAdd} style={{marginRight:10}}>添加老师用户</Button>
                <Popconfirm title="Sure to delete?" onConfirm={this.Alldel}>
                    <Button type="danger"  disabled={!hasSelected} loading={loading}>
                        批量删除
                    </Button>
                </Popconfirm>
               
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `选择了 ${selectedRowKeys.length} 条数据` : ''}
                </span>
                </div>
                <Table  loading={dataloading} rowSelection={rowSelection} rowKey={record => record.id} columns={columns} dataSource={TeaUsers} size="small" scroll={{ y: 330 }} />
                <Modal
                title="教师用户信息"
                visible={this.state.visible}
                onOk={this.submitHandler}
                onCancel={this.handleCancel}
                destroyOnClose
                >
                    <TUserForm TeaUser={this.state.TeaUser} ref={this.SaveRef}/>
                </Modal>
            </div>
        )
    }
}

export default TeaUser;
