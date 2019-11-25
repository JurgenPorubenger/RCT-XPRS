import React from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import  './index.css'
import { Link } from 'react-router-dom'

class NormalLoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            const url = "/api/registrate";
            console.log('Go to backend: ', values);
            fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    mode: "cors",
                    body: JSON.stringify(values)
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('PPPPPP');
                        if(!data.response.ok) {
                            console.log(this.state)
                            this.setState({hasError:true})
                        }
                    })
                    .catch(error => console.log(error));
            });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="register-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                        <Input
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="email"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="register-form-forgot" href="">
                        Forgot password
                    </a>
                    <Button type="primary" htmlType="submit" className="register-form-button">
                        Register
                    </Button>
                    Or <a href="/login">login!</a>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create({ name: 'normal_login' })(NormalLoginForm);


