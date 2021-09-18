/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { link, linkOff } from '@wordpress/icons';
import { useState } from '@wordpress/element';
import {
	BaseControl,
	Button,
	Tooltip,
	__experimentalText as Text,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import { SIDES, SideIndicatorControl } from '../indicator-control';

const PADDING_UNITS = [ 'px', '%', 'em', 'rem', 'vw', 'vh' ];

const DEFAULT_VALUES = {
	top: null,
	right: null,
	bottom: null,
	left: null,
};

export default function PaddingControl( { id, onChange, values: valuesProp } ) {
	const values = {
		...DEFAULT_VALUES,
		...valuesProp,
	};

	const isMixed = ! (
		values.top === values.right &&
		values.top === values.bottom &&
		values.top === values.left
	);

	const borderWidthUnits = useCustomUnits( {
		availableUnits: PADDING_UNITS,
	} );

	const [ isLinked, setIsLinked ] = useState( true );
	const [ side, setSide ] = useState( undefined );

	const headingId = `${ id }-heading`;

	const linkedLabel = isLinked
		? __( 'Unlink Sides', 'flexible-table-block' )
		: __( 'Link Sides', 'flexible-table-block' );

	const allInputPlaceholder = isMixed ? __( 'Mixed', 'flexible-table-block' ) : undefined;
	const allInputValue = isMixed ? undefined : values.top;

	const toggleLinked = () => {
		setIsLinked( ! isLinked );
		setSide( undefined );
	};

	const handleOnReset = () => {
		setIsLinked( true );
		onChange( {
			top: null,
			right: null,
			bottom: null,
			left: null,
		} );
	};

	const handleOnFocus = ( focusSide ) => () => {
		setSide( focusSide );
	};

	const handleOnChangeAll = ( inputValue ) => {
		onChange( {
			top: inputValue,
			right: inputValue,
			bottom: inputValue,
			left: inputValue,
		} );
	};

	const handleOnChange = ( inputValue, targetSide ) => {
		onChange( {
			...values,
			[ targetSide ]: inputValue,
		} );
	};

	return (
		<BaseControl className="ftb-border-width-control" id={ id } aria-labelledby={ headingId }>
			<div className="ftb-border-width-control__header">
				<Text id={ headingId }>{ __( 'Padding', 'flexible-table-block' ) }</Text>
				<Button isSecondary isSmall onClick={ handleOnReset }>
					{ __( 'Reset' ) }
				</Button>
			</div>
			<div className="ftb-border-width-control__header-control">
				<SideIndicatorControl sides={ side === undefined ? undefined : [ side ] } />
				{ isLinked && (
					<UnitControl
						placeholder={ allInputPlaceholder }
						aria-label={ __( 'All', 'flexible-table-block' ) }
						onFocus={ handleOnFocus }
						onChange={ handleOnChangeAll }
						value={ allInputValue }
						units={ borderWidthUnits }
					/>
				) }
				<Tooltip text={ linkedLabel }>
					<span>
						<Button
							variant={ isLinked ? 'primary' : 'secondary' }
							isSmall
							onClick={ toggleLinked }
							icon={ isLinked ? link : linkOff }
							iconSize="16"
						/>
					</span>
				</Tooltip>
			</div>
			{ ! isLinked && (
				<div className="ftb-border-width-control__input-controls">
					{ SIDES.map( ( item ) => {
						return (
							<UnitControl
								key={ item.value }
								aria-label={ item.label }
								onFocus={ handleOnFocus( item.value ) }
								onChange={ ( value ) => {
									handleOnChange( value, item.value );
								} }
								value={ values[ item.value ] }
								units={ borderWidthUnits }
							/>
						);
					} ) }
				</div>
			) }
		</BaseControl>
	);
}