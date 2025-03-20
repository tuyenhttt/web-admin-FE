"use client";
"use client";
import React from "react";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  message,
  Row,
  Typography,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { sendRequest } from "@/utils/api";

const { Text } = Typography;

const Verify = (props: any) => {
  const { id } = props;

  const router = useRouter();

  const onFinish = async (values: any) => {
    const { _id, code } = values;

    const res = await sendRequest<IBackendRes<any>>({
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/check-code`,
      method: "POST",
      body: { _id, code },
    });

    if (res?.data) {
      message.success("Actived account successfully", 5);
      router.push(`/auth/login`);
    } else {
      toast.error(
        <>
          Verify error <br /> {res?.message || "Vui lòng thử lại sau!"}
        </>,
        { autoClose: 2000 }
      );
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
            Activate account
          </legend>
          <Form
            name="register"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label={<Text strong>Id</Text>}
              name="_id"
              initialValue={id}
              hidden
            >
              <Input disabled />
            </Form.Item>
            <div>
              The code has been sent to your email, please check your email and
              enter the code in the box below to activate your account
            </div>

            <Form.Item
              label={<Text strong>Code</Text>}
              name="code"
              rules={[
                {
                  required: true,
                  message: "Please input code!",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Input code" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block size="large">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <Link href="/">
              <ArrowLeftOutlined /> Back Home
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

export default Verify;
