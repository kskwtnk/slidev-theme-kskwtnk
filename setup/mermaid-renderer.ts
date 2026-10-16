import { defineMermaidRendererSetup } from "@slidev/types";
import { renderMermaidSVG } from "beautiful-mermaid";

export default defineMermaidRendererSetup(() => {
  return (code, options) =>
    renderMermaidSVG(code, {
      // transparent: true,
      ...options,
    });
});
