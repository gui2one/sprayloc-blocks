import { __ } from "@wordpress/i18n";
import { InspectorControls, MediaUpload, InnerBlocks } from "@wordpress/block-editor";
import style from "./style.scss";
import { Panel, PanelBody, PanelRow, Button } from "@wordpress/components";
const { withSelect } = wp.data;
export const name = "sprayloc/image-float";

const BlockEdit = (props) => {
  const {
    attributes: { mediaID, mediaURL, backgroundURL },
    setAttributes,
    className,
  } = props;

  const onSelectImage = (media) => {
    // console.log("media ID : ", media.id);
    props.setAttributes({
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
  return [
    <InspectorControls>
      <Panel>
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
      </Panel>
    </InspectorControls>,
    <div className={className}>
      <img src={mediaURL} />
      {/* <InnerBlocks /> */}
    </div>,
  ];
};
export const settings = {
  apiVersion: 2,
  title: "Sprayloc Image Float",
  description: "Image Float Block",
  category: "design",
  icon: "edit",
  attributes: {
    mediaURL: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "src",
    },
    mediaID: {
      type: "string",
    },
    backgroundURL: {
      type: "string",
    },
  },
  edit: withSelect((select, props) => {
    return { media: props.attributes.mediaID ? select('core').getMedia(props.attributes.mediaID) : undefined };
  })(BlockEdit),

  save: (props) => {
    const {
      attributes: { mediaURL },
      className,
    } = props;
    return (
      <div className={className}>
        {/* {props.attributes.body} */}
        <img src={mediaURL} />
        {/* <InnerBlocks /> */}
      </div>
    );
  },
};
