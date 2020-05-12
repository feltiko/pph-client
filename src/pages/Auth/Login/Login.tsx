import React from 'react';
import { useMutation } from 'react-fetching-library';
import { useStoreon } from 'storeon/react';
import { Typography, Form, Input, Button } from 'antd';

import { login } from '../../../api/actions/users';
import { LoginUser } from '../../../api/types';
import { State, Events } from '../../../store/structure';

import { Content, Header } from '../../../components/base/Layout';

const { Title } = Typography;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};

export default function Register() {
  const { loading, payload, mutate, error } = useMutation(login);
  const { dispatch, user } = useStoreon<State, Events>('user');

  console.log(user);

  const handleSubmit = async (values: LoginUser) => {
    const { payload, error: mutateError } = await mutate({
      identifier: values.identifier,
      password: values.password,
    });

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
        <Title level={3}>Login</Title>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="identifier"
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
              Login
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </div>
  );
}
