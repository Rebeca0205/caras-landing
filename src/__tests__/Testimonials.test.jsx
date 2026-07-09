import { render, screen } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import Theme from "../theme";
import Testimonials from '../components/testimonials';

describe("Testimonials Component", () =>{
    it("should render the testimonials correctly", () => {
        render(
            <ThemeProvider theme={Theme}>
                <Testimonials/>
            </ThemeProvider>
        );

        const TestimonialsTitle = screen.getByText("Comentarios de nuestros suscriptores");
        expect(TestimonialsTitle).toBeInTheDocument();




        const TestimonialsIMG1 = screen.getByAltText("Foto de perfil de Martín Díaz");
        expect(TestimonialsIMG1).toBeInTheDocument();

        const TestimonialsComentalists1 = screen.getByText("Martín Díaz");
        expect(TestimonialsComentalists1).toBeInTheDocument();

        const TestimonialsComments1 = screen.getByText(/¡La mejor newsletter!/i);
        expect(TestimonialsComments1).toBeInTheDocument();




        const TestimonialsIMG2 = screen.getByAltText("Foto de perfil de Camila Herrera");
        expect(TestimonialsIMG2).toBeInTheDocument();

        const TestimonialsComentalists2 = screen.getByText("Camila Herrera");
        expect(TestimonialsComentalists2).toBeInTheDocument();

        const TestimonialsComments2 = screen.getByText(/No hay mejor manera de empezar/i);
        expect(TestimonialsComments2).toBeInTheDocument();


        

        const TestimonialsIMG3= screen.getByAltText("Foto de perfil de Julia Rojas");
        expect(TestimonialsIMG3).toBeInTheDocument();

        const TestimonialsComentalists3 = screen.getByText("Julia Rojas");
        expect(TestimonialsComentalists3).toBeInTheDocument();

        const TestimonialsComments3 = screen.getByText(/Me suscribí sin muchas expectativas,/i);
        expect(TestimonialsComments3).toBeInTheDocument();
    });
})