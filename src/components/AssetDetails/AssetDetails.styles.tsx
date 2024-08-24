import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  position: relative;
  border: solid 1px ${({ theme }: any) => theme.neutralCollors.gray200};
  border-radius: 2px;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  border-bottom: solid 1px ${({ theme }: any) => theme.neutralCollors.gray200};
  padding: 12px 16px;
  gap: 8px;
  height: 56px;
  width: 100%;
  .asset-title {
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
  }
`;
const Icon = styled.div`
  .injected-svg {
    fill: ${({ theme, status }: any) =>
      status === "operating" ? theme.colors.success : theme.colors.danger};
    path, circle {
      fill: ${({ theme, status }: any) =>
        status === "operating" ? theme.colors.success : theme.colors.danger};
    }
  }
`;
const Content = styled.div`
    div {
        gap: 24px;
        padding: 24px;
    }
`

export { Container, Header, Icon, Content };
