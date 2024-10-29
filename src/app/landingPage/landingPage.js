import Hero from './Hero/Hero';
import design from './assets/design.svg';
import database from './assets/database.svg';
import ecommerce from './assets/ecommerce.svg';
import responsive from './assets/responsive.svg';
import seo from './assets/seo.svg';
import { RxStarFilled } from 'react-icons/rx';
import { Tab, TabList, TabPanel, Tabs } from './tabImports';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Joshua Gore',
        position: 'Sr. Product Designer',
        company: 'Wraithworks',
        companyURL: 'https://wraithworks.com',
        rating: 5,
        testimonial:
            "I was extremely happy with Logan's work, communication, and results. Logan is a self starter who can execute with minimal information to a maximal result. I will be happy to work with him again.",
    },
];

/**
 * Renders the landing page of the website.
 * It includes sections for job positions and an about section.
 * @returns {JSX.Element} The rendered landing page component.
 */
function LandingPage() {
    function ReviewStars({ rating }) {
        const validRating = Math.min(Math.max(rating, 1), 5); // Ensure the rating is between 1 and 5

        return Array.from({ length: validRating }, (_, index) => <RxStarFilled key={index} className="size-6" />);
    }

    return (
        <>
            <Hero />
            <main className="m-auto max-w-[1080px] px-6 sm:px-8">
                {/* Services */}
                <section className="my-32">
                    <h1 className="mb-2 text-2xl font-bold text-shakespeare-700 dark:text-shakespeare-200 text-center sm:text-left">Services</h1>
                    <Tabs className="flex flex-col sm:flex-row border border-shakespeare-600 dark:border-shakespeare-500">
                        <TabList className="min-w-[232px] text-center sm:text-left justify-self-start bg-shakespeare-50 dark:bg-shakespeare-700">
                            <Tab
                                id="design"
                                className="border-e-4 border-e-transparent px-4 py-1  hover:cursor-pointer hover:bg-shakespeare-600 hover:text-white selected:border-e-4 selected:border-e-shakespeare-600 selected:outline-none dark:hover:bg-shakespeare dark:pressed:bg-shakespeare-600 dark:selected:border-e-shakespeare-500"
                            >
                                Custom Website Design
                            </Tab>
                            <Tab
                                id="development"
                                className="border-e-4 border-e-transparent px-4 py-1 hover:cursor-pointer hover:bg-shakespeare-600 hover:text-white selected:border-e-4 selected:border-e-shakespeare-600 selected:outline-none dark:hover:bg-shakespeare dark:pressed:bg-shakespeare-600 dark:selected:border-e-shakespeare-500"
                            >
                                Responsive Development
                            </Tab>
                            <Tab
                                id="ecommerce"
                                className="border-e-4 border-e-transparent px-4 py-1 hover:cursor-pointer hover:bg-shakespeare-600 hover:text-white selected:border-e-4 selected:border-e-shakespeare-600 selected:outline-none dark:hover:bg-shakespeare dark:pressed:bg-shakespeare-600 dark:selected:border-e-shakespeare-500"
                            >
                                E-Commerce Solutions
                            </Tab>
                            <Tab
                                id="seo"
                                className="border-e-4 border-e-transparent px-4 py-1 hover:cursor-pointer hover:bg-shakespeare-600 hover:text-white selected:border-e-4 selected:border-e-shakespeare-600 selected:outline-none dark:hover:bg-shakespeare dark:pressed:bg-shakespeare-600 dark:selected:border-e-shakespeare-500"
                            >
                                SEO Optimization
                            </Tab>
                            <Tab
                                id="database"
                                className="border-e-4 border-e-transparent px-4 py-1 hover:cursor-pointer hover:bg-shakespeare-600 hover:text-white selected:border-e-4 selected:border-e-shakespeare-600 selected:outline-none dark:hover:bg-shakespeare dark:pressed:bg-shakespeare-600 dark:selected:border-e-shakespeare-500"
                            >
                                Database Integration
                            </Tab>
                        </TabList>
                        {/* <div className="flex-1 min-h-[400px]"> */}
                        <TabPanel id="design" className="w-full">
                            <p className="text-center font-bold text-white bg-shakespeare-700 dark:text-white dark:bg-shakespeare-bg">
                                Tailored websites that captivate your audience and elevate your brand.
                            </p>
                            <Image
                                src={design}
                                alt="Illustration of laptop displaying generic website outline."
                                className="object-contain aspect-square max-h-[550px] p-2 mx-auto"
                            />
                        </TabPanel>
                        <TabPanel id="development" className="w-full">
                            <p className="text-center font-bold text-white bg-shakespeare-700 dark:text-white dark:bg-shakespeare-bg">
                                Engage users on all devices with seamless, responsive website experiences.
                            </p>
                            <Image
                                src={responsive}
                                alt="Illustration of desktop monitor, laptop, tablet, and smart phone."
                                className="object-contain aspect-square max-h-[550px] p-2 mx-auto"
                            />
                        </TabPanel>
                        <TabPanel id="ecommerce" className="w-full">
                            <p className="text-center font-bold text-white bg-shakespeare-700 dark:text-white dark:bg-shakespeare-bg">
                                Powerful online stores optimized for maximum sales and conversions.
                            </p>
                            <Image
                                src={ecommerce}
                                alt="Illustration of smart phone with marketplace awning overtop and a buy button centered on the screen."
                                className="object-contain aspect-square max-h-[550px] p-2 mx-auto"
                            />
                        </TabPanel>
                        <TabPanel id="seo" className="w-full">
                            <p className="text-center font-bold text-white bg-shakespeare-700 dark:text-white dark:bg-shakespeare-bg">
                                Dominate search engine rankings and attract more organic traffic.
                            </p>
                            <Image
                                src={seo}
                                alt="Illustration of bar graph and an arrow indicating an upward trend."
                                className="object-contain aspect-square max-h-[550px] p-2 mx-auto"
                            />
                        </TabPanel>
                        <TabPanel id="database" className="w-full">
                            <p className="text-center font-bold text-white bg-shakespeare-700 dark:text-white dark:bg-shakespeare-bg">
                                Streamline your business operations by connecting your website with powerful backend systems.
                            </p>
                            <Image
                                src={database}
                                alt="Illustration of database schema."
                                className="object-contain aspect-square w-full max-h-[550px] p-2 mx-auto"
                            />
                        </TabPanel>
                        {/* </div> */}
                    </Tabs>
                </section>

                {/* Portfolio Projects */}
                {/* <section className="my-32">
          <h1 className="mb-2 text-2xl font-bold text-shakespeare-700 dark:text-shakespeare-200 text-center sm:text-left">
            Top Portfolio Projects
          </h1>
          <Tabs className="text-center border border-shakespeare-600 dark:border-shakespeare-500">
            <TabList className="flex bg-shakespeare-50 dark:bg-shakespeare-700">
              <Tab
                id="id1"
                className="flex-1 border-b-4 border-b-transparent hover:cursor-pointer hover:bg-shakespeare-600 hover:text-white selected:border-b-4 selected:border-b-shakespeare-600 selected:outline-none dark:hover:bg-shakespeare dark:pressed:bg-shakespeare-600 dark:selected:border-b-shakespeare-500"
              >
                Tab1
              </Tab>
              <Tab
                id="id2"
                className="flex-1 border-b-4 border-b-transparent hover:cursor-pointer hover:bg-shakespeare-600 hover:text-white selected:border-b-4 selected:border-b-shakespeare-600 selected:outline-none dark:hover:bg-shakespeare dark:pressed:bg-shakespeare-600 dark:selected:border-b-shakespeare-500"
              >
                Tab2
              </Tab>
              <Tab
                id="id3"
                className="flex-1 border-b-4 border-b-transparent hover:cursor-pointer hover:bg-shakespeare-600 hover:text-white selected:border-b-4 selected:border-b-shakespeare-600 selected:outline-none dark:hover:bg-shakespeare dark:pressed:bg-shakespeare-600 dark:selected:border-b-shakespeare-500"
              >
                Tab3
              </Tab>
            </TabList>
            <TabPanel
              id="id1"
            >
              <Image src={portfolioImage1} />
            </TabPanel>
            <TabPanel
              id="id2"
            >
              <Image src={portfolioImage2} />
            </TabPanel>
            <TabPanel
              id="id3"
            >
              <Image src={portfolioImage3} />
            </TabPanel>
          </Tabs>
        </section> */}

                {/* Client Testimonials */}
                <section className="my-32">
                    <h1 className="mb-2 text-2xl font-bold text-shakespeare-700 dark:text-shakespeare-200 text-center sm:text-left">Client Testimonials</h1>
                    <div className="flex flex-wrap justify-center gap-2">
                        {testimonials.map(({ name, position, company, companyURL, rating, testimonial }, index) => {
                            return (
                                <section
                                    key={index}
                                    className="flex min-w-64 max-w-96 flex-1 flex-col justify-between rounded-lg border border-shakespeare-600 bg-shakespeare-50 p-2 dark:border-shakespeare-500 dark:bg-shakespeare-700"
                                >
                                    <div>
                                        <span className="text-2xl font-bold text-shakespeare-500 dark:text-shakespeare-300">“</span>
                                        <p className="pb-4 text-justify">{testimonial}</p>
                                    </div>
                                    <div>
                                        <div className="flex justify-center py-3 text-shakespeare-500 dark:text-shakespeare-300">
                                            <ReviewStars rating={rating} />
                                        </div>
                                        <h2 className="text-center font-bold text-shakespeare-500 dark:text-shakespeare-300">{name}</h2>
                                        <h3 className="text-center text-shakespeare-700 dark:text-shakespeare-100">
                                            {position},{' '}
                                            <a href={companyURL} className="underline">
                                                {company}
                                            </a>
                                        </h3>
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </section>

                {/* About Section */}
                <section className="my-32">
                    <h1 className="mb-2 text-2xl font-bold text-shakespeare-700 dark:text-shakespeare-200 text-center sm:text-left">About Me</h1>
                    <p className="pb-4 text-justify">
                        Welcome to Logan Meeks Web Development - where innovation meets creativity to craft exceptional digital experiences. I&apos;m passionate
                        about leveraging cutting-edge technology to bring your vision to life. With a keen eye for design and a relentless pursuit of
                        perfection, I specialize in creating bespoke websites that not only captivate audiences but also drive results. I thrive on challenges
                        and am dedicated to pushing the boundaries of web development to deliver solutions that exceed expectations. But what truly sets me
                        apart is my unwavering dedication to my clients. I believe that collaboration is key to success, which is why I work closely with you
                        every step of the way to ensure that your project is a true reflection of your vision and goals. Whether you&apos;re a small business
                        looking to establish your online presence or a large corporation seeking to redefine it, I&apos;m here to help. Let&apos;s embark on
                        this journey together and transform your digital aspirations into reality. Get in touch with me today and let&apos;s create something
                        extraordinary.
                    </p>
                </section>
            </main>
        </>
    );
}

export default LandingPage;
