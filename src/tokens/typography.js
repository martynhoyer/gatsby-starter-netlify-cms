import { css } from "styled-components";

export const headingLevel1 = css`
  line-height: 1.1;
`;

export const headingLevel2 = css`
  font-size: 1.5em;
  line-height: 1.2;
`;

export const headingLevel3 = css`
  font-size: 1.3em;
  line-height: 1.3;
  color: ${props => props.theme.palette.purple};
`;
