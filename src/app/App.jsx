import { BrowserRouter } from 'react-router';
import AppRouter from '../router/Router';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
