import './App.css';
import Main from './components/main'
import Header from './components/header';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store/store';
import Details from './components/details/index'

function App() {
  const { store, persistor } = configureStore();

  return (
    <div className="App">
       <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
