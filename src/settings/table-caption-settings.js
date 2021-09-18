/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	BaseControl,
	Button,
	ButtonGroup,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import { FONT_SIZE_UNITS, ALIGNMENT_CONTROLS } from '../constants';
import { toUnitVal } from '../utils/helper';

export default function TableCaptionSettings( { attributes, setAttributes } ) {
	const { captionFontSize, captionSide, captionAlign } = attributes;

	const fontSizeUnits = useCustomUnits( {
		availableUnits: FONT_SIZE_UNITS,
	} );

	const onChangeCaptionFontSize = ( value ) => {
		setAttributes( { captionFontSize: toUnitVal( value ) } );
	};

	const onChangeCaptionSide = ( value ) => {
		setAttributes( { captionSide: value } );
	};

	const onChangeCaptionAlign = ( value ) => {
		setAttributes( {
			captionAlign: value === captionAlign ? undefined : value,
		} );
	};

	return (
		<>
			<BaseControl
				label={ __( 'Font size', 'flexible-table-block' ) }
				id="flexible-table-block/caption-font-size"
			>
				<UnitControl
					min="0"
					value={ captionFontSize }
					onChange={ onChangeCaptionFontSize }
					units={ fontSizeUnits }
				/>
			</BaseControl>
			<BaseControl
				label={ __( 'Position', 'flexible-table-block' ) }
				id="flexible-table-block/caption-side"
			>
				<ToggleGroupControl
					value={ captionSide }
					onChange={ ( value ) => onChangeCaptionSide( value ) }
				>
					<ToggleGroupControlOption value="top" label={ __( 'Top', 'flexible-table-block' ) } />
					<ToggleGroupControlOption
						value="bottom"
						label={ __( 'Bottom', 'flexible-table-block' ) }
					/>
				</ToggleGroupControl>
			</BaseControl>
			<BaseControl
				label={ __( 'Text alignment', 'flexible-table-block' ) }
				id="flexible-table-block/caption-align"
			>
				<ButtonGroup className="ftb-button-group">
					{ ALIGNMENT_CONTROLS.map( ( { icon, label, value } ) => {
						return (
							<Button
								key={ value }
								label={ label }
								variant={ value === captionAlign ? 'primary' : 'secondary' }
								icon={ icon }
								onClick={ () => onChangeCaptionAlign( value ) }
							/>
						);
					} ) }
				</ButtonGroup>
			</BaseControl>
		</>
	);
}