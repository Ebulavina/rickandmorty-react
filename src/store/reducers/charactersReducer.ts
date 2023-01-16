import { CharactersState, CharactersAction, CharactersActionTypes } from "../../models/characters"

const initialState: CharactersState = {
    characters: [],
    loading: false,
    error: null
}

export const charactersReduces = (state = initialState, action: CharactersAction): CharactersState => {
    switch (action.type) {
        case CharactersActionTypes.FETCH_CHARACTERS:
            return {loading: true, error: null, characters: []}
        case CharactersActionTypes.FETCH_CHARACTERS_SUCCESS:
            return {loading: false, error: null, characters: action.payload}
        case CharactersActionTypes.FETCH_CHARACTERS_ERROR:
            return {loading: false, error: action.payload, characters: []}
        default:
            return state
    }
} 