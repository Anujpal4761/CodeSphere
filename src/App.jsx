import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Service } from './pages/Service'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { Error } from './pages/Error'
import { Logout } from './pages/Logout'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer/Footer'
import { AdminLayout } from './components/layouts/Admin-Layout'
import { AdminContacts } from './pages/Admin-Contacts'
import { AdminUsers } from './pages/Admin-Users'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/register'element={<Register/>}/>
        <Route path='/login'element={<Login/>}/>
         <Route path='/logout' element={<Logout/>}/>
        <Route path='*' element={<Error/>}></Route>
        <Route path ='/admin' element = {<AdminLayout/>}>
         <Route path ='users' element={<AdminUsers/>} /> 
         <Route path ='contacts' element={<AdminContacts/>} /> 
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App