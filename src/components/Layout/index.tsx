import React, { useState } from "react";
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
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Menu } from "antd";
import "antd/dist/reset.css";

const Layout = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      path: "/",
      name: "Home",
      icon: <HomeOutlined />,
    },
    {
      path: "/products",
      name: "Products",
      icon: <AppstoreOutlined />,
    },
    {
      path: "/aboutus",
      name: "About",
      icon: <InfoCircleOutlined />,
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <PhoneOutlined />,
    },
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
          {/* Left Side: Logo and Sidebar Toggle */}
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

          {/* Center: Navbar Menu */}
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item.icon}
                <span style={{ marginLeft: "8px" }}>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Right Side: User Avatar Dropdown */}
          <Dropdown overlay={userMenu} trigger={["click"]}>
            <Avatar
              size="large"
              style={{ backgroundColor: "#87d068", cursor: "pointer" }}
              icon={<UserOutlined />}
            />
          </Dropdown>
        </div>
      )}
      siderWidth={300}
      menuItemRender={(item, dom) => <Link to={item?.itemPath}>{dom}</Link>}
      menuDataRender={() => menuItems}
      collapsedButtonRender={false} // Hides the default collapse button
    >
      <PageContainer>{children}</PageContainer>
    </ProLayout>
  );
};

export default Layout;
