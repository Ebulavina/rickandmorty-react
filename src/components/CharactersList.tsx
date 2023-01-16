import { Card, Space, Spin, Alert } from "antd"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { fetchCharacters } from "../store/action-creators/characters"

export const CharactersList: React.FC = () => {
    const { loading, error, characters } = useTypedSelector(state => state.characters)
    const dispatch: Dispatch<any> = useDispatch()

    useEffect(() => {
        dispatch(fetchCharacters())
    }, [])

    return (
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
    )
}