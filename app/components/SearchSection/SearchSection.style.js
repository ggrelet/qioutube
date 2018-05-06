import styled from 'styled-components';

import SearchSection from './SearchSection.component';

const StyledSearchSection = styled(SearchSection)`
  padding: 50px;
  
  input {
    height: 40px;
    width: 600px;
    font-size: 28px;
  }
  

  button {
    margin-left: 10px;
  }
`;
//   input {
//     border: 1px solid black;
//   }
// `;

export default StyledSearchSection;
