import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loader from './components/public/Loader'
import WebLayout from './layouts/WebLayout'
import Err404 from './pages/Err404'
import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Contact from './pages/Contact'
import AdminAddAssesment from './pages/Admin/AdminAddAssesment'


const AdminLayout = lazy(() => import('./layouts/AdminLayout'))
const UserLayout = lazy(() => import('./layouts/UserLayout'))
const McqLayout = lazy(() => import('./layouts/McqLayout'))

const Register = lazy(() => import('./pages/Auth/Register'))
const UserDashboard = lazy(() => import('./pages/Shared/UserDashboard'))
const UserMembership = lazy(() => import('./pages/Shared/UserMembership'))
const UserAssesments = lazy(() => import('./pages/Shared/UserAssesments'))
const UserSettings = lazy(() => import('./pages/Shared/UserSettings'))

const AdminDashboard = lazy(() => import('./pages/Admin/AdminDashboard'))
const AdminMemberships = lazy(() => import('./pages/Admin/AdminMemberships'))
const AdminAssesments = lazy(() => import('./pages/Admin/AdminAssesments'))
const AdminUsers = lazy(() => import('./pages/Admin/AdminUsers'))
const AdminMails = lazy(() => import('./pages/Admin/AdminMails'))
const AdminSiteconfigs = lazy(() => import('./pages/Admin/AdminSiteconfigs'))
const AdminSettings = lazy(() => import('./pages/Admin/AdminSettings'))

const McqCheck = lazy(() => import('./pages/Mcq/McqCheck'))
const McqPanel = lazy(() => import('./pages/Mcq/McqPanel'))


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<WebLayout />}>
              <Route exact path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>
            <Route element={<UserLayout />}>
              <Route path='/user/dashboard' element={<UserDashboard />} />
              <Route path='/user/membership' element={<UserMembership />} />
              <Route path='/user/assesments' element={<UserAssesments />} />
              <Route path='/user/settings' element={<UserSettings />} />
            </Route>
            <Route element={<McqLayout />}>
              <Route path='/mcq/:mid' element={<McqCheck />} />
              <Route path='/mcq/:mid/u/:uid/x/:mcqcode' element={<McqPanel />} />
            </Route>
            <Route element={<AdminLayout />}>
              <Route path='/admin/dashboard' element={<AdminDashboard />} />
              <Route path='/admin/plans' element={<AdminMemberships />} />
              <Route path='/admin/assesments' element={<AdminAssesments />} />
              <Route path='/admin/assesments/add' element={<AdminAddAssesment />} />
              <Route path='/admin/users' element={<AdminUsers />} />
              <Route path='/admin/support' element={<AdminMails />} />
              <Route path='/admin/siteconfigs' element={<AdminSiteconfigs />} />
              <Route path='/admin/settings' element={<AdminSettings />} />
            </Route>
            <Route path='*' element={<Err404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App