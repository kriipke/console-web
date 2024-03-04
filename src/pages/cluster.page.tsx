import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { getClusterFn } from '../api/authApi'
import useStore from '../store'
import { Space, Card, Descriptions } from 'antd'
import type { DescriptionsProps } from 'antd'

const ClusterPage = () => {
  const store = useStore()

  const { data } = useQuery(['getCluster'], getClusterFn, {
    select(data) {
      return data.data
    },
    onSuccess(data) {
      console.log("getClusterFn success! data:", data)
    },
    onError(error) {
      console.log("getClusterFn faiure! error:", error)
    },
  })

  const cluster = data

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'ID',
      children: cluster?.id,
    },
    {
      key: '2',
      label: 'Name',
      children: cluster?.name,
    },
    {
      key: '3',
      label: 'API Server Host',
      children: cluster?.api_server_host,
    },
    {
      key: '4',
      label: 'API Server Port',
      children: cluster?.api_server_port,
    },
  ]

  return (
   <Space direction="vertical" size="large" style={{ display: 'flex'  }}>
        <Card title="Card" size="small">
          <Descriptions title="Cluster Info" items={items} />
        </Card>
   </Space>
  );
}

export default ClusterPage
