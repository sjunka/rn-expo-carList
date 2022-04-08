import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  value: false,
  list: [],
}

export const FavoriteStar = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
   
    toggle: (state, action) => {

        console.log('favorite:'+ action.payload)

        
        const newState = state.list.map(obj =>
            {

                if(obj.id === action.payload){
                    if (obj.favorite === true){
                        return { ...obj, favorite: false }
                    } else if (obj.favorite === false) {
                            return { ...obj, favorite: true }
                    }

                } else {
                    return obj
                }
                
               
                return obj.id === action.payload ? { ...obj, favorite: !obj.favorite } : obj
            }
           
        );

        state.list = newState
      },

      setUserList: (state, action ) => {
        state.list = action.payload;

        state.list.forEach(item => item.favorite=false)
   

        // state.list = cars;
        // console.log('thisis'+state.list)

      }
  
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, toggle, setUserList } = FavoriteStar.actions

// export const selectCount = (state) => state.favorite.value

export default FavoriteStar.reducer


export const fetchAllUsers = () => (dispatch) => {
  axios
    .get("http://10.0.2.2:3000")
    .then((response) => {
      dispatch(setUserList(response.data.items));
    })
    .catch((error) => console.log(error));
};