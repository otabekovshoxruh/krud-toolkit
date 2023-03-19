import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, deleteUsers } from "../../reduxToolkit/user/extraReducer"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../style.scss'




export default function Home() {

  const dispatch = useDispatch()
  const { usersData, isDelete } = useSelector((state) => state.users)
  
  useEffect(()=>{
    dispatch(getAllUsers())
  }, [isDelete])

  

  console.log(usersData);
  return (
    <div className='container'>
      <h1>Jamoa Tarkbi</h1>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>Game</th>
          <th>
          <Link to='/create-user'>
            <Button variant="warning">CreateUser</Button>
          </Link>
          </th>
        </tr>
      </thead>
      <tbody>
      {
        usersData.map(user=>(
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.country}</td>
            <td>{user.game}</td>
            <td>
              <Link to={`/edit-user/${user.id}`}>
                <Button variant="primary">Edit</Button>
              </Link>
              <Button variant="danger" onClick={()=>{
                dispatch(deleteUsers(user.id))
              }} >Delete</Button>
            </td>
          </tr>
      ))}    
      </tbody>
    </Table>
    </div>
  )
}
