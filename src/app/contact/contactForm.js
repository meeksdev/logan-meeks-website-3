'use client';

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
    return (
        <Form className="mt-6 min-w-72 flex-1">
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
              className="float-right ml-2 rounded-full bg-shakespeare-600 px-2 py-px text-xl text-white hover:bg-shakespeare-500 pressed:bg-shakespeare-700"
            >
              Send Message &gt;&gt;
            </Button>
          </Form>
    );
}