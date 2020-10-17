import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
} from "@wordpress/block-editor";
import {
  Toolbar,
  Button,
  Tooltip,
  Panel,
  PanelBody,
  PanelRow,
  CheckboxControl,
  ColorPalette,
  PanelColorSettings,
  ColorIndicator,
  RangeControl,
} from "@wordpress/components";
export const name = "sprayloc/color-test";

export const settings = {
  title: "Color test",
  description: "a test to understand Color settings inspector control",
  category: "design",
  icon: "edit",
  attributes: {
    minHeight: {
      type: "number",
      default: 150,
    },
    color: {
      type: "string",
      default: "hotpink",
    },
    colors: {
      type: "array",
      default: [
        { name: "color 1", color: "#ff0000" },
        { name: "color 2", color: "#00ff00" },
      ],
    },
  },

  edit: (props) => {
    const {
      attributes: { minHeight, color, colors },
      setAttributes,
    } = props;
    const onHeightChange = (value) => {
      setAttributes({ minHeight: value });
    };

    const onColorChange = (clr) => {
      console.log(color);
      setAttributes({ color: clr });
    };
    return [
      <InspectorControls>
        <Panel header="Slanted Controls">
          <PanelBody title="Misc" initialOpen={true}>
            <PanelRow>
              <RangeControl
                label="Height"
                value={minHeight}
                max={500}
                onChange={onHeightChange}
              />
            </PanelRow>
          </PanelBody>
          <PanelBody title="Color" initialOpen={true}>
            <PanelRow>
              <ColorPalette
                value={color}
                colors={colors}
                onChange={onColorChange}
              />
              <ColorIndicator colorValue={color} />
            </PanelRow>
          </PanelBody>
        </Panel>
      </InspectorControls>,
      <h1 style={{ color }}>Color test</h1>,
    ];
  },
  save: (props) => {
    const {
      attributes: { minHeight, color },
    } = props;
    return <h1 style={{ color }}>Color test</h1>;
  },
};
