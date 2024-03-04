import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { getAllClustersFn } from '../api/authApi'
import useStore from '../store'
import { Typography, Row, Col, Flex, Avatar, List, Space, Card, Descriptions } from 'antd'
import type { DescriptionsProps } from 'antd'


const { Text, Link } = Typography;

const ClustersAllPage = () => {
  const store = useStore()

  const { data } = useQuery(['getClusters'], getAllClustersFn, {
    select(data) {
      return data.data
    },
    onSuccess(data) {
      console.log("getAllClustersFn success! data:", data)
    },
    onError(error) {
      console.log("getAllClustersFn faiure! error:", error)
    },
  })
  const cluster = data
  console.log(cluster)

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

  const formatClusterUrl = (clusterId) => {
    return 'http://localhost:3000' + '/console/clusters/' + clusterId;
  }

  return (
    <Flex vertical>
      <Col gutter={16}>
        {data?.map((cluster) => (
        <Row span={8}>
          
          <Link href={formatClusterUrl(cluster?.id)} target="_blank">
          <Card title={cluster?.name} bordered={false}>
          <Descriptions items={[
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

          ]} />
          </Card>
          </Link>
        </Row>
        ))}
      </Col>
    </Flex>
  );
}

export default ClustersAllPage
