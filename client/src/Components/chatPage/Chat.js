import React from 'react'
import './Chat.css'
import { Row, Col, Input } from 'antd'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout

export default class Chat extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Layout>
          <Header>Header</Header>
          <Content><Row>
            <Col span={18} push={6}>
              <Input placeholder="Basic usage" />;

                      col-18 col-push-6
            </Col>
            <Col span={6} pull={18}>
                      col-6 col-pull-18
            </Col>
          </Row></Content>
          <Footer>Footer</Footer>
        </Layout>

      </div>
    )
  }
}
