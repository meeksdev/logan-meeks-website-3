import Image from "next/image";

import portrait from "/public/aboutPage/portrait.jpg";
import {
  SiCplusplus,
  SiCsharp,
  SiBlender,
  SiArduino,
  SiVisualbasic,
  SiJavascript,
  SiReact,
} from "react-icons/si";
import SolidworksIcon from "/public/aboutPage/SolidworksIcon";

function AboutPage() {
  return (
    <>
      <title>About</title>
      <main className="mx-auto mb-[32px] max-w-[1080px] px-8">
        <h1 className="mb-2 mt-32 text-center text-6xl font-bold text-shakespeare-700 dark:text-shakespeare-200">
          About
        </h1>

        <section className="flex flex-wrap gap-x-8">
          {/* Summary Section */}
          <section className="mx-auto mt-6 min-w-[310px] max-w-[310px] text-center">
            <h2 className="my-2 text-2xl font-bold text-shakespeare-700 dark:text-shakespeare-200">
              Summary
            </h2>
            <Image
              src={portrait}
              alt="Photo Portrait of Logan Meeks"
              className="mx-auto size-40 rounded-full border-2 border-shakespeare-600 object-cover dark:border-shakespeare-200"
            />
            <h3 className="mb-1  mt-2 font-bold text-shakespeare-600 dark:text-shakespeare-200">
              Languages & Technologies
            </h3>
            <SiReact
              className="inline-block size-9 px-[2px]"
              title="React"
              alt="React"
            />
            <SiJavascript
              className="inline-block size-9 px-[2px]"
              title="Javascript"
              alt="Javascript"
            />
            <SiCsharp
              className="inline-block size-9 px-[2px]"
              title="C#"
              alt="C#"
            />
            <SiCplusplus
              className="inline-block size-9 px-[2px]"
              title="C++"
              alt="C++"
            />
            <SiArduino
              className="inline-block size-9 px-[2px]"
              title="Arduino"
              alt="Arduino"
            />
            <SiVisualbasic
              className="inline-block size-9 px-[2px]"
              title="Visual Basic"
              alt="Visual Basic"
            />
            {/* <img src={solidworksIcon} className='size-9 inline-block px-[2px]' title='Solidworks' alt='Solidworks' /> */}
            <SolidworksIcon
              className="inline-block size-9 px-[2px]"
              title="Solidworks"
              alt="Solidworks"
            />
            <SiBlender
              className="inline-block size-9 px-[2px]"
              title="Blender"
              alt="Blender"
            />
            <h3 className="mt-2 font-bold text-shakespeare-600 dark:text-shakespeare-200">
              Experience
            </h3>
            <p>Full Stack Engineering Certification</p>
            <p>10 Years Programming Experience</p>
            <p>Bachelor&apos;s Degree in Mechanical Engineering</p>
            <p>CSWP Certification</p>
          </section>

          <section className="flex-1 text-justify">
            <div className="mx-auto min-w-[350px] max-w-[1080px]">
              {/* About Me */}
              <section className="my-[32px]">
                <h2 className="my-2 text-center text-2xl font-bold text-shakespeare-700 dark:text-shakespeare-200">
                  Me
                </h2>
                <p>
                  I am a detail-oriented web developer with a strong background
                  in mechanical engineering and a passion for technology. My
                  expertise spans from designing and programming embedded
                  systems to developing innovative web solutions. I specialize
                  in creating custom websites, responsive designs, and database
                  integrations, using skills in HTML, CSS, JavaScript, C#, C++,
                  Python, and more. By blending technical precision with
                  creative problem-solving, I deliver reliable and efficient web
                  solutions.
                </p>
              </section>

              {/* My Mission */}
              <section className="my-[32px]">
                <h2 className="my-2 text-center text-2xl font-bold text-shakespeare-700 dark:text-shakespeare-200">
                  My Mission
                </h2>
                <p>
                  My goal is to deliver innovative, reliable, and high-quality
                  web solutions that empower businesses to achieve their goals.
                  I combine engineering precision with creative problem-solving
                  to develop custom websites and automation solutions tailored
                  to each client&apos;s unique needs. By leveraging my diverse skill
                  set and passion for technology, I strive to add value and
                  drive success for my clients in an ever-evolving digital
                  landscape. Let&apos;s connect and build something exceptional
                  together.
                </p>
              </section>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
