import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/pages/main';
import Order from './components/pages/order';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/order" element={<Order />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
