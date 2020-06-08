import React from 'react';
import 'antd/dist/antd.css';
import "./App.css";
import { Form, Input, Button, Divider, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const SignUp = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}> 

    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Sign Up
        </Button>
      </Form.Item>
      <Form.Item>
      <Divider plain>Or</Divider>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Facebook
        </Button>
      </Form.Item>
    </Form>
    </Row>
  );
};

export default SignUp;