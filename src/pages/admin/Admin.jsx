import React, { Component } from 'react'
import { Layout, Icon } from 'antd'

const {Header,Sider,Content} = Layout;

export class Admin extends Component {
  state={
    collapsed:false
  }
  toggle=()=>{
    this.setState({
      collapsed:!this.state.collapsed
    })
  }
  render() {
    return (
      <Layout className='fill'>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} collapsedWidth={0}>

        </Sider>
        <Layout>
          <Header className="bg-white no-pd">
            <Icon
              className='trigger'
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content>
            <Icon className='font-20' type='plus' />
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default Admin
