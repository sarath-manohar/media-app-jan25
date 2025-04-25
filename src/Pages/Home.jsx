import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'

function Home() {
  const[uploadVideoResponse,setUploadVideoResponse]=useState({})
  const[dropVideoResponse,setDropVideoResponse]=useState({})
  return (
   <>
    <div className="container mt-3 mb-3 d-flex justify-content-between">
      
      <div className="add-videos">
        <Add setUploadVideoResponse={setUploadVideoResponse}/>
      </div>
      <Link to={'/watch-history'} style={{textDecoration:"none" ,color:"blue",fontSize:"30px",marginTop:"50px"}}>Watch-History<i class="fa-solid fa-clock-rotate-left fa-flip-horizontal ms-2"></i></Link>
      </div> 
       <div className="container-fluid mt-5 mb-3 w-100 row">
       <div className="all-videos col-lg-9">
        <h2 className='text-info'>All-Videos</h2>
        <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
       </div>
      <div className="category col-lg-3">
        <Category dropVideoResponse={dropVideoResponse}/>
      </div>
          </div>
   
   </>

    
  )
}

export default Home
