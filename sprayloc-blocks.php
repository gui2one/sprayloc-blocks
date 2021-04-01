<?php

/**
 * Plugin Name: Sprayloc-Blocks
 */

 function registerBlocks()
 {
     $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');
     

     

     wp_register_script(
         'myguten-block',
         plugins_url('build/index.js', __FILE__),
         $asset_file['dependencies'],
         $asset_file['version']
     );
 
     register_block_type('myguten/test-block', array(
         'editor_script' => 'myguten-block',
     ));

     register_block_type('sprayloc/title', array(
        'editor_script' => 'myguten-block',
    ));

     register_block_type('sprayloc/color-test', array(
    'editor_script' => 'myguten-block',
    ));

     register_block_type('sprayloc/image-float', array(
    'editor_script' => 'myguten-block',
    ));

    
     register_block_type('sprayloc/en-avant', array(
    'editor_script' => 'myguten-block',
    ));
 }

 add_action('init', 'registerBlocks');

 function enqueueAssets()
 {
     wp_enqueue_style('sprayloc-blocks-css', plugins_url('build/style-index.css', __FILE__), null, '1.0', 'all');
     wp_enqueue_style('sprayloc-general-css', plugins_url('style.css', __FILE__), null, '1.0', 'all');
     wp_enqueue_script('sprayloc-block-js', plugins_url('script.js', __FILE__), null, '1.0', 'all');
 }

 function enqueueAdminAssets()
 {
     wp_enqueue_style('sprayloc-blocks-admin-css', plugins_url('admin-style.css', __FILE__), null, '1.0', 'all');
     // wp_enqueue_style( 'sprayloc-blocks-admin-css', plugins_url( 'build/style-index.css' , __FILE__ ), null, '1.0', 'all');
     wp_enqueue_script('sprayloc-block-admin-js', plugins_url('admin-script.js', __FILE__), null, '1.0', 'all');
 }

 add_action('init', 'enqueueAssets');
 add_action('enqueue_block_editor_assets', 'enqueueAdminAssets');
