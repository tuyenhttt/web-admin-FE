"use client";
import React from "react";
import { Button, Col, Divider, Form, Input, Row, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import { sendRequest } from "@/utils/api";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const { Text } = Typography;

const Register = () => {
  const router = useRouter();

  const onFinish = async (values: any) => {
    const { email, password, name } = values;
    const res = await sendRequest<IBackendRes<any>>({
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/register`,
      method: "POST",
      body: { email, password, name },
    });

    if (res?.data) {
      router.push(`/verify/${res?.data?._id}`);
    } else {
      toast.error(<>Register error</>, { autoClose: 5000 });
    }
  };

  return (
    <Row justify="center" style={{ marginTop: "50px" }}>
      <Col xs={24} md={16} lg={8}>
        <fieldset
          style={{
            padding: "25px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <legend style={{ fontSize: "18px", fontWeight: "bold" }}>
            Register Account
          </legend>
          <Form
            name="register"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label={<Text strong>Email</Text>}
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Email not valid!",
                },
              ]}
            >
              <Input size="large" placeholder="Input your email" />
            </Form.Item>

            <Form.Item
              label={<Text strong>Password</Text>}
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input password!",
                },
                {
                  min: 6,
                  message: "Password must be at least 6 characters!",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Input your password" />
            </Form.Item>

            <Form.Item
              label={<Text strong>Full name</Text>}
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input full name!",
                },
              ]}
            >
              <Input size="large" placeholder="Input your full name" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block size="large">
                Register
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <Link href="/">
              <ArrowLeftOutlined /> Back to Guest Page
            </Link>
          </div>
          <Divider />
          <div style={{ textAlign: "center" }}>
            <Text>Already have an account?</Text>{" "}
            <Link href="/auth/login">
              <Text strong style={{ color: "#1677ff" }}>
                Login
              </Text>
            </Link>
          </div>
        </fieldset>
      </Col>
    </Row>
  );
};

export default Register;
