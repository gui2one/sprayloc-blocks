const el = wp.element.createElement;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;
const { useDispatch, useSelect } = wp.data;

const BLOCKS_TEMPLATE = [
    ['sprayloc/slanted-container', {}, [
        ['core/heading', { placeholder: 'Enter Title', level: 1, content: ['Title'], align: 'right', className: "big-title" }]
    ]],
    ['core/group', { className: "inner-content" }, [
        ["core/spacer", {}],
        ["core/heading", { placeholder: "title" }],
        ['core/image', { align: 'right', placeholder: "" }],
        ['core/paragraph', { placeholder: 'Image Details' }],
    ]]
];


export const name = 'sprayloc/en-avant';
export const settings = {
    title: 'En-Avant',
    category: 'widgets',
    supports: { fontSize: true, align: true },
    edit: (props) => {

        return (
            <div className="en-avant">

                <InnerBlocks template={BLOCKS_TEMPLATE} templateLock={false} /></div>
        );
    },
    save: (props) => {
        return <div className="en-avant"><InnerBlocks.Content /></div>;
    },
};
