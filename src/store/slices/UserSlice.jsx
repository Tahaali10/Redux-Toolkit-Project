import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions/actions";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      // console.log("id:", action.payload);
      state.splice(action.payload, 1);
    },
    // clearUsers(state, action) {
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(clearAllUsers, () => {
      return [];
    });
  },
});

// console.log(userSlice.actions);
// console.log(userSlice);

export default userSlice.reducer;
export const { addUser, removeUser} = userSlice.actions;
