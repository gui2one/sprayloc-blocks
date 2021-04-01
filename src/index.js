import { registerBlockType } from "@wordpress/blocks";

// registerBlockType("myguten/test-block", {
//   title: "Basic Example",
//   icon: "smiley",
//   category: "design",
//   edit: () => <div>Hola, mundo!</div>,
//   save: () => <div>Hola, mundo!</div>,
// });

import * as title from "./title";
import * as slanted from "./slanted-container";
import * as colorTest from "./color-test";
import * as imageFloat from "./image-float";
import * as enAvant from "./en-avant";

const blocks = [title, slanted, colorTest, imageFloat, enAvant];

function registerBlock(block) {
  const { name, settings } = block;
  registerBlockType(name, settings);
}

blocks.forEach(registerBlock);
