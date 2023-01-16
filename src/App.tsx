import { CharactersPage } from './pages/CharactersPage'
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={ <CharactersPage /> } />
      </Routes>
    </Provider>
  );
}

export default App;
