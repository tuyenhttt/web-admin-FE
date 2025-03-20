"use client";
import { sendRequest } from "@/utils/api";
import { useHasMounted } from "@/utils/customHook";
import {
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Steps } from "antd";
import { useState } from "react";
import { toast } from "react-toastify";

const ModalReactive = (props: any) => {
  const { isModalOpen, setIsModalOpen, userEmail } = props;
  const [current, setCurrent] = useState(0);
  const [userId, setUserId] = useState("");

  const hasMounted = useHasMounted();
  if (!hasMounted) return <></>;

  const onFinishStep0 = async (values: any) => {
    const { email } = values;

    const res = await sendRequest<IBackendRes<any>>({
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/retry-active`,
      method: "POST",
      body: { email },
    });
    if (res?.data) {
      setUserId(res?.data?._id);
      setCurrent(1);
    } else {
      toast.error(<>{res?.error}</>, { autoClose: 2000 });
    }
  };

  const onFinishStep1 = async (values: any) => {
    const { code } = values;

    const res = await sendRequest<IBackendRes<any>>({
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/check-code`,
      method: "POST",
      body: { code, _id: userId },
    });
    if (res?.data) {
      setCurrent(2);
    } else {
      toast.error(<>{res?.error}</>, { autoClose: 2000 });
    }
  };

  return (
    <>
      <Modal
        title="Active your account"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        maskClosable={false}
        footer={null}
      >
        <Steps
          current={current}
          items={[
            {
              title: "Login",
              //   status: "finish",
              icon: <UserOutlined />,
            },
            {
              title: "Verification",
              //   status: "finish",
              icon: <SolutionOutlined />,
            },
            {
              title: "Done",
              //   status: "wait",
              icon: <SmileOutlined />,
            },
          ]}
        />
        {current === 0 && (
          <>
            <div style={{ margin: "20px 0" }}>
              <p>Your account is not actived</p>
            </div>
            <Form
              name="basic"
              onFinish={onFinishStep0}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                label=""
                name="email"
                initialValue={userEmail}
                rules={[
                  {
                    required: true,
                    message: "Please input email!",
                  },
                ]}
              >
                <Input size="large" disabled />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                  Resend
                </Button>
              </Form.Item>
            </Form>
          </>
        )}

        {current === 1 && (
          <>
            <div style={{ margin: "20px 0" }}>
              <p> Please enter your code to active your account</p>
            </div>
            <Form
              name="basic"
              onFinish={onFinishStep1}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                label="Code"
                name="code"
                rules={[
                  {
                    required: true,
                    message: "Please input your code!",
                  },
                ]}
              >
                <Input size="large" placeholder="Input your code" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                  Active
                </Button>
              </Form.Item>
            </Form>
          </>
        )}

        {current === 2 && (
          <>
            <div style={{ margin: "20px 0", textAlign: "center" }}>
              <p>
                Your account has been active successfully! Please login again
              </p>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};
export default ModalReactive;
