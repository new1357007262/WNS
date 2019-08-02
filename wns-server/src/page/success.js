import React from 'react'
import {Button} from 'antd'

class Success extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return (
            <div>
                <h1>成功  跳转主页</h1>
                <Button type="link" onClick={()=>{this.props.history.goBack()}}>返回</Button>
            </div>
        )
    }

}

export default Success;