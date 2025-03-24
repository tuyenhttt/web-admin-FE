import React, { useState, useEffect } from "react";
import { Layout, Input, Badge, Button, Dropdown, message, Modal } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";

const { Header } = Layout;
const { Search } = Input;

const HeaderLayout = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Giả lập trạng thái đăng nhập

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRequireLogin = () => {
    toast.error("Bạn cần đăng nhập để thực hiện thao tác này!");
  };

  return (
    <Header
      style={{
        width: "100%",
        zIndex: 1000,
        padding: "0",
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.9)" : "#fff",
        boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px 50px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <div className="logo" style={{ display: "flex", alignItems: "center" }}>
          <Link href="/" passHref>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
              }}
            >
              <Image src="/logo.png" alt="Bakery Logo" width={40} height={40} />
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#993300",
                  fontFamily: "Playfair Display, serif",
                }}
              >
                Sweet Delights
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav style={{ display: "flex", gap: "30px" }}>
          <Link href="/home">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Search & User Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Search placeholder="Search products..." style={{ width: 200 }} />

          <div style={{ display: "flex", gap: "15px" }}>
            {/* Hiển thị icon người nếu đã đăng nhập */}
            {isLoggedIn && (
              <Dropdown
                menu={{
                  items: [
                    { key: "profile", label: "My Profile" },
                    { key: "orders", label: "My Orders" },
                    { key: "wishlist", label: "Wishlist" },
                    { key: "logout", label: "Logout" },
                  ],
                }}
                placement="bottomRight"
                trigger={["click"]}
              >
                <Button
                  type="text"
                  icon={<UserOutlined />}
                  style={{ fontSize: "20px", color: "#555" }}
                />
              </Dropdown>
            )}

            {/* Nút yêu thích - Yêu cầu đăng nhập nếu chưa đăng nhập */}
            <Button
              type="text"
              icon={<HeartOutlined />}
              style={{ fontSize: "20px", color: "#555" }}
              onClick={isLoggedIn ? null : handleRequireLogin}
            />

            {/* Giỏ hàng - Yêu cầu đăng nhập nếu chưa đăng nhập */}
            <Badge count={3} size="small">
              <Button
                type="text"
                icon={<ShoppingCartOutlined />}
                style={{ fontSize: "20px", color: "#555" }}
                onClick={isLoggedIn ? null : handleRequireLogin}
              />
            </Badge>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HeaderLayout;
