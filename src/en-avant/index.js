const el = wp.element.createElement;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;

const BLOCKS_TEMPLATE = [
    ['sprayloc/slanted-container', {}, [
        ['core/heading', { placeholder: 'Enter Title', fontSize: "180px", level: 1 }]
    ]],
    ['core/image', { align: 'right' }],
    ['core/paragraph', { placeholder: 'Image Details' }],
];


export const name = 'sprayloc/en-avant';
export const settings = {
    title: 'En-Avant',
    category: 'widgets',
    supports: { fontSize: true },
    edit: (props) => {
        return <InnerBlocks template={BLOCKS_TEMPLATE} templateLock={false} />;
    },
    save: (props) => {
        return <InnerBlocks.Content />;
    },
};
