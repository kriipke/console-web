import { Outlet } from "react-router-dom"
import Header from "./Header"
import React from "react";
import useStore from "../store";
import { Menu, Layout, theme } from "antd";
import { LaptopOutlined, NotificationOutlined, KubernetesOutlined  } from '@ant-design/icons';
import { useQuery } from "@tanstack/react-query";


const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

// {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,
// 
//       children: new Array(4).fill(null).map((_, j) => {
//         const subKey = index * 4 + j + 1;
//         return {
//           key: subKey,
//           label: `option${subKey}`,
//         }
//       }),
// }
//
const sidebarNavItems: MenuProps['items'] = [
    {
          key: `clusters`,
          icon: React.createElement(KubernetesOutlined),
          label: `Clusters`,
          children: items1
    },
    {
          key: `apps`,
          icon: React.createElement(LaptopOutlined),
          label: `Apps`,
          children: items1
    }
  ]

const { Content, Footer, Sider  } = Layout;

const AntLayoutMinimal = ()=> {
    const store = useStore();

    const {
          token: { colorBgContainer, borderRadiusLG  },
    } = theme.useToken();

    return <>
    <Header/>
    <h1>MINIMAL</h1>
    <Content className="container"style={{ padding: '0 48px' }}>
      <Layout
        style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
      >
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Outlet />
        </Content>
      </Layout>
    </Content>
  
    </>
}

export default AntLayoutMinimal
