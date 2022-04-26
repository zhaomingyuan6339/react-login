import { Tabbar } from 'react-vant'
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
export default function Home() {
  const navitage = useNavigate()
  return (
    <>
      <Outlet />
      <Tabbar onChange={ac => navitage(ac as string)} defaultValue='index'>
        <Tabbar.Item icon={<HomeO />} name="index">
          首页
        </Tabbar.Item>
        <Tabbar.Item icon={<Search />} name="search">
          搜索
        </Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />} name="user">
          我的
        </Tabbar.Item>
      </Tabbar>
    </>
  )
}
