"use client";

import { Layout } from "antd";

const AdminFooter = () => {
  const { Footer } = Layout;

  return (
    <>
      <Footer style={{ textAlign: "center" }}>
        Admin Page ©{new Date().getFullYear()} Created by Thanh Tuyen
      </Footer>
    </>
  );
};
export default AdminFooter;
