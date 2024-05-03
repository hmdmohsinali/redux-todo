import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

import counterReducer from "../features/counter/counterSlice";
// export const store = configureStore({
//     reducer: todoReducer
// });
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer}
        
});
