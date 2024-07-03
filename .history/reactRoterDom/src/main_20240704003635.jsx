import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {BrowserRouter,Routes,Route}from 'react-router-dom'

const Home=()=>{
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  )
}
const About=()=>{
  return (
    <div>
      <h1>About page</h1>
    </div>
  )
}

const Profile=()=>{
  return(
    <div>
      <h1>Profile page </h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    
    <Route path="account">
     <Route path="profile" element={<Profile/>}/>
    </Route>

    
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
