import { Footer, Group } from "@mantine/core";
import { styled } from "styled-components";

interface StyledFooterProps {
  height: number;
}

export const StyledFooter = styled(Footer)<StyledFooterProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #77a2ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: ${(props) => props.height}px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${(props) => props.height + 80}px !important;

    & > div {
      margin: 10px 0;
    }
  }
`;

export const StyledGroup = styled(Group)`
  align-items: center;
  gap: 0rem;
  flex-direction: column;
  padding-bottom: 5px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    position: relative;
    left: unset;
    transform: none;
  }
`;
