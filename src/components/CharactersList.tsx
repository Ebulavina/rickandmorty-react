import { Card, Space, Spin, Alert, Pagination, PaginationProps } from "antd"
import { useEffect } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"

export const CharactersList: React.FC = () => {
    const { loading, error, characters, page } = useTypedSelector(state => state.characters)
    const {fetchCharacters, SetCharactersPage} = useActions()

    const pages = [1, 2, 3, 4]

    useEffect(() => {
        fetchCharacters(page)
    }, [page])

    const onPaginationChange: PaginationProps['onChange'] = (page) => {
        SetCharactersPage(page)
    }

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

            <Pagination defaultCurrent={page} total={pages.length*10} onChange={onPaginationChange} />
        </div>
    )
}