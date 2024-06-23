import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Title = styled.h2`
  font-size: 18px;
  padding: 10px;
  margin: 0;
  color: #333;
`;

const Description = styled.p`
  padding: 0 10px 10px;
  color: #666;
`;

const FavoriteButton = styled.button`
  padding: 8px 16px;
  margin: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #0056b3;
  }
`;

const ArticleCard = ({ article }) => {
  const handleAddToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some((fav) => fav.title === article.title)) {
      favorites.push(article);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('Article added to favorites!');
    } else {
      alert('Article already in favorites!');
    }
  };

  return (
    <Card>
      <Link to="/article" state={article}>
        <Image src={article.urlToImage} alt={article.title} />
        <Title>{article.title}</Title>
        <Description>{article.description}</Description>
      </Link>
      <FavoriteButton onClick={handleAddToFavorites}>Add to Favorites</FavoriteButton>
    </Card>
  );
};

export default ArticleCard;
