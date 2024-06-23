// Favorites.js
import React from 'react';
import ArticleCard from './ArticleCard';
import styled from 'styled-components';

const FavoritesContainer = styled.div`
  padding: 20px;
`;

const FavoritesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <FavoritesContainer>
      <h2>Your Favorite Articles</h2>
      {favorites.length === 0 ? (
        <p>No favorite articles saved yet.</p>
      ) : (
        <FavoritesGrid>
          {favorites.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </FavoritesGrid>
      )}
    </FavoritesContainer>
  );
};

export default Favorites;
