import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import Education from "./pages/Education";

const basename = "/803tree";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Layout />}>
            <Route index element={<Home />} />
            <Route path="/education" element={<Education />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
