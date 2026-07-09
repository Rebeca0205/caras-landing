import PrimerComentario from '../../assets/img/hombreFeliz.png';
import SegundoComentario from '../../assets/img/mujerFeliz.jpeg';
import TercerComentario from '../../assets/img/OtraMujerFeliz.jpg';
import { CommentalistsNames, Comments, FlexTestimonials, GridTestimonials, IMGcontainer, IMGpeople, TestimonialsConatiner } from './styles';

const Testimonials = () => {
    return(
        <FlexTestimonials aria-labelledby="Sección-de-Comentarios-de-Suscriptores">
            <h2 id='Sección-de-Comentarios-de-Suscriptores'>Comentarios de nuestros suscriptores</h2>
            <GridTestimonials>
                <TestimonialsConatiner>
                    <IMGcontainer>
                        <IMGpeople src={PrimerComentario} alt="Foto de perfil de Martín Díaz"/>
                    </IMGcontainer>
                    <CommentalistsNames>Martín Díaz</CommentalistsNames>
                    <Comments>¡La mejor newsletter! Sin ruido, sin relleno, solo contenido realmente útil. 
                    Gracias, CARAS!</Comments>
                </TestimonialsConatiner>

                <TestimonialsConatiner>
                    <IMGcontainer>
                        <IMGpeople src={SegundoComentario} alt="Foto de perfil de Camila Herrera"/>
                    </IMGcontainer>
                    <CommentalistsNames>Camila Herrera</CommentalistsNames>
                    <Comments>No hay mejor manera de empezar la semana que con CARAS en mi bandeja de entrada. 
                    Es informativa, inspiradora y siempre aporta valor.</Comments>
                </TestimonialsConatiner>
                
                <TestimonialsConatiner>
                    <IMGcontainer>
                        <IMGpeople src={TercerComentario} alt="Foto de perfil de Julia Rojas"/>
                    </IMGcontainer>
                    <CommentalistsNames>Julia Rojas</CommentalistsNames>
                    <Comments>Me suscribí sin muchas expectativas, pero ahora espero cada número con ansias. 
                    CARAS siempre tiene contenido de calidad y bien seleccionado.</Comments>
                </TestimonialsConatiner>
            </GridTestimonials>
        </FlexTestimonials>
    )
}

export default Testimonials;