import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { oneUser, editUser } from '../../reduxToolkit/user/extraReducer';
import Button from 'react-bootstrap/Button';
import '../style.scss'


export default function EditUser() {
  const [newUserData, setNewUserData] = useState({name: "", email:"", country:"", game:""});
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  console.log(params);
  const { userData, loading } = useSelector((state)=> state.users)
  

  useEffect(()=>{
    dispatch(oneUser(params.id))
  },[])


  
  
  const submit = ()=>{
    dispatch(editUser({id:params.id, newUserData}))
    navigate("/")
 }

 useEffect(()=>{
  if(!loading){
    setNewUserData({...userData})
  }
 },[loading])

  
  return (
    <div className='container '>
        <h1 className='text__center'>EditUser</h1>
        <form onSubmit={submit} className="form__column"> 
          <label>Name</label>
          <input className='form__input'  type="text" onChange={(e)=> setNewUserData((prev)=>({...prev, name:e.target.value}))} defaultValue={newUserData?.name} placeholder="messi"/>
          <label>Email</label>
          <input className='form__input' type="email" onChange={(e)=> setNewUserData((prev)=>({...prev, email:e.target.value}))} defaultValue={newUserData?.email} placeholder="messi@messi.com"/>
          <label> Country</label>
          <input className='form__input' type="text" onChange={(e)=> setNewUserData((prev)=>({...prev, country:e.target.value}))} defaultValue={newUserData?.country} placeholder="ABAB"/>
          <label> Game</label>
          <input className='form__input'  onChange={(e)=> setNewUserData((prev)=>({...prev, game:e.target.value}))} defaultValue={newUserData?.game} placeholder="csgo"/>
          <Button variant="success" type='submit'>UPDATE</Button>
      </form>
    </div>

    
  )
}
