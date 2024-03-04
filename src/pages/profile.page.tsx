import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { getMeFn } from '../api/authApi'
import useStore from '../store'
import { Descriptions } from 'antd'
import type { DescriptionsProps } from 'antd'

const ProfilePage = () => {
  const store = useStore()
  const { data } = useQuery(['getMe'], getMeFn, {
    select(data) {
      return data.data.user
    },
    onSuccess(data) {
      store.setAuthUser(data)
      store.setRequestLoading(false)
    },
    onError(error) {
      store.setRequestLoading(false)
      if (Array.isArray((error as any).response.data.error)) {
        ;(error as any).response.data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: 'top-right',
          }),
        )
      } else {
        toast.error((error as any).response.data.message, {
          position: 'top-right',
        })
      }
    },
  })

  const user = store.authUser
  console.log("USER:", user)

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'ID',
      children: user?.id,
    },
    {
      key: '2',
      label: 'Name',
      children: user?.name,
    },
    {
      key: '3',
      label: 'Email',
      children: user?.email,
    },
    {
      key: '4',
      label: 'Role',
      children: user?.role,
    },
  ]

  return <Descriptions title="User Info" items={items} />
}

export default ProfilePage
