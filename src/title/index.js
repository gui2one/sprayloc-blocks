// import edit from './edit';
// import save from './save';

import { RichText } from "@wordpress/block-editor";

export const name = "sprayloc/title";

export const settings = {
  apiVersion: 2,
  title: "Sprayloc Title",
  description: "Title Block",
  category: "design",
  icon: "edit",
  attributes: {
    content: {
      type: "array",
      source: "children",
      selector: "p",
      default: ["Hello"],
    },
    title_str: {
      type: "string",
      value: "hello",
      default: "haaaa !!!!",
    },
  },
  edit: (props) => {
    const onChangeContent = (value) => {
      props.setAttributes({ content: value });
    };
    return (
      <p class="title">
        <RichText value={props.attributes.content} onChange={onChangeContent} tagName="p" />
      </p>
    );
  },
  save: (props) => {
    return <p class="title">{props.attributes.content}</p>;
  },
};
