import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Admin from './module1/Admin'
import Login from './module1/Login'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from './module1/Signin'
import Userdashboard from './usermodule/Userdashboard'
import Browserjob from './usermodule/Browserjob'
import Viewappliedjob from './usermodule/Viewappliedjob'
import Updateprofile from './usermodule/Updateprofile'
import Navuser from './usermodule/Navuser'
import Navadmin from './adminmodule/Navadmin'
import Admindashboard from './adminmodule/Admindashboard'
import Fulluserappl from './adminmodule/Fulluserappl'
import Managejob from './adminmodule/Managejob'
import Navbar from './module1/Navbar'
import Intro from './module1/Intro'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div>
  
  {/* <Navbar></Navbar> */}
    <Routes>
      <Route path='/admin'element={<Admin />}></Route>
      <Route path='/'element={<Intro />}></Route>
      <Route path='/login'element={<Login/>}></Route>
      <Route path='/signin'element={<Signin />}></Route>
      </Routes>
     

      <Routes>
      <Route path='/userdash'element={<Userdashboard/>}></Route>
     <Route path='/usernav'element={<Navuser/>}></Route> 
      <Route path='/browser'element={<Browserjob/>}></Route>
      <Route path='/viewappjob'element={<Viewappliedjob />}></Route>
      <Route path='/updateprof'element={<Updateprofile/>}></Route>
      </Routes>
    
   
        <Routes>
        <Route path='/admindash'element={<Admindashboard/>}></Route>
      <Route path='/fulluser'element={<Fulluserappl/>}></Route>
      <Route path='/manjob'element={<Managejob />}></Route>
        </Routes>
    
     
     
      
  
  </div>
       
    </>
  )
}

export default App