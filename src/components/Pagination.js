import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;

const Pagination = ({ currentPage, setPage }) => {
  const handlePrev = () => setPage((prevPage) => Math.max(prevPage - 1, 1));
  const handleNext = () => setPage((prevPage) => prevPage + 1);

  return (
    <PaginationContainer>
      <Button onClick={handlePrev} disabled={currentPage === 1}>
        Previous
      </Button>
      <span>Page {currentPage}</span>
      <Button onClick={handleNext}>Next</Button>
    </PaginationContainer>
  );
};

export default Pagination;
