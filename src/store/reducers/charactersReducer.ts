import { CharactersState, CharactersAction, CharactersActionTypes } from "../../models/characters"

const initialState: CharactersState = {
    characters: [],
    loading: false,
    error: null,
    page: 1,
    pages: 1
}

export const charactersReduces = (state = initialState, action: CharactersAction): CharactersState => {
    switch (action.type) {
        case CharactersActionTypes.FETCH_CHARACTERS:
            return {...state, loading: true}
        case CharactersActionTypes.FETCH_CHARACTERS_SUCCESS:
            return {...state, loading: false, characters: action.payload}
        case CharactersActionTypes.FETCH_CHARACTERS_ERROR:
            return {...state, loading: false, error: action.payload}
        case CharactersActionTypes.SET_CHARACTERS_PAGE:
            return {...state, page: action.payload}
        case CharactersActionTypes.FETCH_CHARACTERS_PAGES:
            return {...state, pages: action.payload}
        default:
            return state
    }
} 