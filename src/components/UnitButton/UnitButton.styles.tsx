import styled from 'styled-components'

const Button = styled.button`
    display: flex;
    gap: 8px;
    padding: 4px 8px;
    border-radius: 2px;
    border: none;
    outline: none;
    font-weight: 600;
    cursor: pointer;
    font-size: 12px;
    line-height: 16px;
    background: ${({isActive, theme}) => isActive ? theme.colors.primary : theme.colors.primaryShade2};
    color: white;
`

export {
    Button
}