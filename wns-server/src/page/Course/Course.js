import React from "react"
import { Table, Button,Modal,Popconfirm} from 'antd';
import $ from "jquery"
import CourseForm from "./CourseForm"

class Course extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:false,
            dataloading:false,
            visible:false,
            Courses:[],
            selectedRowKeys:[],
            Course:{}
        }
    }
    componentDidMount(){
        this.loadCourses();
    }
    //获取数据库中的所有数据
    loadCourses(){
        this.setState({dataloading:true})
        // let url = "http://localhost:8083/course/findAllWithMajor";
        let url = "http://203.195.219.213:8083/course/findAllWithMajor";
        $.get(url,({status,data})=>{
            if(status === 200 && data != null){
                    this.setState({
                        Courses:data,
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
        // let url ="http://localhost:8083/course/delById?id="+id;
        let url ="http://203.195.219.213:8083/course/delById?id="+id;
        $.get(url,({status,message})=>{
            if(status === 200){
                this.loadCourses();
            }else{
                alert(message)
            }
        })
    }
    // 删除多个
    Alldel=()=>{
        let {selectedRowKeys} = this.state;
        this.setState({loading:true})
        // let url ="http://localhost:8083/course/delById";
        let url ="http://203.195.219.213:8083/course/delById";
        selectedRowKeys.forEach(item=>{
            console.log(item)
             $.get(url,{id:item},({status,message})=>{
                if(status === 200){
                    this.loadCourses();
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
        // let url = "http://localhost:8083/course/saveOrupdate";
        // let url1 = "http://localhost:8083/course/findByName";
        let url = "http://203.195.219.213:8083/course/saveOrupdate";
        let url1 = "http://203.195.219.213:8083/course/findByName";
        this.state.form.validateFieldsAndScroll((err,values)=>{
            if(!err){
                console.log(values)
                if(values.id === undefined){
                    // 保存
                    $.get(url1,{name:values.name},(data)=>{
                        if(data.length !=0){
                            alert("课程已添加，请勿重复添加")
                            this.handleCancel();
                        }else{
                            $.post(url,values,({status,message})=>{
                                if(status === 200){
                                    this.handleCancel();
                                    this.loadCourses();
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
                        this.loadCourses();
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
            Course:{}
        })
    }
    toUpdate(record){
        this.setState({
            visible:true,
            Course:record
        })
    }
    // 保存ref到state
    SaveRef=(form)=>{
        this.setState({form})
    }
    render(){
        const columns = [
            {
              title: '课程名称',
              dataIndex: 'name',
              key:'name',
              align:'center',
              width:150
            },
            {
                title:'课程描述',
                dataIndex:'description',
                key:'description',
                align:'center',
                width:350
            },
            {
                title:'所属专业',
                dataIndex:'major.name',
                key:'major.name',
                width:160,
                align:'center',
                // width:200
            },
            {
                title:'所属学院',
                dataIndex:'major.collage.name',
                key:'major.collage.name',
                align:'center',
                width:160
            },
            {
                title:'操作',
                render: (record) => <span>{(
                this.state.Courses.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={this.handleDelete.bind(this,record.id)}>
                      <Button type="danger">Delete</Button>
                    </Popconfirm>
                  ) : null)},{(this.state.Courses.length >= 1 ? (
                    <Popconfirm title="Sure to update?" onConfirm={this.toUpdate.bind(this,record)}>
                      <Button type="primary">Update</Button>
                    </Popconfirm>
                  ) : null)}
                      
                </span>,
                width:60,
                align:'center'
            }
        ];
        
        const { dataloading,loading, selectedRowKeys,Courses } = this.state;
        // table选择框，重新赋值到变量中
        const rowSelection = {
            selectedRowKeys,
            onChange: selectedRowKeys =>{this.setState({selectedRowKeys})}
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={this.toAdd} style={{marginRight:10}}>添加专业</Button>
                <Popconfirm title="Sure to delete?" onConfirm={this.Alldel}>
                    <Button type="danger"  disabled={!hasSelected} loading={loading}>
                        批量删除
                    </Button>
                </Popconfirm>
               
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `选择了 ${selectedRowKeys.length} 条数据` : ''}
                </span>
                </div>
                <Table loading={dataloading} rowSelection={rowSelection} rowKey={record => record.id} columns={columns} dataSource={Courses} size="small" />
                <Modal
                title="课程信息"
                visible={this.state.visible}
                onOk={this.submitHandler}
                onCancel={this.handleCancel}
                destroyOnClose
                >
                    <CourseForm Course={this.state.Course} ref={this.SaveRef}/>

                </Modal>
            </div>
        )
    }
}

export default Course
