import styled from "styled-components";

const AppFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.darker_red};
    color: ${({ theme }) => theme.colors.white};

    padding: 20px 50px;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const IMGLogoContainer = styled.div`
    width: 12rem;
`

const IMGLogo = styled.img`
    width: 100%;
    height: 100%;
`

const SocialMediaContainer = styled.div`
    width: 7rem;
    display: flex;
    justify-content: space-between;
`

export {
    AppFooter,
    IMGLogoContainer,
    IMGLogo,
    SocialMediaContainer
}