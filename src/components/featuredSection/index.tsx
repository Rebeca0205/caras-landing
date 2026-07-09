import news from '../../assets/img/news.png';
import spam from '../../assets/img/noSpam.png';
import ofertas from '../../assets/img/oferta.png';
import { FeaturedSectionSpace, IMGBenefits, Benefits, FlexFeaturedSection, BenefitsBold } from './styles';

const FeaturedSection = () => {
    return(
        <FlexFeaturedSection aria-labelledby="Sección-de-Ventajas-de-Suscripción">
            <h2 id='Sección-de-Ventajas-de-Suscripción'>Por qué debería suscribirme?</h2>
            <FeaturedSectionSpace>
                <article>
                    <Benefits> <BenefitsBold>Sé el primero en enterarte:</BenefitsBold> Recibe novedades, tendencias y noticias antes que los demás</Benefits>
                    <IMGBenefits src={news} alt="Periodico con noticias"/>            
                </article>
                <article>
                    <Benefits> <BenefitsBold>Sin spam, solo valor:</BenefitsBold> Te enviamos contenido útil y relevante, nada de correos innecesarios.</Benefits>
                    <IMGBenefits src={spam} alt="Carta de Spam con un simbolo de prohibido"/> 
                </article>
                <article>
                    <Benefits> <BenefitsBold>Ofertas y descuentos especiales: </BenefitsBold> Disfruta de promociones y beneficios solo para suscriptores.</Benefits>
                    <IMGBenefits src={ofertas} alt="Mano ofreciendo ofertas"/> 
                </article>
            </FeaturedSectionSpace>
        </FlexFeaturedSection>
    )
}

export default FeaturedSection;