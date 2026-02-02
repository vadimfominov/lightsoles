<?php
/*
 * Plugin name: LightSoles
 * Author: Vadim Fominov
 * Author URI: https://t.me/vadimfominov
 * Version: 0.0.3
 */

add_action('enqueue_block_assets', 'fv_block_assets', 1);
function fv_block_assets()
{
	wp_enqueue_script(
		'vadimfominov',
		plugin_dir_url(__FILE__) . 'assets/block.js',
		['wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-api-fetch'],
		filemtime(dirname(__FILE__) . '/assets/block.js')
	);
	wp_enqueue_script(
		'main',
		plugin_dir_url(__FILE__) . 'assets/main.js',
		[],
		filemtime(dirname(__FILE__) . '/assets/main.js'),
		[
			'in_footer' => false,
			'strategy' => 'async'
		]
	);

	wp_localize_script('main-art', 'wpApiSettings', [
		'root' => esc_url_raw(rest_url()),
		'nonce' => wp_create_nonce('wp_rest')
  	]);

	wp_enqueue_style(
		'main',
		plugin_dir_url(__FILE__) . 'assets/main.css',
		[],
		filemtime(dirname(__FILE__) . '/assets/main.css'),
		'screen'
	);

	if (is_admin()) {
		wp_enqueue_style(
			'admin-art',
			plugin_dir_url(__FILE__) . 'assets/admin.css',
			[],
			filemtime(dirname(__FILE__) . '/assets/admin.css'),
			'screen'
		);
	}
	
}
