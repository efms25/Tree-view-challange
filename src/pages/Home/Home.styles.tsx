import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme.colors.borderCard};
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
  margin: 16px;
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.colors.borderCard};
  background: ${({ theme }) => theme.colors.background};
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

`

export { Container, BodyContainer, BreadcrumbContainer };
