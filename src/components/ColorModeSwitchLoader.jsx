// @ts-check
import React from "react";
import ColorModeJs from "../client/color-mode-switch.js?raw";
import ColorModeCss from "../client/color-mode-switch.css?raw";
import MoonSvg from "../client/moon.svg?raw";
import SunSvg from "../client/sun.svg?raw";

export default function ColorModeSwitchLoader() {
  return (
    <>
      <template id="tpl-color-mode-switch">
        <style>{ColorModeCss}</style>
        {/* <a role="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        </a> */}
        <a role="button" dangerouslySetInnerHTML={{ __html: `${MoonSvg}${SunSvg}` }} />
      </template>
      <style>{"color-mode-switch:not(:defined){display:none}"}</style>
      <script>{ColorModeJs}</script>
    </>
  );
}
