import { Layout } from 'antd';
import { CharactersList } from '../components/CharactersList';

const { Content } = Layout;

export function CharactersPage() {
    return (
        <Layout style={{ height: '100vh' }}>
            <Content style={{ padding: '50px' }}>
                <CharactersList />
            </Content>
        </Layout>
    )    
}