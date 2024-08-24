import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }: any) => theme.colors.borderCard};
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;
const BodyContainer = styled.div`
  position: relative;
  display: block;
  flex: 1 1 auto;
  gap: 12px;
  margin: 16px;
  border-radius: 4px;
  border: solid 1px ${({ theme }: any) => theme.colors.borderCard};
  background: ${({ theme }: any) => theme.colors.background};
  padding: 16px;

`;
const BreadcrumbContainer = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;

    .strong-ref-page-text {
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
        padding-right: 5px;
    }

    .ref-page-text {
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: ${({theme}) => theme.neutralCollors.gray600}
    }

    div {
      display: flex;
      gap: 8px;
      align-items: center;
    }
`

export { Container, BodyContainer, BreadcrumbContainer };
