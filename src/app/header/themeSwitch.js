'use client';

import { Switch } from "react-aria-components";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeSwitch() {
    function toggleDarkMode(selected) {
        if (document.body.classList.contains("dark")) {
          document.body.classList.remove("dark");
        } else {
          document.body.classList.add("dark");
        }
      };

    return (
        <Switch
          onChange={toggleDarkMode}
          className="group flex items-center gap-1"
        >
          <div className="relative box-border flex h-[24px] w-[48px] shrink-0 cursor-default justify-between rounded-full border border-solid border-shakespeare bg-shakespeare bg-clip-padding p-[3px] outline-none ring-black transition duration-200 ease-in-out hover:cursor-pointer group-focus-visible:ring-2 group-pressed:bg-shakespeare-700 group-selected:bg-shakespeare-950 group-selected:group-pressed:bg-shakespeare-900">
            <MdDarkMode className="absolute left-1 hidden size-[17px] group-selected:block" />
            <span className="h-[17px] w-[17px] translate-x-0 transform rounded-full bg-shakespeare-950 transition duration-200 ease-in-out group-selected:translate-x-[135%] group-selected:bg-white" />
            <MdLightMode className="absolute right-1 size-[17px] text-shakespeare-950 group-selected:hidden" />
          </div>
        </Switch>
    );
}