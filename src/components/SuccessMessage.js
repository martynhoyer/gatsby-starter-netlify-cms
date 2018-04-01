import styled from "styled-components";

const SuccessMessage = styled.div`
  margin-top: 1em;
  padding: 1em;
  border: 2px solid green;
  background-color: #fff;
  color: green;

  &:focus {
    outline: none;
    box-shadow: 0 0 2em 0 green;
  }
`;

export default SuccessMessage;
