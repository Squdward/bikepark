import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { GET_PERSONAL } from './redux/sagas/root';
import { authUser } from './redux/slices/User';

const Main = React.lazy(() => import("./components/pages/main"))
const Order = React.lazy(() => import("./components/pages/order"))
const Me = React.lazy(() => import("./components/pages/me"))

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem('token')

    if(token) {
      dispatch(authUser())
      dispatch({ type: GET_PERSONAL, payload: 1 })
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
