import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Index from '../Index'
import Login from '../Login'
import NotFound from '../NotFound'
import Register from '../Register'
import Search from '../Search'
import User from '../User'

export default function App() {
  return (
    <div id={'app'}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Navigate to={'/index'} />} />
            <Route path="/index" element={<Index />} />
            <Route path="/search" element={<Search />} />
            <Route path="/user" element={<User />} />
          </Route>
          <Route path="/" element={<Navigate to={'/'} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
