import styled from "styled-components";

export const SquareContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px ${props => props.borderStyles ? props.borderStyles : "solid"} black;
    width: 200px;
    height: 200px;
`
export const SquareLink = styled.a`
    text-decoration: none;
    font-size: 18px;
    color: black;
`




