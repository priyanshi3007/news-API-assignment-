import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ArticleDetails from './components/ArticleDetails';
import Favorites from './components/Favorites';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article" element={<ArticleDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
