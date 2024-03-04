import { Outlet } from "react-router-dom"
import Header from "./Header"
import React from "react";
import useStore from "../store";
import { Breadcrumb, Menu, Layout, theme } from "antd";
import { LaptopOutlined, NotificationOutlined, KubernetesOutlined  } from '@ant-design/icons';


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
const items2: MenuProps['items'] = [
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

const AntLayout = ()=> {
    const store = useStore();

    const {
          token: { colorBgContainer, borderRadiusLG  },
    } = theme.useToken();

    return <>
    <Header/>
    <Content className="container"style={{ padding: '0 48px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>{store.currentCluster}</Breadcrumb.Item>
      </Breadcrumb>
      <Layout
        style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
      >
        <Sider style={{ background: colorBgContainer }} width={200}>
      	<Menu
      	  mode="inline"
      	  defaultSelectedKeys={['1']}
      	  defaultOpenKeys={['sub1']}
      	  style={{ height: '100%' }}
      	  items={items2}
      	/>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Outlet />
        </Content>
      </Layout>
    </Content>
  
    </>
}

export default AntLayout
