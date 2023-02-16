import { Card, Space, Spin, Alert, Pagination, PaginationProps } from "antd"
import { useEffect } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"

export const CharactersList: React.FC = () => {
    const { loading, error, characters, page, count } = useTypedSelector(state => state.characters)
    const {fetchCharacters, setCharactersPage} = useActions()

    const pageSize = 20

    useEffect(() => {
        fetchCharacters(page)
    }, [page])

    const onPaginationChange: PaginationProps['onChange'] = (page) => {
        setCharactersPage(page)
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

            <Pagination defaultCurrent={page} total={count} pageSize={pageSize} pageSizeOptions={[pageSize]} onChange={onPaginationChange} />
        </div>
    )
}