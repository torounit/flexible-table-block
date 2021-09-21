<?php
/**
 * Plugin Name: Flexible Table Block
 * Description: A block that allows you to create flexible configuration tables.
 * Version: 2.0.0
 * Author: Tetsuaki Hamano
 * Author URI: https://github.com/t-hamano
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: flexible-table-block
 * @package flexible-table-block
 * @author Tetsuaki Hamano
 * @license GPL-2.0+
 */

defined( 'ABSPATH' ) || exit;

define( 'FTB_BLOCK_CLASS', 'wp-block-flexible-table-block-table' );
define( 'FTB_NAMESPACE', 'flexible-table-block' );
define( 'FTB_OPTION_PREFIX', 'flexible_table_block' );
define( 'FTB_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'FTB_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );

require_once __DIR__ . '/classes/class-init.php';

new flexible_table_block\Init();
