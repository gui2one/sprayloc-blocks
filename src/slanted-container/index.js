import { __ } from "@wordpress/i18n";
import style from "./style.scss";
import { InnerBlocks, InspectorControls, MediaUpload } from "@wordpress/block-editor";
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
      default: "polygon(-1px 0, -1px calc(100% - 50px), 101% 100%, 101% 0)",
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
    overlayColor: {
      type: "string",
      default: "orangered",
    },
    overlayColors: {
      type: "array",
      default: [
        { name: "color 1", color: "#ff0000" },
        { name: "color 2", color: "#00ff00" },
      ],
    },
    overlayOpacity: {
      type: "number",
      default: 0.2,
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
        overlayColor,
        overlayColors,
        overlayOpacity,
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
        str_temp = `polygon(-1px 0, -1px calc(100% - ${slantHeight}px), 101% 100%, 100% 0)`;
      } else {
        str_temp = `polygon(-1px 0, -1px 100%, 100% calc(100% - ${slantHeight}px), 101% 0)`;
      }
      setAttributes({ clipPath: str_temp });
    };
    const onInvertChange = (value) => {
      console.log(value);
      setAttributes({ slantInvert: value });
      let str_temp;
      if (!value) {
        str_temp = `polygon(-10px 0, -10px calc(100% - ${slantHeight}px), 100% 100%, 100% 0)`;
      } else {
        str_temp = `polygon(-10px 0, -10px 100%, 100% calc(100% - ${slantHeight}px), 100% 0)`;
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
    const onOverlayColorChange = (clr) => {
      //   console.log(clr);
      setAttributes({ overlayColor: clr });
    };

    const onOverlayOpacityChange = (value) => {
      setAttributes({ overlayOpacity: value });
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
              <RangeControl label="Height" value={minHeight} max={500} onChange={onHeightChange} />
            </PanelRow>
            <PanelRow>
              <RangeControl label="Slant Height" value={slantHeight} max={500} onChange={onSlantHeightChange} />
            </PanelRow>
            <PanelRow>
              <CheckboxControl label="invert" checked={slantInvert} onChange={onInvertChange} />
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
                      {!mediaID ? __("Upload Image", "gutenberg-examples") : __("Change Image", "gutenberg-examples")}
                    </Button>
                    {mediaID ? (
                      <Button className="button button-alert" onClick={onRemoveBgImage}>
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
              <RangeControl label="Padding Top" value={paddingTop} max={500} onChange={onPaddingTopChange} />
            </PanelRow>
            <PanelRow>
              <RangeControl label="Padding Bottom" value={paddingBottom} max={500} onChange={onPaddingBottomChange} />
            </PanelRow>
          </PanelBody>

          <PanelBody title="Colors">
            <ColorPalette title="backgroundColor" value={backgroundColor} onChange={onBackgroundColorChange} />
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
          <PanelBody title="Overlay Color" initialOpen={true}>
            <PanelRow>
              <RangeControl
                label="Overlay Opacity"
                value={overlayOpacity}
                max={1.0}
                step={0.01}
                onChange={onOverlayOpacityChange}
              />
            </PanelRow>
            <PanelRow>
              <ColorPalette value={overlayColor} colors={overlayColors} onChange={onOverlayColorChange} />
              <ColorIndicator colorValue={overlayColor} />
            </PanelRow>
          </PanelBody>
        </Panel>
      </InspectorControls>,
      <div
        style={{
          zIndex: 10,
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
          <div
            class="overlay"
            style={{
              backgroundColor: overlayColor,
              opacity: overlayOpacity,
            }}
          ></div>
          <InnerBlocks></InnerBlocks>
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
        overlayColor,
        overlayOpacity,
      },
      className,
    } = props;
    return (
      <div
        style={{
          zIndex: 10,
          ...blockStyle,
          position: "relative",
          minHeight,
          backgroundColor,
          backgroundImage: "url(" + backgroundURL + ")",
          clipPath: clipPath,
          marginTop: `${-slantHeight}px`,
          transform: `translateY(${slantHeight}px) translateZ(0)`,
          paddingTop,
          paddingBottom,
        }}
        className={(className, "alignwide")}
      >
        <div className="container">
          <div
            class="overlay"
            style={{
              backgroundColor: overlayColor,
              opacity: overlayOpacity,
            }}
          ></div>
          <InnerBlocks.Content></InnerBlocks.Content>
        </div>
      </div>
    );
  },
};
