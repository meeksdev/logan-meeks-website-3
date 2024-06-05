import Link from "next/link";
import ThemeSwitch from "./themeSwitch";
import Logo from "/public/Logo";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-shakespeare-700 px-6 py-2 text-2xl text-white dark:bg-shakespeare-bg">
      <Link
        href="/"
        className="hover:text-shakespeare-500 pressed:text-shakespeare-600"
      >
        <Logo
          accentColor="#72d6ee"
          className="float-left mr-1 inline-block size-8 dark:hidden"
        />
        <Logo className="float-left mr-1 hidden size-8 dark:inline-block" />
        <span className="sm:inline hidden" >Logan Meeks</span>
      </Link>

      <nav className="float-right flex h-8 items-center text-base">
        <ThemeSwitch />
        <Link href="/about" className="ml-2 rounded-full px-2 hover:bg-shakespeare-500 pressed:bg-shakespeare-600">
          About
        </Link>
        <Link href="/contact" className="ml-2 rounded-full border-[1px] border-shakespeare px-2 hover:bg-shakespeare-500 pressed:bg-shakespeare-600">
          Contact Me
        </Link>
      </nav>
    </header>
  );
}

export default Header;
