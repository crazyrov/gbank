import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    token: '',
    image: '',
    phone: '',
    existing_user: null,
    account_number: null,
    balance: null,
    address: null

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.image = action.payload.image;
            state.existing_user = action.payload.existing_user;
            state.account_number = action.payload.account_number;
            state.balance = action.payload.balance;
            state.phone = action.payload.phone;
            state.address = action.payload.address;
        },
        logout: (state) => {
            state.name = '';
            state.email = '';
            state.token = '';
            state.image = '';
            state.existing_user = null;
            state.account_number = null;
            state.balance = null;
            state.phone = null;

        }
    }

});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;