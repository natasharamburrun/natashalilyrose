import { BrowserRouter as ReactRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import Navbar from './components/NavBar'
import ProductPage  from './components/ProductPage'
import reportWebVitals from './reportWebVitals';

import './styles/styles.scss';

function App () {
  return (
    <ReactRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<ProductPage />} />
      </Routes>
    </ReactRouter>
  );
}

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();