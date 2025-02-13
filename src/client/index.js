// @ts-check
import ColorModeCss from "./color-mode-switch.css";
import MoonSvg from "./moon.svg";
import SunSvg from "./sun.svg";

if (CSS.supports("color-scheme", "dark")) {
  customElements.define("color-mode-switch", class ColorModeSwitchElement extends HTMLElement {
    /** @type {HTMLElement} */
    _switch;

    constructor() {
      super();

      const shadowRoot = this.attachShadow({mode: "open"});

      shadowRoot.innerHTML = `<style>${ColorModeCss}</style><a role="button">${MoonSvg}${SunSvg}</a>`;

      this._switch = shadowRoot.querySelector("a");
      this._setTheme(localStorage.getItem("theme") || getPreferColorScheme());
    }

    _clickHandler = () => {
      const currentTheme = document.documentElement.dataset.theme;
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      this._setTheme(nextTheme, true);
    };

    /**
     * @param {string} theme
     * @param {boolean=} force
     */
    _setTheme(theme, force) {
      document.documentElement.dataset.theme = theme;
      this._switch.dataset.theme = theme;
      if (force) {
        localStorage.setItem("theme", theme);
      }
    }

    connectedCallback() {
      this._switch.addEventListener("click", this._clickHandler);
    }

    disconnectedCallback() {
      this._switch.removeEventListener("click", this._clickHandler);
    }
  });

  function getPreferColorScheme() {
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
}
