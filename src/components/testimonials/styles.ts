import styled from "styled-components";

const FlexTestimonials = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
`

const GridTestimonials = styled.section`
    width: 78%;
    text-align: center;
    display: grid;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 30px;
    margin-bottom: 1.5rem;
`
const TestimonialsConatiner = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 20px;
    border: 1px solid ${({ theme }) => theme.colors.clear_gray};
`

const IMGcontainer = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 10px
`

const IMGpeople = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const CommentalistsNames = styled.p`
    font-family: ${({ theme }) => theme.fonts.labeltitles};
    font-size: clamp(1rem, 3vw, 1.5rem);
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.red};
`

const Comments = styled.p`
    font-family: ${({ theme }) => theme.fonts.titles};
    font-size: clamp(1rem, 3vw, 1.5rem);
`

export {
    FlexTestimonials,
    GridTestimonials,
    TestimonialsConatiner,
    IMGcontainer,
    IMGpeople,
    CommentalistsNames,
    Comments
}