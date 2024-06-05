// import {
//   Button,
//   FieldError,
//   Form,
//   Input,
//   Label,
//   TextField,
//   TextArea,
// } from "react-aria-components";

import ContactForm from "./contactForm";

function ContactPage() {
  return (
    <>
      <title>Contact Me</title>
      <main className="mx-auto mb-[32px] w-full max-w-[1080px] px-8">
        <h1 className="mb-2 mt-32 text-center text-6xl font-bold text-shakespeare-700 dark:text-shakespeare-200">
          Contact Me
        </h1>

        <section className="flex flex-wrap gap-x-8">
          <ContactForm />
          {/* Form */}
          {/* <Form className="mt-6 min-w-72 flex-1">
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
          </Form> */}

          {/* Additional Contact Info */}
          <section className="my-32 flex-1 text-center">
            <a
              href="mailto:loganmeeksllc@gmail.com"
              className="block rounded-full active:bg-shakespeare-600 hover:text-shakespeare"
            >
              loganmeeksllc@gmail.com
            </a>
            <a
              href="tel:+1-702-521-7541"
              className="block rounded-full active:bg-shakespeare-600 hover:text-shakespeare"
            >
              +1 (702) 521-7541
            </a>
          </section>
        </section>
      </main>
    </>
  );
}

export default ContactPage;
