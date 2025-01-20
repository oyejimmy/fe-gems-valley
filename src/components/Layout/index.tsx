import React, { useState } from "react";
import styled from "styled-components";
import { ProLayout, PageContainer } from "@ant-design/pro-components";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  AppstoreOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Menu } from "antd";
import "antd/dist/reset.css";

// 🔹 Navbar Hover Effect
const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #f39c12;
    transform: scale(1.1);
  }
`;

// 🔹 WhatsApp Floating Button
const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 14px 16px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  z-index: 1000;
  transition: 0.3s;

  &:hover {
    background-color: #1ebe57;
    transform: scale(1.1);
  }

  img {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 1768px) {
    padding: 10px 12px;
    font-size: 16px;
    bottom: 15px;
    right: 15px;
  }
`;

// 🔹 Styled Footer
const FooterContainer = styled.footer`
  background: rgb(187, 215, 241);
  color: black;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
  padding: 10px;

  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: rgb(0, 0, 0);
  }

  p {
    font-size: 14px;
    color: black;
  }

  a {
    color: black;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s;

    &:hover {
      color: rgb(0, 0, 0);
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
  justify-content: center;

  a {
    font-size: 24px;
    color: black;
    transition: transform 0.3s ease-in-out;

    &:hover {
      color: #f39c12;
      transform: scale(1.2);
    }
  }
`;

const Layout = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { path: "/", name: "Home", icon: <HomeOutlined /> },
    { path: "/products", name: "Products", icon: <AppstoreOutlined /> },
    { path: "/aboutus", name: "About", icon: <InfoCircleOutlined /> },
    { path: "/contact", name: "Contact", icon: <PhoneOutlined /> },
    { path: "/admin", name: "Admin Panel", icon: <SettingOutlined /> },
  ];

  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        <Link to="/logout">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <ProLayout
        logo={
          <Link
            to="/"
            style={{ color: "#fff", fontSize: "18px", fontWeight: "bold" }}
          >
            Gems Valley
          </Link>
        }
        title="Gems Valley"
        layout="mix"
        collapsed={collapsed}
        onCollapse={setCollapsed}
        fixSiderbar
        fixedHeader
        breakpoint="lg"
        style={{ height: "100vh", backgroundColor: "#001529" }}
        siderWidth={250}
        menuItemRender={(item, dom) => <Link to={item?.itemPath}>{dom}</Link>}
        menuDataRender={() => menuItems}
        collapsedButtonRender={false}
        headerRender={() => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 16px",
              backgroundColor: "#001529",
              color: "#fff",
              height: "64px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  cursor: "pointer",
                  marginRight: "16px",
                  fontSize: "18px",
                  color: "#fff",
                }}
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </div>
              <Link to="/" style={{ color: "#fff", fontSize: "18px" }}>
                Gems Valley
              </Link>
            </div>

            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              {menuItems.map((item) => (
                <NavItem key={item.path} to={item.path}>
                  {item.icon}
                  <span style={{ marginLeft: "8px" }}>{item.name}</span>
                </NavItem>
              ))}
            </div>

            <Dropdown overlay={userMenu} trigger={["click"]}>
              <Avatar
                size="large"
                style={{ backgroundColor: "#87d068", cursor: "pointer" }}
                icon={<UserOutlined />}
              />
            </Dropdown>
          </div>
        )}
      >
        <PageContainer>{children}</PageContainer>

        {/* ✅ Footer */}
        <FooterContainer>
          <FooterSection>
            <h3>Gems Valley</h3>
            <p>
              High-quality gemstones from Pakistan & Afghanistan. Trusted since
              2008.
            </p>
          </FooterSection>

          <FooterSection>
            <h3>Quick Links</h3>
            <p>
              <Link to="/products">Products</Link>
            </p>
            <p>
              <Link to="/aboutus">About Us</Link>
            </p>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
          </FooterSection>

          <FooterSection>
            <h3>Follow Us</h3>
            <SocialIcons>
              <a href="#">
                <FacebookOutlined />
              </a>
              <a href="#">
                <InstagramOutlined />
              </a>
            </SocialIcons>
          </FooterSection>
        </FooterContainer>
      </ProLayout>

      <WhatsAppButton
        href="https://wa.me/+923121999696?text=Hello%2C%20I%20am%20interested%20in%20your%20gemstones!"
        target="_blank"
      >
        <img
          style={{ fontSize: "300px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </WhatsAppButton>
    </>
  );
};

export default Layout;
