import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import {
  AiOutlineDashboard,
  AiOutlineAppstoreAdd,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillImageFill } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { VscRequestChanges } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";
import { Layout, Menu, theme } from "antd";

import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const authState = useSelector((state) => state?.auth?.user);

  return (
    <Layout onContextMenu={(e) => e.preventDefault()} className="min-h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={`flex-shrink-0 ${collapsed ? "w-20" : "w-64"}`}
      >
        <div className="logo bg-indigo-500 p-0 h-16 flex items-center justify-center">
          <h2 className="text-white text-xl text-center m-0">
            <span className={collapsed ? "block" : "hidden"}>MBL</span>
            <span className={collapsed ? "hidden" : "block"}>
              MakeUp By Lil
            </span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
              localStorage.clear();
              window.location.reload();
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },

            {
              key: "catalog",
              icon: <AiOutlineAppstoreAdd className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "service",
                  icon: <AiOutlineAppstoreAdd className="fs-4" />,
                  label: "Add Service",
                },
                {
                  key: "service-list",
                  icon: <AiOutlineUnorderedList className="fs-4" />,
                  label: "Services",
                },
                {
                  key: "portfolio",
                  icon: <BsFillImageFill className="fs-4" />,
                  label: "Add Portfolio",
                },
                {
                  key: "portfolio-list",
                  icon: <AiOutlineUnorderedList className="fs-4" />,
                  label: "Portfolio",
                },
                {
                  key: "faq",
                  icon: <FaQuestion className="fs-4" />,
                  label: "Add FAQ",
                },
                {
                  key: "faq-list",
                  icon: <AiOutlineUnorderedList className="fs-4" />,
                  label: "FAQ List",
                },
              ],
            },

            {
              key: "enquiries",
              icon: <VscRequestChanges className="fs-4" />,
              label: "Enquiries",
            },
            {
              key: "signout",
              icon: <CiLogout className="fs-4" />,
              label: "Sign Out",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="flex justify-between px-5 bg-gray-800"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className:
                "trigger text-lg h-16 cursor-pointer transition-colors hover:text-blue-400",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="flex gap-4 items-center">
            <div
              className={`relative ${dropdownOpen ? "group" : ""}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="flex gap-3 items-center cursor-pointer">
                <img
                  className="w-8 h-8"
                  src="https://media.licdn.com/dms/image/D5603AQF1oO-LOJxT_w/profile-displayphoto-shrink_800_800/0/1664684206755?e=1688601600&v=beta&t=2rtqrrVZMf-oqOjGIgZiGbx0qpGDjGZMn576ZBfQWb0"
                  alt="adminPic"
                />
                <div>
                  <h5 className="mb-0">
                    {authState?.firstName + " " + authState?.lastName}
                  </h5>
                  <p className="mb-0">{authState?.email}</p>
                </div>
              </div>
              <div
                className={`${
                  dropdownOpen ? "block" : "hidden"
                } absolute mt-2 bg-white text-black p-2 rounded shadow-lg`}
              >
                <Link className="block py-1 mb-1 hover:bg-gray-100" to="/">
                  View Profile
                </Link>
              </div>
            </div>
          </div>{" "}
        </Header>
        <Content className="m-6 p-6 bg-transparent min-h-[280px] overflow-y-auto">
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
      <style jsx>{`
        .site-layout::-webkit-scrollbar {
          width: 0px;
        }
        .trigger:hover {
          color: #1890ff;
        }
        .ant-menu-title-content {
          font-size: 16px;
        }
        .ant-layout-header h5 {
          line-height: 20px;
          font-size: 14px;
        }
        .ant-layout-header p {
          line-height: 20px;
          font-size: 13px;
        }
        .ant-layout-header div .badge {
          top: 16px;
          right: -6px;
        }
      `}</style>
    </Layout>
  );
};
export default MainLayout;
