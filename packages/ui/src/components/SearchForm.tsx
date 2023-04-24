import { StyledLabel } from './styled/StyledLabel';
import { StyledInput } from './styled/StyledInput';

export const SearchForm = () => {
  return (
    <StyledLabel>
      <StyledInput type="search" placeholder="Search..." name="searchTerm" />
    </StyledLabel>
  );
};

export default SearchForm;
