import styled from "styled-components";

const FlexFeaturedSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem
`

const FeaturedSectionSpace = styled.section`
    width: 78%;
    text-align: center;
    display: grid;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 30px;
    margin-bottom: 1.5rem;
`

const IMGBenefits = styled.img`
    width: 60%;
    height: 60%
`

const Benefits = styled.p`
    margin-bottom: 2rem;
    margin-top: 0;
    font-size: clamp(1rem, 3vw, 1.5rem);
    font-family: ${({ theme }) => theme.fonts.titles};
`

const BenefitsBold = styled.p`
    font-family: ${({ theme }) => theme.fonts.labeltitles};
    color: ${({ theme }) => theme.colors.red};
`

export {
    FlexFeaturedSection,
    FeaturedSectionSpace,
    IMGBenefits,
    Benefits,
    BenefitsBold
}