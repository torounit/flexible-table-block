/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import { alignLeft, alignRight, alignCenter } from '@wordpress/icons';

export const PREVIEW_TABLE_HEIGHT_MIN = 200;
export const PREVIEW_TABLE_COL_MAX = 100;
export const PREVIEW_TABLE_ROW_MAX = 100;

export const STICKY_CONTROLS = [
	{
		label: __( 'none', 'flexible-table-block' ),
		value: 'none',
	},
	{
		label: __( 'Fixed header', 'flexible-table-block' ),
		value: 'header',
	},
	{
		label: __( 'Fixed first column', 'flexible-table-block' ),
		value: 'first-column',
	},
];

export const BORDER_COLLAPSE_CONTROLS = [
	{
		label: __( 'Share', 'flexible-table-block' ),
		value: 'collapse',
	},
	{
		label: __( 'Separate', 'flexible-table-block' ),
		value: 'separate',
	},
];

export const ALIGNMENT_CONTROLS = [
	{
		icon: alignLeft,
		title: __( 'Align column left', 'flexible-table-block' ),
		value: 'left',
	},
	{
		icon: alignCenter,
		title: __( 'Align column center', 'flexible-table-block' ),
		value: 'center',
	},
	{
		icon: alignRight,
		title: __( 'Align column right', 'flexible-table-block' ),
		value: 'right',
	},
];

export const CELL_ARIA_LABEL = {
	head: __( 'Header cell text', 'flexible-table-block' ),
	body: __( 'Body cell text', 'flexible-table-block' ),
	foot: __( 'Footer cell text', 'flexible-table-block' ),
};

export const SECTION_PLACEHOLDER = {
	head: __( 'Header label', 'flexible-table-block' ),
	foot: __( 'Footer label', 'flexible-table-block' ),
};
