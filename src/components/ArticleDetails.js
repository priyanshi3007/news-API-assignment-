import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Details = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`;

const ReadMore = styled.a`
  display: inline-block;
  margin-top: 20px;
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

const ArticleDetails = () => {
  const { state: article } = useLocation();

  return (
    <Details>
      <Title>{article.title}</Title>
      <Image src={article.urlToImage} alt={article.title} />
      <Content>{article.content}</Content>
      <ReadMore href={article.url} target="_blank" rel="noopener noreferrer">
        Read full article
      </ReadMore>
    </Details>
  );
};

export default ArticleDetails;
