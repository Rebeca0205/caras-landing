import { render, screen } from "@testing-library/react";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { describe, expect } from "vitest";
import Theme from "../theme";
import SuscriptionForm from '../components/suscriptionForm'
import userEvent from "@testing-library/user-event";

describe("SuscriptionForm component", () => {
    it("should render the login form correctly", () => {
        render(
            <ThemeProvider theme={Theme}>
                <SuscriptionForm />
            </ThemeProvider>
        );

        const FormTitle = screen.getByText(/FORMULARIO DE SUSCRIPCIÓN/i);
        expect(FormTitle).toBeInTheDocument();
    })

    it("should appear a message when the user doesn't write a correct mail", async () => {
        const user = userEvent.setup();

        render(
            <ThemeProvider theme={Theme}>
                <SuscriptionForm />
            </ThemeProvider>
        );

        const input = screen.getAllByRole("textbox");
        await user.type(input[0], "Rebeca Davila");
        await user.type(input[1], "rebedavila@test");

        const button = screen.getByRole("button", {name: /Enviar/i});
        await user.click(button);

        expect(await screen.findByText(/Por favor ingresa un correo válido/i)).toBeInTheDocument()

    });

    it("should appear a message when the user doesn't write anything on the inputs", async () => {
        const user = userEvent.setup();

        render(
            <ThemeProvider theme={Theme}>
                <SuscriptionForm />
            </ThemeProvider>
        );

        const button = screen.getByRole("button", {name: /Enviar/i});
        await user.click(button);

        expect(await screen.findByText(/Por favor completa todos los campos/i)).toBeInTheDocument()

    });

    it("should appear a message when the user writes all the data correctly", async () => {
        const user = userEvent.setup();

        render(
            <ThemeProvider theme={Theme}>
                <SuscriptionForm />
            </ThemeProvider>
        );

        const input = screen.getAllByRole("textbox");
        await user.type(input[0], "Rebeca Davila");
        await user.type(input[1], "rebedavila@test.mx");

        const button = screen.getByRole("button", {name: /Enviar/i});
        await user.click(button);

        expect(await screen.findByText(/¡Tu información se ha enviado correctamente!/i)).toBeInTheDocument()

    });
})