import Hero from "./Hero/Hero";
import dbSchemaImage from "./assets/dbSchema.jpg";
import trendImage from "./assets/trend-image.jpg";
import portfolioImage1 from "./assets/image-1.png";
import portfolioImage2 from "./assets/image-2.png";
import portfolioImage3 from "./assets/image-3.png";

// import { Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { Tab, TabList, TabPanel, Tabs } from "./tabImports";

import Image from "next/image";

function LandingPage() {
  return (
    <>
      <title>Logan Meeks</title>
      <Hero />
      <main className="m-auto max-w-[1080px] px-8">
        {/* Services */}
        <section className="my-32">
          <h1 className="mb-2 text-2xl font-bold text-shakespeare-700 dark:text-shakespeare-200">
            Services
          </h1>
          <Tabs className="flex border border-shakespeare-600 dark:border-shakespeare-500">
            <TabList className="min-w-[232px] justify-self-start border-e bg-shakespeare-50 dark:bg-shakespeare-700">
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
            <TabPanel
              id="design"
            >
              <Image src={dbSchemaImage} />
              <p className="text-center font-bold text-shakespeare-700 dark:text-white">
                Tailored websites that captivate your audience and elevate your
                brand.
              </p>
            </TabPanel>
            <TabPanel
              id="development"
            >
              <Image src={dbSchemaImage} />
              <p className="text-center font-bold text-shakespeare-700 dark:text-white">
                Engage users on all devices with seamless, responsive website
                experiences.
              </p>
            </TabPanel>
            <TabPanel
              id="ecommerce"
            >
              <Image src={dbSchemaImage} />
              <p className="text-center font-bold text-shakespeare-700 dark:text-white">
                Powerful online stores optimized for maximum sales and
                conversions.
              </p>
            </TabPanel>
            <TabPanel
              id="seo"
            >
              <Image src={trendImage} />
              <p className="text-center font-bold text-shakespeare-700 dark:text-white">
                Dominate search engine rankings and attract more organic
                traffic.
              </p>
            </TabPanel>
            <TabPanel
              id="database"
            >
              <Image src={dbSchemaImage} />
              <p className="text-center font-bold text-shakespeare-700 dark:text-white">
                ...
              </p>
            </TabPanel>
          </Tabs>
        </section>

        {/* Portfolio Projects */}
        <section className="my-32">
          <h1 className="mb-2 text-2xl font-bold text-shakespeare-700 dark:text-shakespeare-200">
            Top Portfolio Projects
          </h1>
          <Tabs className="text-center">
            <TabList className="flex border border-b border-shakespeare-600 bg-shakespeare-50 dark:border-shakespeare-500 dark:bg-shakespeare-700">
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
              className="border  border-shakespeare-600 dark:border-shakespeare-500"
            >
              <Image src={portfolioImage1} />
            </TabPanel>
            <TabPanel
              id="id2"
              className="border  border-shakespeare-600 dark:border-shakespeare-500"
            >
              <Image src={portfolioImage2} />
            </TabPanel>
            <TabPanel
              id="id3"
              className="border  border-shakespeare-600 dark:border-shakespeare-500"
            >
              <Image src={portfolioImage3} />
            </TabPanel>
          </Tabs>
        </section>

        {/* Client Testimonials */}
        <section className="my-32">
          <h1 className="mb-2 text-2xl font-bold text-shakespeare-700 dark:text-shakespeare-200">
            Client Testimonials
          </h1>
          <div className="flex flex-wrap gap-2">
            <section className="flex min-w-64 flex-1 flex-col justify-between rounded-lg border border-shakespeare-600 bg-shakespeare-50 p-2 dark:border-shakespeare-500 dark:bg-shakespeare-700">
              <div>
                <span className="text-2xl font-bold text-shakespeare-500 dark:text-shakespeare-300">
                  “
                </span>
                <p className="pb-4 text-justify">
                  I can&apos;t thank Web Developer&apos;s Name enough for the incredible
                  work they did on our website. Not only did they deliver a
                  stunning design, but their responsiveness and dedication
                  throughout the process were unmatched. Our website is now a
                  true reflection of our brand&apos;s identity.
                </p>
              </div>
              {/* <div className='bg-slate-700 rounded-lg'> */}
              <div>
                <h2 className="text-center font-bold text-shakespeare-500 dark:text-shakespeare-300">
                  Nobody Ever
                </h2>
                <h3 className="text-center text-shakespeare-700 dark:text-shakespeare-100">
                  CEO, XYZ Company
                </h3>
              </div>
            </section>
            <section className="flex min-w-64 flex-1 flex-col justify-between rounded-lg border border-shakespeare-600 bg-shakespeare-50 p-2 dark:border-shakespeare-500 dark:bg-shakespeare-700">
              <div>
                <span className="text-2xl font-bold text-shakespeare-500 dark:text-shakespeare-300">
                  “
                </span>
                <p className="pb-4 text-justify">
                  I can&apos;t thank Web Developer&apos;s Name enough for the incredible
                  work they did on our website. Not only did they deliver a
                  stunning design, but their responsiveness and dedication
                  throughout the process were unmatched. Our website is now a
                  true reflection of our brand&apos;s identity.
                </p>
              </div>
              {/* <div className='bg-slate-700 rounded-lg'> */}
              <div>
                <h2 className="text-center font-bold text-shakespeare-500 dark:text-shakespeare-300">
                  Nobody Ever
                </h2>
                <h3 className="text-center text-shakespeare-700 dark:text-shakespeare-100">
                  CEO, XYZ Company
                </h3>
              </div>
            </section>
            <section className="flex min-w-64 flex-1 flex-col justify-between rounded-lg border border-shakespeare-600 bg-shakespeare-50 p-2 dark:border-shakespeare-500 dark:bg-shakespeare-700">
              <div>
                <span className="text-2xl font-bold text-shakespeare-500 dark:text-shakespeare-300">
                  “
                </span>
                <p className="pb-4 text-justify">
                  I can&apos;t thank Web Developer&apos;s Name enough for the incredible
                  work they did on our website. Not only did they deliver a
                  stunning design, but their responsiveness and dedication
                  throughout the process were unmatched. Our website is now a
                  true reflection of our brand&apos;s identity.
                </p>
              </div>
              {/* <div className='bg-slate-700 rounded-lg'> */}
              <div>
                <h2 className="text-center font-bold text-shakespeare-500 dark:text-shakespeare-300">
                  Nobody Ever
                </h2>
                <h3 className="text-center text-shakespeare-700 dark:text-shakespeare-100">
                  CEO, XYZ Company
                </h3>
              </div>
            </section>
          </div>
        </section>

        {/* About Section */}
        <section className="my-32">
          <h1 className="mb-2 text-2xl font-bold text-shakespeare-700 dark:text-shakespeare-200">
            About Me
          </h1>
          <p className="pb-4 text-justify">
            "Welcome to Logan Meeks Web Development - where innovation meets
            creativity to craft exceptional digital experiences. I&apos;m passionate
            about leveraging cutting-edge technology to bring your vision to
            life. With a keen eye for design and a relentless pursuit of
            perfection, I specialize in creating bespoke websites that not only
            captivate audiences but also drive results. I thrive on challenges
            and am dedicated to pushing the boundaries of web development to
            deliver solutions that exceed expectations. But what truly sets me
            apart is my unwavering dedication to my clients. I believe that
            collaboration is key to success, which is why I work closely with
            you every step of the way to ensure that your project is a true
            reflection of your vision and goals. Whether you&apos;re a small business
            looking to establish your online presence or a large corporation
            seeking to redefine it, I&apos;m here to help. Let&apos;s embark on this
            journey together and transform your digital aspirations into
            reality. Get in touch with me today and let&apos;s create something
            extraordinary."
          </p>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
