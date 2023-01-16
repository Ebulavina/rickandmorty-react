import { ICharacter } from "./ICharacter"

export interface CharactersState {
    characters: ICharacter[],
    loading: boolean,
    error: string | null
}

export enum CharactersActionTypes {
    FETCH_CHARACTERS = 'FETCH_CHARACTERS',
    FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS',
    FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR'
}

interface FetchCharactersAction {
    type: CharactersActionTypes.FETCH_CHARACTERS
}

interface FetchCharactersSuccessAction {
    type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS,
    payload: ICharacter[]
}

interface FetchCharactersErrorAction {
    type: CharactersActionTypes.FETCH_CHARACTERS_ERROR,
    payload: string
}

export type CharactersAction = FetchCharactersAction | FetchCharactersSuccessAction | FetchCharactersErrorAction