import { ICharacter } from "./ICharacter"

export interface CharactersState {
    characters: ICharacter[];
    loading: boolean;
    error: string | null;
    page: number;
    count: number
}

export enum CharactersActionTypes {
    FETCH_CHARACTERS = 'FETCH_CHARACTERS',
    FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS',
    FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR',
    SET_CHARACTERS_PAGE = 'SET_CHARACTERS_PAGE',
    FETCH_CHARACTERS_COUNT = 'FETCH_CHARACTERS_COUNT'
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

interface SetCharactersPage {
    type: CharactersActionTypes.SET_CHARACTERS_PAGE,
    payload: number
}

interface FetchCharactersCount {
    type: CharactersActionTypes.FETCH_CHARACTERS_COUNT,
    payload: number
}

export type CharactersAction = FetchCharactersAction | FetchCharactersSuccessAction | FetchCharactersErrorAction | SetCharactersPage | FetchCharactersCount