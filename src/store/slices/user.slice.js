import { createSlice } from "@reduxjs/toolkit";
import { axiosMusic } from "../../utils/configAxios";


const INITIAL_STATE =  {
  name: "",
  email: "",
  token: ""
}

const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : INITIAL_STATE,
  reducers: {
    login: (state, action) => {
      const data = action.payload;
      const newState = { ...state, ...data};
      localStorage.setItem('userInfo', JSON.stringify(newState));
      return newState;
    }
  }
});

const { login } = userSlice.actions;

export default userSlice.reducer;


export const loginMiddleware = (data) => (dispatch) => {
  axiosMusic
      .post('/api/auth/login', data)
      .then(({ data }) => dispatch(login(data)))
      .catch((error) => console.log(error))
}