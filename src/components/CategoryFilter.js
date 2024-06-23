import React from 'react';
import styled from 'styled-components';

const Filter = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
`;

const categories = [
  { label: 'All', value: '' },
  { label: 'Business', value: 'business' },
  { label: 'Technology', value: 'technology' },
  { label: 'Entertainment', value: 'entertainment' },
];

const CategoryFilter = ({ setCategory }) => {
  return (
    <Filter>
      <Select onChange={(e) => setCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </Select>
    </Filter>
  );
};

export default CategoryFilter;
