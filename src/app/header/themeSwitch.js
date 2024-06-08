'use client';

import { Switch } from "react-aria-components";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  // const [ switchValue, setSwitchValue ] = useState(false);

  useEffect(() => {
    setMounted(true);
    // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //   document.documentElement.classList.add("dark");
    //   // setSwitchValue(() => true);
    //   console.log('dark mode');
    // } else {
    //   document.body.classList.remove("dark");
    //   // setSwitchValue(() => false);
    //   console.log('light mode');
    // }
    // console.log(switchValue);
  }, []);

  // useEffect(() => {

  // },[switchValue]);

  function toggleDarkMode(selected) {
    if (!selected) {
      // document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      // document.documentElement.classList.add("dark");
      setTheme("dark");
    }
    // console.log(switchValue);
    // setSwitchValue(() => switchValue ? false : true);
    // console.log(switchValue);
  };

  if(!mounted) {
    // console.log(resolvedTheme);
    return (
        <label
          // onChange={toggleDarkMode}
          className=" hidden"
          // defaultSelected={true}
        >
          {/* <div className="relative box-border flex h-[24px] w-[48px] shrink-0 cursor-default justify-between rounded-full border border-solid border-shakespeare bg-shakespeare bg-clip-padding p-[3px] outline-none ring-black transition duration-200 ease-in-out hover:cursor-pointer group-focus-visible:ring-2 group-pressed:bg-shakespeare-700 group-selected:bg-shakespeare-950 group-selected:group-pressed:bg-shakespeare-900">
            <MdDarkMode className="absolute left-1 hidden size-[17px] group-selected:block" />
            <span className="h-[17px] w-[17px] translate-x-0 transform rounded-full bg-shakespeare-950 transition duration-200 ease-in-out group-selected:translate-x-[135%] group-selected:bg-white" />
            <MdLightMode className="absolute right-1 size-[17px] text-shakespeare-950 group-selected:hidden" />
          </div> */}
        </label>
    );
  }

  let defaultSwitchValue;
  if(resolvedTheme === 'dark') {
    defaultSwitchValue = true;
    // return (
    //   <Switch
    //     onChange={toggleDarkMode}
    //     className="group flex items-center gap-1"
    //     defaultSelected={true}
    //   >
    //     <div className="relative box-border flex h-[24px] w-[48px] shrink-0 cursor-default justify-between rounded-full border border-solid border-shakespeare bg-shakespeare bg-clip-padding p-[3px] outline-none ring-black transition duration-200 ease-in-out hover:cursor-pointer group-focus-visible:ring-2 group-pressed:bg-shakespeare-700 group-selected:bg-shakespeare-950 group-selected:group-pressed:bg-shakespeare-900">
    //       <MdDarkMode className="absolute left-1 hidden size-[17px] group-selected:block" />
    //       <span className="h-[17px] w-[17px] translate-x-0 transform rounded-full bg-shakespeare-950 transition duration-200 ease-in-out group-selected:translate-x-[135%] group-selected:bg-white" />
    //       <MdLightMode className="absolute right-1 size-[17px] text-shakespeare-950 group-selected:hidden" />
    //     </div>
    //   </Switch>
    // );
  }

  if(resolvedTheme === 'light') {
    defaultSwitchValue = false;
    // return (
    //   <Switch
    //     onChange={toggleDarkMode}
    //     className="group flex items-center gap-1"
    //     defaultSelected={true}
    //   >
    //     <div className="relative box-border flex h-[24px] w-[48px] shrink-0 cursor-default justify-between rounded-full border border-solid border-shakespeare bg-shakespeare bg-clip-padding p-[3px] outline-none ring-black transition duration-200 ease-in-out hover:cursor-pointer group-focus-visible:ring-2 group-pressed:bg-shakespeare-700 group-selected:bg-shakespeare-950 group-selected:group-pressed:bg-shakespeare-900">
    //       <MdDarkMode className="absolute left-1 hidden size-[17px] group-selected:block" />
    //       <span className="h-[17px] w-[17px] translate-x-0 transform rounded-full bg-shakespeare-950 transition duration-200 ease-in-out group-selected:translate-x-[135%] group-selected:bg-white" />
    //       <MdLightMode className="absolute right-1 size-[17px] text-shakespeare-950 group-selected:hidden" />
    //     </div>
    //   </Switch>
    // );
  }

  if(resolvedTheme) {
    return (
      <Switch
        onChange={toggleDarkMode}
        className="group flex items-center gap-1"
        defaultSelected={defaultSwitchValue}
      >
        <div className="relative box-border flex h-[24px] w-[48px] shrink-0 cursor-default justify-between rounded-full border border-solid border-shakespeare bg-shakespeare bg-clip-padding p-[3px] outline-none ring-black transition duration-200 ease-in-out hover:cursor-pointer group-focus-visible:ring-2 group-pressed:bg-shakespeare-700 group-selected:bg-shakespeare-950 group-selected:group-pressed:bg-shakespeare-900">
          <MdDarkMode className="absolute left-1 hidden size-[17px] group-selected:block" />
          <span className="h-[17px] w-[17px] translate-x-0 transform rounded-full bg-shakespeare-950 transition duration-200 ease-in-out group-selected:translate-x-[135%] group-selected:bg-white" />
          <MdLightMode className="absolute right-1 size-[17px] text-shakespeare-950 group-selected:hidden" />
        </div>
      </Switch>
    );
  }
}