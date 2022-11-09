import propTypes from 'prop-types';
import { Input, FormButton } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <Input type="text" name="query" />
      <FormButton type="submit">Search</FormButton>
    </form>
  );
};

SearchBox.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
