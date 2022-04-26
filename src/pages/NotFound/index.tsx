import { Tabs, Empty } from 'react-vant'

export default function NotFound() {
  return (
    <Tabs>
      <Tabs.TabPane title="页面不存在">
        <Empty image="error" description="您要找的内容不存在哦" />
      </Tabs.TabPane>
    </Tabs>
  )
}
