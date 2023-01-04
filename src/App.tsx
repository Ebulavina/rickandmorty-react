import React from 'react';
import { Layout } from 'antd';
import { CharactersList } from './components/CharactersList'

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content style={{ padding: '50px' }}>
        <CharactersList />
      </Content>
    </Layout>
  );
}

export default App;
