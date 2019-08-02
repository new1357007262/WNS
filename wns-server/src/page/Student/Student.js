import React from "react"
import { Table, Button,Modal} from 'antd';
import $ from "jquery"

class Student extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:false,
            dataloading:false,
            visible:false,
            Students:[],
            selectedRowKeys:[],
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



    toAdd=()=>{
        this.setState({visible:true})
    }
    handleCancel =()=>{
        this.setState({
            visible:false
        })
    }


    render(){
        const columns = [
            {
              title: '学号',
              dataIndex: 'studentNumber',
              key:'studentNumber'
            },
            {
              title: '姓名',
              dataIndex: 'name',
              key:'name'
            },
            {
                title:'性别',
                dataIndex:'gender',
                key:'gender'
            },
            {
                title:'专业名称',
                dataIndex:'major.name',
                key:'major.name'
            },
            {
                title:'身份证号',
                dataIndex:'StuUser.cardNumber',
                key:'StuUser.cardNumber'
            },
            {
                title:'宿舍门牌号',
                dataIndex:'StuUser.houseNumber',
                key:'StuUser.houseNumber'
            },
            {
                title:'家庭住址',
                dataIndex:'address',
                key:'address'
            },
            {
                title:'电话',
                dataIndex:'telephone',
                key:'telephone'
            },
            {
                title:'操作',
                render: (record) => <span>
                <Button type="danger" onClick={this.delHandler.bind(this,record.id)}>删除</Button>
                <Button type="link" onClick={this.updateHandler.bind(this,record.id)}>更新</Button>
                </span>,
            }
          ];
        const { dataloading,loading, selectedRowKeys,Students } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={this.toAdd}>添加用户</Button>
                <Button type="danger" onClick={this.Alldel} disabled={!hasSelected} loading={loading}>
                    批量删除
                </Button>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `选择了 ${selectedRowKeys.length} 个用户` : ''}
                </span>
                </div>
                <Table loading={dataloading} rowSelection={rowSelection} rowKey={record => record.id} columns={columns} dataSource={Students} />
                <Modal
                title="弹框"
                visible={this.state.visible}
                onOk={this.submitHandler}
                onCancel={this.handleCancel}
                >
                {/* <form onSubmit={this.submitHandler}>
                用户名
                <input type="text" name="name" value={form.name} onChange={this.changeHandler}/><br/>
                用户名密码
                <input type="text" name="password" value={form.password} onChange={this.changeHandler}></input><br/>
                用户电话
                <input type="text" name="telephone" value={form.telephone} onChange={this.changeHandler}></input><br/>
                用户头像
                <input type="text" name="photo" value={form.photo} onChange={this.changeHandler}></input><br/>
                </form> */}
                </Modal>
            </div>
        )
    }
}

export default Student
