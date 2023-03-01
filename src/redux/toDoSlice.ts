import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {generateId} from "../data/helpers";

const toDoList: { id: string, title: string }[] = [];

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState: toDoList,
    reducers: {
        addToDo: (state, action: PayloadAction<{ title: string }>) => {
            let newToDoList = {
                id: generateId(),
                title: action.payload.title,
            }
            return [...state, newToDoList];
        },
        deleteToDo: (state, action: PayloadAction<{ id: string }>) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        editToDo: (state, action: PayloadAction<{ id: string, title: string }>) => {
            return state.map((item) =>
                item.id === action.payload.id ? action.payload : item);
        }
    }
})

export const {addToDo, deleteToDo, editToDo} = toDoSlice.actions;
export default toDoSlice.reducer;