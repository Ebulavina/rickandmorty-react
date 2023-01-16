import { useEffect, useState } from "react"
import axios, { AxiosError } from "axios"
import { ICharacter } from "../models/ICharacter"

export function useCharacters() {
    const url = "https://rickandmortyapi.com/api/character"

    const [characters, setCharacters] = useState<ICharacter[]>([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [isLast, setIsLast] = useState(false)

    // async function fetchCharacters() {
    //     try {
    //         setError('')
    //         setLoading(true)
    //         const respounse = await axios.get<{results: ICharacter[], info: { next: string }}>(url + '/?page=' + page)
    //         setCharacters(prevState => prevState.concat(respounse.data.results))
    //         setLoading(false)
    //         setIsLast(!respounse.data.info.next)
    //     } catch (e: unknown) {
    //         const error = e as AxiosError
    //         setLoading(false)
    //         setError(error.message)
    //     }
    // }

    // useEffect(() => { fetchCharacters() }, [page])

    return { characters, loading, error, isLast, setPage }
} 