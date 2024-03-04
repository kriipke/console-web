import React from 'react';
import { Badge, Avatar, List } from 'antd';
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
  const { data } = useQuery("getCluster", getClusterFn, {
    select(data) {
      return data.data;
    },
    onSuccess(data) {
      console.log(data)
    },
    onError(error) {
      store.setRequestLoading(false);
      if (Array.isArray((error as any).response.data.error)) {
        (error as any).response.data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: "top-right",
          })
        );
      } else {
        toast.error((error as any).response.data.message, {
          position: "top-right",
        });
      }
    }
  });

  return (
	  <List
		itemLayout="horizontal"
		dataSource={data}
		renderItem={(item, index) => (
		  <List.Item>
			<List.Item.Meta
			  avatar={<Badge status="success"/>}
			  title={<a href="https://ant.design">{item.name}</a>}
			  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
			/>
		  </List.Item>
		)}
	  />
  );
};

export default HomePage;
