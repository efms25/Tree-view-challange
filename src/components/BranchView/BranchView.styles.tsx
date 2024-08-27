import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction:  column;
`;
const ParentContaier = styled.div`
  display: flex;
  padding: 3px;
  cursor: pointer;
`
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
    &:hover {
    background: rgba(32,32,32,0.1)
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

const ChildrenContainer = styled.div`
  display: flex;
  span.marker-line {
    border-right: solid 1px ${({theme}:styled) => theme.neutralCollors.gray200};
    width: 1px;
    height: calc(auto - 20px);
    margin: 0 10px 0 12px;
    flex: 0 1 auto;
  }
`
export { Container, Icon, TitleBox, ArrowButton, ChildrenContainer, ParentContaier };
