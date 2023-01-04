import { ICharacter } from "../models/ICharacter"
import { Card, Space, Spin } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"

export function CharactersList() {
    const url = "https://rickandmortyapi.com/api/character"

    const [characters, setCharacters] = useState<ICharacter[]>([])
    const [loading, setLoading] = useState(false)

    async function fetchCharacters() {
        setLoading(true)
        const respounse = await axios.get<{results: ICharacter[]}>(url)
        setCharacters(respounse.data.results)
        setLoading(false)
    }

    useEffect(() => { fetchCharacters() }, [])

    return loading ? 
        <div style={{ textAlign: 'center' }}>
            <Spin />
        </div>
        :
            <Space wrap style={{ justifyContent: 'center' }}>
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
}