"use client";
import { Button, Col, Divider, Form, Input, Row, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import { authenticate } from "@/utils/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const { Text } = Typography;

const Login = () => {
  const router = useRouter();

  const onFinish = async (values: any) => {
    const { username, password } = values;

    //trigger sign in

    const res = await authenticate(username, password);
    console.log("Auth response:", res);
    if (res?.error) {
      toast.error(res?.error);
      if (res?.code === 2) {
        router.push("/verify");
      }
    } else {
      //redirect to dashboard
      router.push("/dashboard");
    }
  };

  return (
    <Row justify="center" style={{ marginTop: "50px" }}>
      <Col xs={24} md={16} lg={8}>
        <fieldset
          style={{
            padding: "25px",
            margin: "5px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <legend style={{ fontSize: "18px", fontWeight: "bold" }}>
            Đăng Nhập
          </legend>
          <Form
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label={<Text strong>Email</Text>}
              name="username"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập email!",
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
              ]}
            >
              <Input.Password size="large" placeholder="Nhập mật khẩu" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block size="large">
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <Link href={"/"}>
              <ArrowLeftOutlined /> Quay lại trang chủ
            </Link>
          </div>
          <Divider />
          <div style={{ textAlign: "center" }}>
            <Text>Chưa có tài khoản?</Text>{" "}
            <Link href={"/auth/register"}>
              <Text strong style={{ color: "#1677ff" }}>
                Đăng ký tại đây
              </Text>
            </Link>
          </div>
        </fieldset>
      </Col>
    </Row>
  );
};

export default Login;
