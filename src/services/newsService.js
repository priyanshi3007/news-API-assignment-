// src/services/newsService.js
import axios from 'axios';

const API_KEY = '1a6961adad014aaea28de32824cc6d59';  // Replace with your NewsAPI key
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category = '', page = 1) => {
  const url = `${BASE_URL}/top-headlines?country=us&category=${category}&page=${page}&pageSize=10&apiKey=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
