import { styled } from "styled-components";

export const MainContainer = styled.main`
  max-width: 800px;
  width: 100%;
  padding-top: 30px;
  color: #373b53;

  @media (max-width: 768px) {
    max-width: 600px;
  }

  @media (max-width: 576px) {
    max-width: 400px;
    padding: 20px; 
  }
`;

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px; 
`;
