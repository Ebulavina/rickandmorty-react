import { Layout } from 'antd';
import { CharactersList } from '../components/CharactersList';

const { Content } = Layout;

export function CharactersPage() {
    return (
        <Layout>
            <Content style={{ padding: '50px' }}>
                <CharactersList />
            </Content>
        </Layout>
    )    
}