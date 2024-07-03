import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {BrowserRouter,Routes,Route,useParams,NavLink}from 'react-router-dom'

const Home=()=>{

  const[posts,setPosts]=useState([])

  useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data)=>data.json())
  .then((data)=>setPosts(data))
  },[])

  return( 
    <div>
     <div className='post-container'>
      {posts.map((post)=>(
        <li>{post.title}</li>
      ))}
     </div>
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
const Settings=()=>
{
  return(
    <div>
      <h1>Setting Page</h1>
    </div>
  )
}

const SayUser=()=>{
  const params=useParams();
  console.log(params)
  return (
    <div>
      <h1>
        Your name is {params.userName}
      </h1>
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

    <Route path='/user/:userName' element={<SayUser/>}/>


    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    
    <Route path="account">
     <Route path="profile" element={<Profile/>}/>
     <Route path="setting" element={<Settings/>}/>
    </Route>

    
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
