import { Footer } from "@mantine/core";
import { styled } from "styled-components";

export const StyledFooter = styled(Footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
`;
