import { ICharacter } from "../models/ICharacter"
import { Card, Space } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"

export function CharactersList() {
    const [characters, setCharacters] = useState<ICharacter[]>([])
    const url = "https://rickandmortyapi.com/api/character"

    async function fetchCharacters() {
        const respounse = await axios.get<{results: ICharacter[]}>(url)
        setCharacters(respounse.data.results)
    }

    useEffect(() => { fetchCharacters() }, [])

    return (
        <Space wrap style={{ justifyContent: 'center' }}>
            {characters.map(character => 
                <Card
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