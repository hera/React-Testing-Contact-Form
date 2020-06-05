import React from "react";
import { screen, fireEvent, render } from "@testing-library/react";
import ContactForm from "../components/ContactForm";
import { act } from "react-dom/test-utils";

test('First name', async () => {
    await act(async () => {
        const wrapper = render(<ContactForm />);

        const firstName = wrapper.getByLabelText(/first name/i);
        const lastName = wrapper.getByLabelText(/last name/i);
        const email = wrapper.getByLabelText(/email/i);
        const message = wrapper.getByLabelText(/message/i);
        const submitButton = screen.getByText(/submit/i);

        fireEvent.change(firstName, {target: {value: "Adam"}});
        fireEvent.change(lastName, {target: {value: "Savage"}});
        fireEvent.change(email, {target: {value: "example@example.com"}});
        fireEvent.change(message, {target: {value: "Hello, world"}});
        fireEvent.click(submitButton);
        
    });
});