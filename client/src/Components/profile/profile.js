import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {useCookies} from "react-cookie";
function Profile() {
  const [image,setImage] = useState("");
  const [cookies] = useCookies([])
  useEffect(()=>{
    const token = cookies.data.token;
    console.log(token);
  },[cookies])


   console.log(image);
   const handleImage = (e) =>{
    setImage(e.target.files[0]);
   }
   const addImage = async(e)=>{
      e.preventDefault()
      var formData = new FormData();
      formData.append("photo",image);
      const confiq = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
      const {data} = await axios.post("http://localhost:2000/profile",formData,confiq)
      console.log(data);
   }
  // const imageUploading = async()=>{
  //   let file = new FormData()
  //   file.append("image",image);
  // }
  // console.log(imageUploading);
  return (
   
       <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
       
         
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
           
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              
                <h3 className='text-dark'>Profile</h3>
                
              
              </li>
            </ul>
           
       
            <div className="d-flex align-items-center">
            
         <Link to={'/'}>
              <h6 className='text-dark   px-4 me-4 mt-2  ' style={{cursor:'pointer'}} >Home</h6>
       
                 </Link>
              
             
            </div>
          </div>
          
        </div>
       
       </nav>
         <div className="row justify-content-center my-5 py-5">
             <div className="col-lg-4">
               <div className="card mb-4">
                 <div className="card-body text-center">
                   <img src={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" }  alt="avatar"
                     className="rounded-circle img-fluid" style={{width : '150px' ,height:"200px" }}/>
                   <h5 className="my-3">gbfg</h5>
                   <p className="text-muted mb-1">ghhrthr@</p>
                   <p className="text-muted mb-4">678676</p>
                   <div className="mb-2">
                    <div>
                    <input type="file" 
                    className='btn btn-outline-dark' 
                     onChange={handleImage}
                      name="photo"
                    
                    /> 
                
                       </div> 
                       <div>
                       <button className='btn btn-outline-dark mt-3' type='button' onClick={addImage}> Add </button>
                       </div>
                   
       
                     
                  
                   </div>
                 </div>
               </div>
           </div>
           </div>
         </div>
       
 
  )
}

export default Profile
