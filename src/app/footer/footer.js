import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// import { FaF } from "react-icons/fa6";
import Logo from "/public/Logo";

function Footer() {
  return (
    <footer className="flex flex-col justify-around gap-y-8 bg-shakespeare-700 py-8 text-center text-white sm:flex-row dark:bg-shakespeare-bg">
      <section className="mx-auto sm:mx-0">
        <Logo
          accentColor="#72d6ee"
          className="mr-2 inline-block size-16 dark:hidden"
        />
        <Logo className="mr-2 hidden size-16 dark:inline-block" />
        <div className="float-right">
          <h1 className="text-2xl">Logan Meeks</h1>
          <span className="bg-white px-1 text-sm font-semibold text-shakespeare-700 dark:text-shakespeare-bg">
            Web Development
          </span>
        </div>
      </section>
      <section>
        <h1 className="font-bold dark:text-shakespeare-200">
          Contact Information
        </h1>
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
      <section>
        <h1 className="mb-1 font-bold dark:text-shakespeare-200">
          Social Media
        </h1>
        <a href="www.facebook.com/profile.php?id=61560763913124">
          <FaFacebook className="mx-1 inline size-8 hover:text-shakespeare pressed:text-shakespeare-600" />
        </a>
        <a href="www.instagram.com/meeksdev/">
          <FaInstagram className="mx-1 inline size-8 hover:text-shakespeare pressed:text-shakespeare-600" />
        </a>
        <a href="www.linkedin.com/company/meeksdev">
          <FaLinkedin className="mx-1 inline size-8 hover:text-shakespeare pressed:text-shakespeare-600" />
        </a>
      </section>
    </footer>
  );
}

export default Footer;
