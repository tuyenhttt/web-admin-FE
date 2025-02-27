"use client";
import { Layout } from "antd";

const AdminFooter = () => {
  const { Footer } = Layout;

  return (
    <>
      <Footer style={{ textAlign: "center" }}>
        Admin Web ©{new Date().getFullYear()} Created by @ThanhTuyen
      </Footer>
    </>
  );
};

export default AdminFooter;
