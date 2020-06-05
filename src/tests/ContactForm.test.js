import React from "react";
import { screen, fireEvent, render, waitFor } from "@testing-library/react";
import ContactForm from "../components/ContactForm";
import { act } from "react-dom/test-utils";

test('First name', async () => {
    await act(async () => {
        render(<ContactForm />);

        const firstName = screen.getByLabelText(/first name/i);
        const lastName = screen.getByLabelText(/last name/i);
        const email = screen.getByLabelText(/email/i);
        const message = screen.getByLabelText(/message/i);
        const submitButton = screen.getByText(/submit/i);

        fireEvent.change(firstName, {target: {value: "Adam"}});
        fireEvent.change(lastName, {target: {value: "Savage"}});
        fireEvent.change(email, {target: {value: "example@example.com"}});
        fireEvent.change(message, {target: {value: "Hello, world"}});
        fireEvent.click(submitButton);

        await waitFor(() => {
            const response = screen.getByText(/firstName/);
            expect(response).toBeInTheDocument();
        });
    });
});