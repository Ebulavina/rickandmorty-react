import { ICharacter } from "../models/ICharacter"
import { Card, Space, Spin, Alert } from "antd"
import axios, { Axios, AxiosError } from "axios"
import { useEffect, useState } from "react"

export function CharactersList() {
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

    return (
        <Space wrap style={{ justifyContent: 'center' }}>
            {loading && <Spin />}
            {error &&     
                <Alert
                    message="Error"
                    description={error}
                    type="error"
                    showIcon
                />
            }
            {characters.map(character => 
                <Card
                    key={character.id}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt={character.name} src={character.image} />}
                >
                    <Card.Meta title={character.name} description={character.gender} />
                </Card>
            )}
        </Space>
    )
}