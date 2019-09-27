import React from "react"
import { Table, Button,Modal,Popconfirm} from 'antd';
import $ from "jquery"
import InfoForm from "./InfoForm"

class Info extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:false,
            dataloading:false,
            visible:false,
            Infos:[],
            selectedRowKeys:[],
            Info:{}
        }
    }
    componentDidMount(){
        this.loadInfos();
    }
    //获取数据库中的所有数据
    loadInfos(){
        this.setState({dataloading:true})
        // let url = "http://localhost:8083/info/FindAll";
        let url = "http://203.195.219.213:8083/info/FindAll";
        $.get(url,({status,data})=>{
            if(status === 200 && data != null){
                    this.setState({
                        Infos:data,
                        dataloading:false
                    })
            }else{
                alert("数据为空")
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
        // let url ="http://localhost:8083/info/DelById?id="+id;
        let url ="http://203.195.219.213:8083/info/DelById?id="+id;
        $.get(url,({status,message})=>{
            if(status === 200){
                this.loadInfos();
            }else{
                alert(message)
            }
        })
    }
    // 删除多个
    Alldel=()=>{
        let {selectedRowKeys} = this.state;
        this.setState({loading:true})
        // let url ="http://localhost:8083/info/DelById";
        let url ="http://203.195.219.213:8083/info/DelById";
        selectedRowKeys.forEach(item=>{
            console.log(item)
             $.get(url,{id:item},({status,message})=>{
                if(status === 200){
                    this.loadInfos();
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
        let d = new Date();
        let time = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
        e.preventDefault();
        // let url = "http://localhost:8083/info/saveOrUpdate";
        // let url1 = "http://localhost:8083/info/findByTitle";
        let url = "http://203.195.219.213:8083/info/saveOrUpdate";
        let url1 = "http://203.195.219.213:8083/info/findByTitle";
        this.state.form.validateFieldsAndScroll((err,values)=>{
            if(!err){
                console.log(values)
                // if(values.id === undefined){
                //     // 保存
                //     $.get(url1,{title:values.title},(data)=>{
                //         if(data.length !=0){
                //             alert("消息已添加，请勿重复添加")
                //             this.handleCancel();
                //         }else{
                //             $.post(url,values,({status,message})=>{
                //                 if(status === 200){
                //                     this.handleCancel();
                //                     this.loadInfos();
                //                 }else{
                //                     alert(message)
                //                     this.handleCancel();
                //                 }
                //             })
                //         }
                //     })
                // }else{
                    values.time = time
                    // 修改
                    $.post(url,values,({status,message})=>{
                        if(status === 200){
                        this.handleCancel();
                        this.loadInfos();
                        }else{
                        alert(message)
                        this.handleCancel();
                        }
                    })
                // }
            }
        })
    }

    toAdd =()=>{
        this.setState({
            visible:true,
            Info:{}
        })
    }
    toUpdate(record){
        this.setState({
            visible:true,
            Info:record
        })
    }
    // 保存ref到state
    SaveRef=(form)=>{
        this.setState({form})
    }
    render(){
        const columns = [
            {
              title: '消息顶部',
              dataIndex: 'heading',
              key:'heading',
              align:'center',
              width:150
            },
            {
                title:'消息标题',
                dataIndex:'title',
                key:'title',
                align:'center',
                width:350
            },
            {
                title:'消息正文',
                dataIndex:'decs',
                key:'decs',
                width:160,
                align:'center',
                // render:(text)=>{return (<span><img style={{width:50,height:50}} src={text}/></span>)}
                // width:200
            },
            {
                title:'消息时间',
                dataIndex:'time',
                key:'time',
                align:'center',
                width:160
            },
            {
                title:'操作',
                render: (record) => <span>{(
                this.state.Infos.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={this.handleDelete.bind(this,record.id)}>
                      <Button type="danger">Delete</Button>
                    </Popconfirm>
                  ) : null)},{(this.state.Infos.length >= 1 ? (
                    <Popconfirm title="Sure to update?" onConfirm={this.toUpdate.bind(this,record)}>
                      <Button type="primary">Update</Button>
                    </Popconfirm>
                  ) : null)}
                      
                </span>,
                width:60,
                align:'center'
            }
        ];
        
        const { dataloading,loading, selectedRowKeys,Infos } = this.state;
        // table选择框，重新赋值到变量中
        const rowSelection = {
            selectedRowKeys,
            onChange: selectedRowKeys =>{this.setState({selectedRowKeys})}
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={this.toAdd} style={{marginRight:10}}>添加消息</Button>
                <Popconfirm title="Sure to delete?" onConfirm={this.Alldel}>
                    <Button type="danger"  disabled={!hasSelected} loading={loading}>
                        批量删除
                    </Button>
                </Popconfirm>
               
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `选择了 ${selectedRowKeys.length} 条数据` : ''}
                </span>
                </div>
                <Table loading={dataloading} rowSelection={rowSelection} rowKey={record => record.id} columns={columns} dataSource={Infos} size="small" />
                <Modal
                title="消息信息"
                visible={this.state.visible}
                onOk={this.submitHandler}
                onCancel={this.handleCancel}
                destroyOnClose //关闭模态框，销毁模态框中的信息
                >
                    <InfoForm Info={this.state.Info} ref={this.SaveRef}/>

                </Modal>
            </div>
        )
    }
}

export default Info
