"use client";
import React from "react";
import { Button, Col, Divider, Form, Input, Row, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Text } = Typography;

const Register = () => {
  const onFinish = async (values: any) => {};

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
            Đăng Ký Tài Khoản
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
                  message: "Vui lòng nhập email!",
                },
                {
                  type: "email",
                  message: "Email không hợp lệ!",
                },
              ]}
            >
              <Input size="large" placeholder="Nhập email của bạn" />
            </Form.Item>

            <Form.Item
              label={<Text strong>Mật khẩu</Text>}
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
                {
                  min: 6,
                  message: "Mật khẩu phải có ít nhất 6 ký tự!",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Nhập mật khẩu" />
            </Form.Item>

            <Form.Item
              label={<Text strong>Họ và Tên</Text>}
              name="name"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập họ và tên!",
                },
              ]}
            >
              <Input size="large" placeholder="Nhập họ và tên" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block size="large">
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <Link href="/">
              <ArrowLeftOutlined /> Quay lại trang chủ
            </Link>
          </div>
          <Divider />
          <div style={{ textAlign: "center" }}>
            <Text>Đã có tài khoản?</Text>{" "}
            <Link href="/auth/login">
              <Text strong style={{ color: "#1677ff" }}>
                Đăng nhập ngay
              </Text>
            </Link>
          </div>
        </fieldset>
      </Col>
    </Row>
  );
};

export default Register;
