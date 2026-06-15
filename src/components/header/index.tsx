import whiteLogo from '../../assets/img/Logo 2.png';
import { AppHeader, HeaderH1, HeaderH2, HeaderIMG } from './styles';

const Header = ({}) => {
    return (
        <AppHeader>
            <HeaderIMG src={whiteLogo} alt="Logo" />
            <HeaderH1>¡Suscríbete a nuestro newsletter!</HeaderH1>
            <HeaderH2>Recibe en tu correo las últimas novedades, consejos exclusivos 
            y contenido especial antes que nadie. ¡Únete ahora!</HeaderH2>
        </AppHeader>
    )
}

export default Header;