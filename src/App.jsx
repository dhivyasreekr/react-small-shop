import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/frontend/ProductList'
import AppLayout from './components/frontend/layout/AppLayout';

const App = () => {
  return (

    <Router>

      <AppLayout>

        <Routes>
          <Route path="/" element={<ProductList />} />
          {/* Add more routes here */}
        </Routes>

      </AppLayout>
      
    </Router>
  );
};

export default App;