import { render, screen } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import Theme from "../theme";
import FeaturedSection from '../components/featuredSection';

describe("FeaturedSection Component", () =>{
    it("should render the feature section correctly", () => {
        render(
            <ThemeProvider theme={Theme}>
                <FeaturedSection/>
            </ThemeProvider>
        );

        const FeaturedTitle = screen.getByText("Por qué debería suscribirme?");
        expect(FeaturedTitle).toBeInTheDocument();




        const FeaturedIMG1 = screen.getByAltText("Periodico con noticias");
        expect(FeaturedIMG1).toBeInTheDocument();

        const FeaturedSubtitles1 = screen.getByText("Sé el primero en enterarte:");
        expect(FeaturedSubtitles1).toBeInTheDocument();




        const FeaturedIMG2 = screen.getByAltText("Carta de Spam con un simbolo de prohibido");
        expect(FeaturedIMG2).toBeInTheDocument();

        const FeaturedSubtitles2 = screen.getByText("Sin spam, solo valor:");
        expect(FeaturedSubtitles2).toBeInTheDocument();



        

        const FeaturedIMG3= screen.getByAltText("Mano ofreciendo ofertas");
        expect(FeaturedIMG3).toBeInTheDocument();

        const FeaturedSubtitles3 = screen.getByText("Ofertas y descuentos especiales:");
        expect(FeaturedSubtitles3).toBeInTheDocument();
    });
})