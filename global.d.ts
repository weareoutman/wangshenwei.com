declare module '*?raw' {
  const content: string;
  export default content;
}

declare module '*.css' {
  const content: string;
  export default content;
}

declare module '*.svg' {
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
