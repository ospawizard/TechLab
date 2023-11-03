import styled from "styled-components";
import { backgroundColors, colors } from "../../styledConstants";

export const StyledExpectation = styled.div`
  width: 100%;
  padding: 180px 0 120px;
  /* padding: 180px 251px 120px 251px; - паддинги из макета */ 
  border-radius: 0px 0px 80px 80px;
  background: ${backgroundColors.black};
`;

export const StyledExpectationText = styled.p`
   max-width: 413px;
    margin: 30px 20px auto auto;
    padding-right: 30px;
    color: ${colors.white};
    font-family: Raleway;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 34px;
`

export const StyledH2 = styled.h2`
  font-family: Raleway;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 50px;
  background: ${colors.gradientG3};
  -webkit-background-clip: text;
  color: transparent;
`;
