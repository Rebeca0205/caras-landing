import styled from "styled-components";

const AppHeader = styled.header`
    width:100%;
    padding: 20px 50px;
    background-color: ${({ theme }) => theme.colors.darker_red};
    text-align: center;
    box-sizing: border-box;
`
const HeaderIMG = styled.img`
    margin: auto;
    width: 10%;
`

const HeaderH1 = styled.h1`
    color: ${({ theme }) => theme.colors.white};
`

const HeaderH2 = styled.h2`
    color: ${({ theme }) => theme.colors.white};
`

export{
    AppHeader, HeaderIMG, HeaderH1, HeaderH2
}