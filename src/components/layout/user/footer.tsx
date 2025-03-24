import React from "react";
import { Layout, Row, Col, Typography, Input, Button, Space } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const FooterLayout: React.FC = () => {
  return (
    <Footer
      style={{ backgroundColor: "#222", padding: "40px 0", color: "white" }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
        <Row gutter={[32, 24]}>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "white" }}>
              About Us
            </Title>
            <Text style={{ color: "#aaa" }}>
              We are a premium bakery offering fresh, handcrafted bread and
              pastries made with the finest ingredients.
            </Text>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "white" }}>
              Quick Links
            </Title>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link style={{ color: "#aaa" }}>Home</Link>
              </li>
              <li>
                <Link style={{ color: "#aaa" }}>Products</Link>
              </li>
              <li>
                <Link style={{ color: "#aaa" }}>About</Link>
              </li>
              <li>
                <Link style={{ color: "#aaa" }}>Contact</Link>
              </li>
            </ul>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "white" }}>
              Contact Us
            </Title>
            <Text style={{ color: "#aaa", display: "block" }}>
              123 Bakery Street
            </Text>
            <Text style={{ color: "#aaa", display: "block" }}>
              Flour City, FC 12345
            </Text>
            <Text style={{ color: "#aaa", display: "block" }}>
              Phone: (123) 456-7890
            </Text>
            <Text style={{ color: "#aaa", display: "block" }}>
              Email: info@bakery.com
            </Text>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "white" }}>
              Newsletter
            </Title>
            <Text style={{ color: "#aaa" }}>
              Subscribe to receive updates and promotions
            </Text>
            <Space style={{ marginTop: 12 }}>
              <Input placeholder="Your email" />
              <Button
                type="primary"
                style={{ backgroundColor: "#C26D51", borderColor: "#C26D51" }}
              >
                Subscribe
              </Button>
            </Space>
            <Space style={{ marginTop: 16 }}>
              <Button
                icon={<FacebookOutlined />}
                shape="circle"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#aaa",
                  color: "#aaa",
                }}
              />
              <Button
                icon={<InstagramOutlined />}
                shape="circle"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#aaa",
                  color: "#aaa",
                }}
              />
              <Button
                icon={<TwitterOutlined />}
                shape="circle"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#aaa",
                  color: "#aaa",
                }}
              />
            </Space>
          </Col>
        </Row>

        <div
          style={{
            marginTop: 40,
            textAlign: "center",
            borderTop: "1px solid #444",
            paddingTop: 20,
          }}
        >
          <Text style={{ color: "#aaa" }}>
            © 2023 Bakery. All rights reserved.
          </Text>
        </div>
      </div>
    </Footer>
  );
};

export default FooterLayout;
