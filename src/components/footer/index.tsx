import whiteLogo from '../../assets/img/Logo 2.png';
import facebookLogo from '../../assets/img/facebook-new.png';
import xLogo from '../../assets/img/x-social-media-white-icon.png';
import instagramLogo from '../../assets/img/instagram-new.png';
import { AppFooter, IMGLogo, IMGLogoContainer, SocialMediaContainer } from './styles';

const Footer = ({}) => {
    return (
        <AppFooter>
            <IMGLogoContainer>
                <IMGLogo src={whiteLogo} alt="Logo" />
            </IMGLogoContainer>
            <a>Acerca de nosotros</a>
            <a>Política de Privacidad</a>
            <a>Términos y Condiciones</a>
            <SocialMediaContainer>
                <a href="https://www.facebook.com/Revista.Caras">
                    <IMGLogo src={facebookLogo} alt="facebook logo" />
                </a>
                <a href="https://twitter.com/carasmexico">
                    <IMGLogo src={xLogo} alt="x logo" />
                </a>
                <a href="https://www.instagram.com/carasmexico/">
                    <IMGLogo src={instagramLogo} alt="instagram logo" />
                </a>
            </SocialMediaContainer>
        </AppFooter>
    )
}

export default Footer;
