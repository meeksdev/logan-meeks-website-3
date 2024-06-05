'use client';

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
    TextArea,
  } from "react-aria-components";

export default function ContactForm() {
    const form = useRef();

    function handleSubmit(e) {
      e.preventDefault();

      // if(!state.name || !state.email || !state.message) return;
      emailjs
          .sendForm('contact-me-service', 'contact-me-form', form.current, {publicKey: 'VWBEw-ZfWtOWTBsxF'})
          .then(
              () => {
                  console.log('SUCCESS!');
                  form.current.reset();
                  alert('Message Sent!');
              },
              (error) => {
                  console.log('FAILED...', error.text);
                  alert('Message failed to send.');
              }
          );
    }

    return (
        <Form ref={form} onSubmit={handleSubmit} className="mt-6 min-w-72 flex-1 flex flex-col sm:block">
            <TextField
              name="name"
              type="text"
              isRequired
              className="relative mb-4 mt-2"
            >
              <Label className="absolute left-2 top-2 block text-shakespeare-600 dark:text-gray-400">
                Name
              </Label>
              <Input className="block h-16 w-full resize-y rounded-md border border-black bg-transparent pl-2 pt-6 focus:border-shakespeare focus:outline-none dark:border-white" />
              <FieldError className="block text-orange-700 dark:text-orange-400" />
            </TextField>
            <TextField
              name="email"
              type="email"
              isRequired
              className="relative mb-4 mt-2"
            >
              <Label className="absolute left-2 top-2 block text-shakespeare-600 dark:text-gray-400">
                Email
              </Label>
              <Input className="block h-16 w-full resize-y rounded-md border border-black bg-transparent pl-2 pt-6 focus:border-shakespeare focus:outline-none dark:border-white" />
              <FieldError className="block text-orange-700 dark:text-orange-400" />
            </TextField>
            <TextField
              name="message"
              type="text"
              isRequired
              className="relative mb-4 mt-2"
            >
              <Label className="absolute left-2 top-2 block text-shakespeare-600 dark:text-gray-400">
                Message
              </Label>
              <TextArea className="block h-32 min-h-16 w-full resize-y rounded-md border border-black bg-transparent pl-2 pt-6 focus:border-shakespeare focus:outline-none dark:border-white" />
              <FieldError className="block text-orange-700 dark:text-orange-400" />
            </TextField>
            <Button
              type="submit"
              className="sm:float-right sm:ml-2 self-center rounded-full bg-shakespeare-600 px-2 py-px text-xl text-white hover:bg-shakespeare-500 pressed:bg-shakespeare-700"
            >
              Send Message &gt;&gt;
            </Button>
          </Form>
    );
}