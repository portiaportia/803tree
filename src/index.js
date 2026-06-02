import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Article from "./pages/Article";

const basename = "/803tree";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Layout />}>
            <Route index element={<Home />} />
            <Route path="education" element={<Education />} />
            <Route
              path="education/:slug"
              element={<Article />}
            />
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
