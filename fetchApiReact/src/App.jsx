import { useState,useEffect } from 'react'
import UserCard from './components/UserCard'
import './App.css'
import { getPosts } from './api/getPost'
import Postcard from './components/Postcard'
import { getRandomUser } from './api/getPost'
function App() {

const [data,setData]=useState(null)
const [userdata,setuserdata]=useState(null)
 
useEffect(()=>{
 getRandomUser().then((randomuser)=>{
  setuserdata(randomuser.results[0]);
 })
 },[])

  useEffect(()=>{
   getPosts().then((posts)=>setData(posts))
  },[])

const refreshbtn=()=>{
  getRandomUser().then((randomuser)=>{
    setuserdata(randomuser.results[0]);
   })
}

  return (
    <>
   { userdata && <UserCard data={userdata}/>}
   <button onClick={refreshbtn}>Refresh user</button>
   
   
   {data ? data.map((e) =><Postcard  title={e.title} body={e.body}/>):<p>No data</p>}
    </>
  )
}

export default App
