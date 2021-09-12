/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';

export default function CellsSettings() {
	return (
		<PanelBody
			title={ __( 'Cells Settings', 'flexible-table-block' ) }
			initialOpen={ false }
		></PanelBody>
	);
}
