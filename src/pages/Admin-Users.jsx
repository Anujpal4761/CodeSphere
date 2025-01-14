import { useEffect } from "react";
import { useAuth } from "../store/auth";
import { useState } from "react";
import {Link} from "react-router-dom"

export const AdminUsers = () => {
  const [users,setusers]=useState([])
    const {authorizationToken} = useAuth();
    const getAllUsersData = async () => {
       try{
        const response = await fetch("http://localhost:5000/api/admin/users",{
            method: "GET",
            headers: {
                Authorization:authorizationToken
            }
        })
        const data = await response.json();
        setusers(data)
       }catch(err){
        console.log(err)
       }
   }

  const deleteUser = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`,{
            method: "DELETE",
            headers: {
                Authorization:authorizationToken
            }
        })
        const data = await response.json(); 
        if(response.ok){
            getAllUsersData()
        }    
    }
        catch(err){
        console.log(err)     
    }


  }
   

   useEffect(() => {
    getAllUsersData()
   }, [])
  
    return (
    <>
    <section className="admin-users-section">
      <div className="container">
        <h1>Admin Users Data </h1>
      </div>
      <div className="container  admin-users">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((curUser, index) => {
              return (
                <tr key={index}>
                  <td>{curUser.username}</td>
                  <td>{curUser.email}</td>
                  <td>{curUser.phone}</td>
                  <td>
                    <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                  </td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => deleteUser(curUser._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  </>
    )
    
    
}   
