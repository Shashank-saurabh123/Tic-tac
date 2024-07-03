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
        <NavLink style={{display:"block"}}
        to={`/post/${post.id}`}>{post.title}
        </NavLink>
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

const PostPage=()=>{
  const params=useParams()
  console.log("params",params)
  const [data,setData]=useState(null)
 useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  .then(data=>data.json())
  .then(data=>setData(data))
 },[])

  console.log('Data',data);
  if(data===null) return <p>Loading...</p>

  return(
    <div>
      <h1>
        {data.title}
      </h1>
      <p>{data.body}</p>
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

    <Route path='/user/:userName' element={<SayUser/>}/>
    <Route path='/post/:postId' element={<PostPage/>}/>

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
