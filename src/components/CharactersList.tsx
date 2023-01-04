import { Card, Space, Spin, Alert } from "antd"
import { useCharacters } from "../hooks/characters"

export function CharactersList() {
    const { characters, loading, error } = useCharacters()

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