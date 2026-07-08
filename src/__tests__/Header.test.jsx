import React from "react";
import { describe, expect } from "vitest";
import Header from '../components/header'
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from '../theme'

describe("Header Component", () => {
    it("should render the header correctly", () =>{
        render(
            <ThemeProvider theme={Theme}>
                <Header />
            </ThemeProvider>        
        );

        const HeaderTitle = screen.getByText(/¡Suscríbete a nuestro newsletter!/i);
        expect(HeaderTitle).toBeInTheDocument();

        const HeaderLogo = screen.getByAltText(/Logo/i);
        expect(HeaderLogo).toBeInTheDocument();

        const HeaderSubtitle = screen.getByText(/Recibe en tu correo las últimas novedades,/i);
        expect(HeaderSubtitle).toBeInTheDocument();
    })
})