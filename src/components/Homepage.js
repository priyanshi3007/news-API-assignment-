import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../services/newsService';
import ArticleCard from './ArticleCard';
import Pagination from './Pagination';
import CategoryFilter from './CategoryFilter';
import styled from 'styled-components';

const HomepageContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const FavoritesButton = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;
  &:hover {
    background-color: #0056b3;
  }
`;

const Homepage = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        const data = await fetchArticles(category, page);
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    getArticles();
  }, [category, page]);

  return (
    <HomepageContainer>
      <CategoryFilter setCategory={setCategory} />
      <FavoritesButton to="/favorites">View Favorites</FavoritesButton>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ArticlesGrid>
          {articles.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
        </ArticlesGrid>
      )}
      <Pagination currentPage={page} setPage={setPage} />
    </HomepageContainer>
  );
};

export default Homepage;
