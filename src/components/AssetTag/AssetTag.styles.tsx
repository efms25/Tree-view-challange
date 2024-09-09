import styled from "styled-components";

const Box = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  gap: 6px;
  background: ${({ isActive, theme }: any) =>
    isActive ? theme.colors.primary : theme.colors.background};
  color: ${({ isActive, theme }: any) =>
    isActive ? "#FFF" : theme.neutralCollors.gray600};
  border: solid 1px
    ${({ isActive, theme }: any) =>
      isActive ? theme.colors.primary : theme.neutralCollors.gray200};
  border-radius: 3px;
  padding: 6px 16px 6px 14px;
`;

const Text = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  text-align: center;
`;

const Icon = styled.div`
  .injected-svg {
    fill: ${({ theme, isActive }: any) => (isActive ? "#FFF" : theme.colors.primary)};
    path {
      fill: ${({ theme, isActive }: any) => (isActive ? "#FFF" : theme.colors.primary)}
    }
  }
`;

export { Box, Text, Icon };
