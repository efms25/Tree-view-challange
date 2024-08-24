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
    path,
    circle {
      fill: ${({ theme, status }: any) =>
        status === "operating" ? theme.colors.success : theme.colors.danger};
    }
  }
`;
const Content = styled.div`
    padding: 24px;
  > div {
    gap: 24px;
    display: flex;
    align-items: center;
  }
  .divider {
    margin: 20px 0;
    border: solid 1px ${({ theme }: any) => theme.neutralCollors.gray150};
    width: 100%;
    display: block;
  }
`;

const DropdownArea = styled.div`
  width: 336px;
  height: 226px;
  background: ${({ theme }: any) => theme.colors.primaryShade5};
  border: dashed 1px ${({ theme }: any) => theme.colors.primaryShade4};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    color: ${({ theme }: any) => theme.colors.primaryShade4};
    text-align: center;
  }
`;
const RightInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 2;
  > div {
    display: flex;
    flex-direction: column;
    padding: 0;
    span,
    strong {
      font-size: 16px;
      line-height: 24px;
    }
    span {
      color: ${({ theme }: any) => theme.neutralCollors.gray500};
    }
    strong {
      font-weight: 600;
    }
  }
`;
const BottomInfoContainer = styled.div`
  display: flex;
  width: 100%;
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    span,
    strong {
      font-size: 16px;
      line-height: 24px;
    }
    span {
      color: ${({ theme }: any) => theme.neutralCollors.gray500};
    }
    strong {
      font-weight: 600;
    }
  }
`;
export {
  Container,
  Header,
  Icon,
  Content,
  DropdownArea,
  RightInfoContainer,
  BottomInfoContainer,
};
