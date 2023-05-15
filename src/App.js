import Main from './components/cards';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Main />
        </div>
      </Provider>
    </>
  );
}

export default App;
