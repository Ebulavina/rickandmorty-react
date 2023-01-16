import { Card, Space, Spin, Alert, Button } from "antd"
import { useCharacters } from "../hooks/characters"

export function CharactersList() {
    const { characters, loading, error, isLast, setPage } = useCharacters()

    return (
        <div>
            <Space wrap>
                {loading && <Spin />}
                {error &&     
                    <Alert
                        message="Error"
                        description={error}
                        type="error"
                        showIcon
                    />
                }
                {!loading && characters.map(character => 
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

            {!isLast && 
                <div style={{ margin: '20px 0', textAlign: 'center' }}>
                    <Button onClick={() => setPage(prevState => prevState + 1)}>Load more</Button>
                </div>
            }
        </div>
    )
}