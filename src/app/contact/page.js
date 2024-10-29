import ContactForm from './contactForm';

/**
 * Metadata for the Contact page.
 * @type {Object}
 * @property {string} title - The title of the page.
 * @property {string} description - The description of the page.
 * @property {Array<string>} keywords - The keywords for SEO.
 */
export const metadata = {
    title: 'Contact | Logan Meeks Web Development',
    description:
        'Get in touch with Logan Meeks Web Development for professional web design and development services. Contact us today to discuss your project.',
    keywords: ['Logan Meeks Web Development', 'contact', 'web design', 'web development', 'get in touch', 'contact information'],
};

/**
 * ContactPage component renders the contact page with a contact form and additional contact information.
 * @returns {JSX.Element} The rendered contact page component.
 */
function ContactPage() {
    return (
        <>
            <main className="mx-auto mb-[32px] w-full max-w-[1080px] px-6 sm:px-8">
                <h1 className="mb-2 mt-32 text-center text-6xl font-bold text-shakespeare-700 dark:text-shakespeare-200">Contact Me</h1>

                <section className="flex flex-wrap gap-x-8">
                    <ContactForm />

                    {/* Additional Contact Info */}
                    <section className="my-32 flex-1 text-center">
                        <a href="mailto:loganmeeksllc@gmail.com" className="block rounded-full active:bg-shakespeare-600 hover:text-shakespeare">
                            loganmeeksllc@gmail.com
                        </a>
                        <a href="tel:+1-702-521-7541" className="block rounded-full active:bg-shakespeare-600 hover:text-shakespeare">
                            +1 (702) 521-7541
                        </a>
                    </section>
                </section>
            </main>
        </>
    );
}

export default ContactPage;
