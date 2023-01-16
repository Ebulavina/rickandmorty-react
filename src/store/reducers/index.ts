import { combineReducers } from "redux";
import { charactersReduces } from "./charactersReducer";

export const rootReducer = combineReducers({
    characters: charactersReduces
})

export type RootState = ReturnType<typeof rootReducer>