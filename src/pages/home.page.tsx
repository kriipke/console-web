import React from 'react';
import { Typography, Space, Card, Badge, Avatar, List } from 'antd';
import { getClusterFn } from "../api/authApi";
import useStore from "../store";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const data = [
  {
    title: 'Ant Design Title 1',
    status: 'available'
  },
  {
    title: 'Ant Design Title 2',
    status: 'available'
  },
  {
    title: 'Ant Design Title 3',
    status: 'available'
  },
  {
    title: 'Ant Design Title 4',
    status: 'available'
  },
];


const HomePage = () => {
  return (
	<Space direction="vertical" className="items-center" justify="Center" size="middle" style={{ display: 'flex' }}>
	  <Card title="Welcome" size="middle">
		<p>Card content</p>
		<p>Card content</p>
	  </Card>
	  <Card title="Card" size="small">
		<p>Card content</p>
		<p>Card content</p>
	  </Card>
	  <Card title="Card" size="small">
		<p>Card content</p>
		<p>Card content</p>
	  </Card>
	</Space>
  );
};

export default HomePage;
