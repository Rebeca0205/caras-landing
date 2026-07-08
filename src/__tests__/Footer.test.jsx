import { render, screen } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import Theme from "../theme";
import Footer from '../components/footer';

describe("Footer Component", () =>{
    it("should render the footer correctly", () => {
        render(
            <ThemeProvider theme={Theme}>
                <Footer/>
            </ThemeProvider>
        );

        const FooterLogo = screen.getByAltText("Logo");
        expect(FooterLogo).toBeInTheDocument();

        const FooterText = screen.getByText(/Acerca de nosotros/i);
        expect(FooterText).toBeInTheDocument();

        const FacebookLogo = screen.getByAltText("facebook logo");
        expect(FacebookLogo).toBeInTheDocument();

        const XLogo = screen.getByAltText("x logo");
        expect(XLogo).toBeInTheDocument();

        const InstaLogo = screen.getByAltText("instagram logo");
        expect(InstaLogo).toBeInTheDocument();
    });
})