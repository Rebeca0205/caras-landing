import news from '../../assets/img/news.png';
import spam from '../../assets/img/noSpam.png';
import ofertas from '../../assets/img/oferta.png';
import { FeaturedSectionSpace, IMGBenefits, Benefits, FlexFeaturedSection, BenefitsBold } from './styles';

const FeaturedSection = () => {
    return(
        <FlexFeaturedSection>
            <h3>Por qué debería suscribirme?</h3>
            <FeaturedSectionSpace>
                <article>
                    <Benefits> <BenefitsBold>Sé el primero en enterarte:</BenefitsBold> Recibe novedades, tendencias y noticias antes que los demás</Benefits>
                    <IMGBenefits src={news} alt="Noticias"/>            
                </article>
                <article>
                    <Benefits> <BenefitsBold>Sin spam, solo valor:</BenefitsBold> Te enviamos contenido útil y relevante, nada de correos innecesarios.</Benefits>
                    <IMGBenefits src={spam} alt="Sin Spam"/> 
                </article>
                <article>
                    <Benefits> <BenefitsBold>Ofertas y descuentos especiales: </BenefitsBold> Disfruta de promociones y beneficios solo para suscriptores.</Benefits>
                    <IMGBenefits src={ofertas} alt="Ofertas"/> 
                </article>
            </FeaturedSectionSpace>
        </FlexFeaturedSection>
    )
}

export default FeaturedSection;