import { CharactersPage } from './pages/CharactersPage'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <CharactersPage /> } />
    </Routes>
  );
}

export default App;
