import axios from "axios"
import { Dispatch } from "redux"
import { CharactersActionTypes, CharactersAction } from "../../models/characters"
import { ICharacter } from "../../models/ICharacter"

export const fetchCharacters = () => {
    const url = "https://rickandmortyapi.com/api/character"

    return async (dispatch: Dispatch<CharactersAction>) => {
        try {
            dispatch({type: CharactersActionTypes.FETCH_CHARACTERS})
            const respounse = await axios.get<{results: ICharacter[]}>(url)
            dispatch({type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS, payload: respounse.data.results})
        } catch (e) {
            dispatch({
                type: CharactersActionTypes.FETCH_CHARACTERS_ERROR, 
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}