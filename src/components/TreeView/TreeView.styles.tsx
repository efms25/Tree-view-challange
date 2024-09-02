import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    border: solid 1px ${({theme}:any) => theme.neutralCollors.gray200};
    border-radius: 2px;
`

export {
    Container
}