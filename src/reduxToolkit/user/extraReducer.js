import { createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios";


const base_url = 'http://localhost:5000/users'


export const getAllUsers = createAsyncThunk("getUser", async()=>{
    return await axios.get(base_url).then(res => res.data)
})


export const createUsers = createAsyncThunk("createUser", async(payload)=>{
    return await axios.post(base_url, payload).then(res => res.data)
})

export const deleteUsers = createAsyncThunk("deleteUser", async(id)=>{
    return await axios.delete(`${base_url}/${id}`).then(res => res.data)
})

export const editUser = createAsyncThunk("editUser", async(payload)=>{
    console.log(payload);
    return await axios.patch(`${base_url}/${payload.id}`, payload.newUserData).then(res => res.data)
})

export const oneUser = createAsyncThunk("oneUser", async(id)=>{
    return await axios.get(`${base_url}/${id}`).then(res => res.data)
})