import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect, useState } from 'react';
function SmallExample() {
  const [details,setDetails] = useState([])
  const getUser = async()=>{
    await axios.get("http://localhost:2000/admin/home").then((res)=>{ 

      setDetails(res.data.userData);
    })
  }
useEffect(()=>{
  getUser()
},[])
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
           <th>Password</th>
           <th>Action</th>
        </tr>
      </thead>
    
      <tbody>
        {
          details.map((data,i)=>{
            return (
              <tr>
              <td>{i+1}</td>
              <td>{data.fname}</td>
              <td>{data.lname}</td>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>
                <button>edit</button>
                <button>block</button>
                </td>
                
            </tr> 
            )
          })
          
        }
      
      </tbody>
    </Table>
  );
}

export default SmallExample;