import propTypes from 'prop-types';
import { useState } from 'react';
import { Input, FormButton } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
   const [query, setQuery] = useState('');

   const onHandleChange = evt => {
     setQuery(evt.currentTarget.value);
   };

   const onHandleSubmit = evt => {
     evt.preventDefault();

     const normolizedQuery = query.toLowerCase().trim();

     if (!normolizedQuery) return;

      onSubmit(normolizedQuery);
   };


  return (
    <form onSubmit={onHandleSubmit} autoComplete="off">
      <Input type="text" name="query" value={query} onChange={onHandleChange} />
      <FormButton type="submit">Search</FormButton>
    </form>
  );
};

SearchBox.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
