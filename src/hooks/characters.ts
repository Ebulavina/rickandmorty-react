import { useEffect, useState } from "react"
import axios, { Axios, AxiosError } from "axios"
import { ICharacter } from "../models/ICharacter"

export function useCharacters() {
    const url = "https://rickandmortyapi.com/api/character"

    const [characters, setCharacters] = useState<ICharacter[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetchCharacters() {
        try {
            setError('')
            setLoading(true)
            const respounse = await axios.get<{results: ICharacter[]}>(url)
            setCharacters(respounse.data.results)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => { fetchCharacters() }, [])

    return { characters, loading, error }
}