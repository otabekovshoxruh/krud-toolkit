import { createSlice } from '@reduxjs/toolkit'
import { getAllUsers, createUsers, deleteUsers, editUser, oneUser } from './extraReducer'


const initialState = {
    loading: false,
    usersData: [],
    userData:{},
    error: null,
    isDelete:null,
}

const userReducer = createSlice({
    name: "users",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        //  /////////// GET ALL USERS //////////
        builder.addCase(getAllUsers.pending, (state) =>{
            state.loading = true
        }).addCase(getAllUsers.fulfilled, (state, action) =>{
            state.loading = false;
            state.usersData = action.payload
        }).addCase(getAllUsers.rejected, (state, action) =>{
            state.error = action.error.message;
        })
        //  /////////// CREATE USERS ////////////
        builder.addCase(createUsers.pending, (state)=>{
            state.loading = true
        }).addCase(createUsers.fulfilled, (state, action)=>{
            state.loading = false;
            state.usersData.push(action.payload)
            console.log(action.payload);
        }).addCase(createUsers.rejected, (state, action)=>{
            state.error = action.error.message
        })
        // ////////// DELETE USERS ////////////
        builder.addCase(deleteUsers.pending, (state)=>{
            state.loading = true
            state.isDelete = 'axa'
        }).addCase(deleteUsers.fulfilled, (state) =>{
            state.loading = false;
          state.isDelete = 'vauu'
        }).addCase(deleteUsers.rejected, (state, action) =>{
            state.error = action.error.message
        })
        // //////////ONE USER //////////////////
        builder.addCase(oneUser.pending, (state)=>{
            state.loading = true
        }).addCase(oneUser.fulfilled, (state, action)=>{
            state.loading = false
            state.userData = action.payload
        }).addCase(oneUser.rejected, (state, action)=>{
            state.error = action.error.message
            state.loading = false
        })

    }
})

export const {} = userReducer.actions;
export default userReducer.reducer;

