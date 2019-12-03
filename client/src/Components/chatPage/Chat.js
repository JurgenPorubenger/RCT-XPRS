import React, { Component } from 'react';
import './Chat.css'
import { Row, Col, Input, Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout
import queryString from 'query-string'
import io from 'socket.io-client'

export default class Chat extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Row type="flex">
          <Col span={6} order={1}>
          </Col>
          <Col span={12} order={2}>
            <Header className='header_style'>Header</Header>
            <Content>
              <Input className='input_style' placeholder="Enter message " />
            </Content>
            <Footer>Footer</Footer>
          </Col>
          <Col span={6} order={3}>
          </Col>
        </Row>
      </div>
    )
  }
}
