import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/pages/main';
import Me from './components/pages/me';
import Order from './components/pages/order';
import { authUser } from './redux/slices/User';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem('token')

    if(token) {
      dispatch(authUser())
    }
  },[])

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/order" element={<Order />} />
            <Route path="/me" element={<Me/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
