import React from 'react';
import { Redirect } from 'react-router';
import { useMutation } from 'react-fetching-library';
import { useStoreon } from 'storeon/react';
import { Typography, Form, Input, Button } from 'antd';

import { register } from '../../../api/actions/users';
import { RegisterUser } from '../../../api/types';
import { State, Events } from '../../../store/structure';

import { Content, Header } from '../../../components/base/Layout';

const { Title } = Typography;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};

export default function Register() {
  const { loading, payload, mutate, error } = useMutation(register);
  const { dispatch, isLoggedIn } = useStoreon<State, Events>('user', 'isLoggedIn');

  if (isLoggedIn) return <Redirect to="/" />;

  const handleSubmit = async (values: RegisterUser) => {
    const { payload, error: mutateError } = await mutate(values);

    if (!mutateError) {
      dispatch('setUser', {
        jwt: payload?.jwt,
        username: payload?.user.username,
        email: payload?.user.email,
      });
    }
  };

  const onFinish = (values: any) => {
    handleSubmit(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Header />
      <Content>
        <Title level={3}>Register</Title>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          {error && payload && <div>{payload.message ? payload?.message[0].messages[0].message : ''}</div>}

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </div>
  );
}
