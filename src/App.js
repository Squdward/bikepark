import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/pages/main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
