import styled from "styled-components";
import NewsPaperBanner from '../../assets/img/fondo-periodico-viejo_705652-166.avif';

const Banner = styled.div`
    width: 100%;
    padding: 85px 0;
    background-image: url(${NewsPaperBanner});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(120, 120, 120, 0.5);
    background-blend-mode: multiply;
    margin-bottom: 1rem;
`
const FormWithStyles = styled.form`
    width: 40%;
    margin: 0 auto;

    padding: 80px 10px;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px solid ${({ theme }) => theme.colors.clear_gray};
    background-color: ${({ theme }) => theme.colors.white};
`

const LabelForm = styled.label`
    font-family: ${({ theme }) => theme.fonts.labeltitles};
    box-sizing: border-box;
    margin-bottom: 2rem;
    font-size: clamp(0.5rem, 3vw, 2rem);
    color: ${({ theme }) => theme.colors.red}
`

const InputForm = styled.input`
    font-family: ${({ theme }) => theme.fonts.titles};
    font-size: clamp(1rem, 3vw, 1.3rem);
    margin-bottom: 1rem;
    width: 50%;
    padding: 5px 10px;
`

const ButtonForm = styled.button`
    border: none;
    font-family: ${({ theme }) => theme.fonts.titles};
    cursor: pointer;
    font-size: clamp(1rem, 3vw, 1.3rem);
    border-radius: 10px;
    padding: 10px 20px;
    margin-top: 20px;
`

const SuccessMessage = styled.p`
    color: green;
    margin-bottom: 0;
    font-size: clamp(1rem, 3vw, 1.5rem);
`

const ErrorMessage = styled.p`
    color: red;
    margin-bottom: 0;
    font-size: clamp(1rem, 3vw, 1.5rem);
`

export{
    Banner, 
    FormWithStyles, 
    LabelForm, 
    InputForm, 
    ButtonForm,
    SuccessMessage,
    ErrorMessage
}