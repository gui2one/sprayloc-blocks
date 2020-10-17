import { __ } from "@wordpress/i18n";
import style from "./style.scss";
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
  RangeControl,
} from "@wordpress/components";
export const name = "sprayloc/slanted-container";

const blockStyle = {
  backgroundColor: "#900",
  color: "#fff",
  padding: "20px",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center center",
};

export const settings = {
  title: "Sprayloc Slanted Container",
  description: "Slanted container",
  category: "design",
  icon: "edit",
  supports: {
    // Hey WP, I want to use your alignment toolbar!
    align: true,
  },
  attributes: {
    clipPath: {
      type: "string",
      default: "polygon(0 0, 0 calc(100% - 50px), 100% 100%, 100% 0)",
    },
    slantHeight: {
      type: "number",
      default: 150,
    },
    slantInvert: {
      type: "boolean",
      default: false,
    },
    minHeight: {
      type: "number",
      default: 500,
    },
    paddingTop: {
      type: "number",
      default: 150,
    },
    paddingBottom: {
      type: "number",
      default: 150,
    },
    backgroundColor: {
      type: "string",
      default: "hotpink",
    },
    mediaID: {
      type: "number",
    },
    mediaURL: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "src",
    },
    backgroundURL: {
      type: "string",
      default: "",
    },
  },
  edit: (props) => {
    const {
      attributes: {
        clipPath,
        slantInvert,
        slantHeight,
        minHeight,
        paddingTop,
        paddingBottom,
        backgroundColor,
        mediaID,
        mediaURL,
        backgroundURL,
      },
      setAttributes,
      className,
    } = props;

    const onHeightChange = (value) => {
      // console.log(value);
      setAttributes({ minHeight: value });
    };
    const onSlantHeightChange = (value) => {
      setAttributes({ slantHeight: value });
      // console.log(value);
      // setAttributes({slantInvert : value})
      let str_temp;
      if (!slantInvert) {
        str_temp = `polygon(0 0, 0 calc(100% - ${slantHeight}px), 100% 100%, 100% 0)`;
      } else {
        str_temp = `polygon(0 0, 0 100%, 100% calc(100% - ${slantHeight}px), 100% 0)`;
      }
      setAttributes({ clipPath: str_temp });
    };
    const onInvertChange = (value) => {
      console.log(value);
      setAttributes({ slantInvert: value });
      let str_temp;
      if (!value) {
        str_temp = `polygon(0 0, 0 calc(100% - ${slantHeight}px), 100% 100%, 100% 0)`;
      } else {
        str_temp = `polygon(0 0, 0 100%, 100% calc(100% - ${slantHeight}px), 100% 0)`;
      }
      setAttributes({ clipPath: str_temp });
    };
    const onPaddingTopChange = (value) => {
      setAttributes({ paddingTop: value });
    };
    const onPaddingBottomChange = (value) => {
      setAttributes({ paddingBottom: value });
    };

    const onBackgroundColorChange = (clr) => {
      //   console.log(clr);
      setAttributes({ backgroundColor: clr });
    };

    const onSelectImage = (media) => {
      // console.log("media ID : ", media.id);
      setAttributes({
        mediaURL: media.url,
        mediaID: media.id,
        backgroundURL: media.url,
      });
    };

    const onRemoveBgImage = (event) => {
      console.log(event);
      setAttributes({
        mediaURL: "",
        mediaID: undefined,
        backgroundURL: "",
      });
    };
    // setStyle();

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
            <PanelRow>
              <RangeControl
                label="Slant Height"
                value={slantHeight}
                max={500}
                onChange={onSlantHeightChange}
              />
            </PanelRow>
            <PanelRow>
              <CheckboxControl
                label="invert"
                checked={slantInvert}
                onChange={onInvertChange}
              />
            </PanelRow>
          </PanelBody>
          <PanelBody title="background" initialOpen={true}>
            <PanelRow>
              <MediaUpload
                onSelect={onSelectImage}
                allowedTypes="image"
                value={mediaID}
                render={({ open }) => (
                  <div>
                    <Button className="button button-large" onClick={open}>
                      {!mediaID
                        ? __("Upload Image", "gutenberg-examples")
                        : __("Change Image", "gutenberg-examples")}
                    </Button>
                    {mediaID ? (
                      <Button
                        className="button button-alert"
                        onClick={onRemoveBgImage}
                      >
                        Remove
                      </Button>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              />
            </PanelRow>
          </PanelBody>
          <PanelBody title="Padding" initialOpen={true}>
            <PanelRow>
              <RangeControl
                label="Padding Top"
                value={paddingTop}
                max={500}
                onChange={onPaddingTopChange}
              />
            </PanelRow>
            <PanelRow>
              <RangeControl
                label="Padding Bottom"
                value={paddingBottom}
                max={500}
                onChange={onPaddingBottomChange}
              />
            </PanelRow>
          </PanelBody>

          <PanelBody title="Colors">
            <ColorPalette
              title="backgroundColor"
              value={backgroundColor}
              onChange={onBackgroundColorChange}
            />
            {/* <PanelColorSettings
              title="Background Color"
              colorValue={backgroundColor}
              colorSettings={[
                {
                  value: backgroundColor,
                  onChange: onBackgroundColorChange,
                  label: __("Background Color"),
                  colors: { "gui2one red": "#ff0055" },
                },
              ]}
            ></PanelColorSettings> */}
          </PanelBody>
        </Panel>
      </InspectorControls>,
      <div
        style={{
          ...blockStyle,
          minHeight,
          backgroundColor,
          backgroundImage: "url(" + backgroundURL + ")",
          clipPath: clipPath,
          marginTop: `${-slantHeight}px`,
          transform: `translateY(${slantHeight}px)`,
          paddingTop,
          paddingBottom,
        }}
        className={className}
      >
        <div className="container">
          <InnerBlocks />
        </div>
      </div>,
    ];
  },
  save: (props) => {
    const {
      attributes: {
        clipPath,
        slantInvert,
        slantHeight,
        minHeight,
        paddingTop,
        paddingBottom,
        backgroundColor,
        backgroundURL,
      },
      className,
    } = props;
    return (
      <div
        style={{
          ...blockStyle,
          minHeight,
          backgroundColor,
          backgroundImage: "url(" + backgroundURL + ")",
          clipPath: clipPath,
          marginTop: `${-slantHeight}px`,
          transform: `translateY(${slantHeight}px)`,
          paddingTop,
          paddingBottom,
        }}
        className={(className, "alignwide")}
      >
        <div className="container">
          <InnerBlocks.Content />
        </div>
      </div>
    );
  },
};
