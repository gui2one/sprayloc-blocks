import { registerBlockType } from "@wordpress/blocks";

registerBlockType("myguten/test-block", {
  title: "Basic Example",
  icon: "smiley",
  category: "design",
  edit: () => <div>Hola, mundo!</div>,
  save: () => <div>Hola, mundo!</div>,
});

import * as title from "./title";
import * as slanted from "./slanted-container";
import * as colorTest from "./color-test";

const blocks = [title, slanted, colorTest];

function registerBlock(block) {
  const { name, settings } = block;
  registerBlockType(name, settings);
}

blocks.forEach(registerBlock);
