declare module '*?raw' {
  const content: string;
  export default content;
}

declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      "color-mode-switch": {};
    }
  }
}
