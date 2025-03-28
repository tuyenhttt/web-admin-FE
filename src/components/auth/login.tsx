"use client";
import { Button, Col, Divider, Form, Input, Row, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import { authenticate } from "@/utils/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ModalReactive from "@/components/auth/model.reactive";
import { useState } from "react";
import ModalChangePassword from "@/components/auth/model.change.password";

const { Text } = Typography;

const Login = () => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const [changePassword, setChangePassword] = useState(false);

  const onFinish = async (values: any) => {
    const { username, password } = values;
    setUserEmail("");

    try {
      const res = await authenticate(username, password);

      if (res?.error) {
        if (res?.code === 2) {
          setIsModalOpen(true);
          setUserEmail(username);
          return;
        }
        toast.error(<>{res?.error}</>, { autoClose: 2000 });
        return;
      }

      if (res.success) {
        const isAdmin =
          username.toLowerCase().includes("admin") ||
          username === "admin@example.com";

        if (isAdmin) {
          if (typeof window !== "undefined") {
            window.location.href = "/dashboard";
            return;
          }
        }

        if (res.redirectTo) {
          if (res.redirectTo.includes("dashboard")) {
            if (typeof window !== "undefined") {
              window.location.href = "/dashboard";
              return;
            }
          } else {
            router.push(res.redirectTo);
            return;
          }
        }

        router.push("/");
      } else {
        router.push("/");
      }
    } catch (error) {
      toast.error("An unexpected error occurred", { autoClose: 2000 });
    }
  };

  return (
    <>
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
              Login
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
                    message: "Please input email!",
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
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Input your password"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                  Login
                </Button>
                <Button type="link" onClick={() => setChangePassword(true)}>
                  Forgot Password ?
                </Button>
              </Form.Item>
            </Form>
            <div style={{ textAlign: "center", marginBottom: "10px" }}>
              <Link href={"/"}>
                <ArrowLeftOutlined /> Back Home
              </Link>
            </div>
            <Divider />
            <div style={{ textAlign: "center" }}>
              <Text>No account yet?</Text>{" "}
              <Link href={"/auth/register"}>
                <Text strong style={{ color: "#1677ff" }}>
                  Register here!
                </Text>
              </Link>
            </div>
          </fieldset>
        </Col>
      </Row>
      <ModalReactive
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        userEmail={userEmail}
      />
      <ModalChangePassword
        isModalOpen={changePassword}
        setIsModalOpen={setChangePassword}
      />
    </>
  );
};

export default Login;
