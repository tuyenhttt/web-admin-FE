"use client";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

const Register = () => {
  interface RegisterFormValues {
    username: string;
    password: string;
    name?: boolean;
  }

  const onFinish = (values: RegisterFormValues) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360 }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please input your Name!" }]}
      >
        <Input prefix={<LockOutlined />} type="name" placeholder="Name" />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Resgister
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Register;
