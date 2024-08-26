import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 4px;
  padding: 10px 5px;
`;
const Icon = styled.div`
  .injected-svg {
    fill: ${({ theme, status }: any) =>
      status === "operating" ? theme.colors.success : theme.colors.danger};
    path,
    circle {
      fill: ${({ theme, status }: any) =>
        status === "operating" ? theme.colors.success : theme.colors.danger};
    }
  }
`;
const TitleBox = styled.div`
    display: flex;
    gap: 4px;
    padding-left: 2px;
    align-items: center;
    background: ${({isActive, theme}: any) => isActive ? theme.colors.primary : 'transparent'};
    color: ${({isActive, theme}: any) => isActive ? "#FFF" : theme.colors.text};
    width: 100%;
    svg path {
        fill: ${({ theme, isActive }: any) => isActive ? "#FFF" : theme.colors.primary}
    }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
export { Container, Icon, TitleBox, ArrowButton };
