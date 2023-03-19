import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUsers } from '../../reduxToolkit/user/extraReducer';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "../style.scss"

export default function CreateUser() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [data, setData] = useState({
    name: "",
    email: "",
    country: "",
    game: "",
  })
  
  
  const submit = ()=>{
    dispatch(createUsers(data))
    navigate('/')
 }


  
  return (
    <div>
      <h1 className='text__center'>Create User</h1>
      <form onSubmit={submit} className="form__column"> 
        <label>Name</label>
        <input className='form__input' type="text" onChange={(e)=> setData({...data, name:e.target.value}) } placeholder="Ronaldo"/>
        <label> Email</label>
        <input className='form__input' type="email" onChange={(e)=> setData({...data, email:e.target.value})} placeholder="Ronaldo@ronaldo.com"/>
        <label> Country</label>
        <input className='form__input' type="text" onChange={(e)=> setData({...data, country:e.target.value})} placeholder="UZB BUNYOTKOR" />
        <label> Game</label>
        <input className='form__input' type="text" onChange={(e)=> setData({...data, game:e.target.value})} placeholder="U20 ASIAN"/>
        <Button type="submit">Success</Button>
      </form>

    </div>
        
      )
}
{/* <Formik
            initialValues={{
              name: "",
              username: "",
              email: "",
              country: "",
              game: "",
            }}
            onSubmit={(values) => {
              console.log(values)
              
            }}
          >
            <Form className="form__input">
              <h1>CreateUser</h1>
              <label htmlFor="name">First Name</label>
              <Field
                className="input"
                id="name"
                name="name"
                placeholder="Jane"
              />

              <label htmlFor="username">Last Name</label>
              <Field
                className="input"
                id="username"
                name="username"
                placeholder="Doe"
              />

              <label htmlFor="email">Email</label>
              <Field
                className="input"
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />

              <label htmlFor="Country">Country</label>
              <Field
                className="input"
                id="country"
                name="country"
                placeholder="Country"
              />

              <label htmlFor="game">your favorite game?</label>
              <Field
                className="input"
                id="game"
                name="game"
                placeholder="game"
              />
                <button type="submit">Submit</button>             
            </Form>
          </Formik> */}