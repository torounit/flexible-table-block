/**
 * Sanitize the value of UnitControl.
 *
 * @param  value UnitControl value.
 * @return Sanitized UnitControl value.
 */
export function toUnitVal( value: string ): string {
	const parsedValue: number = parseFloat( value );

	if ( isNaN( parsedValue ) || 0 > parsedValue ) {
		return '';
	} else if ( parsedValue === 0 ) {
		return '0';
	}

	return value;
}

/**
 * Parses a number and unit from a value.
 *
 * @param  initialValue Value to parse
 * @return The extracted number and unit.
 */
export function parseUnit( initialValue: string ): [ number, string ] {
	const value: string = String( initialValue ).trim();
	const num: number = parseFloat( value );

	if ( isNaN( num ) ) {
		return [ 0, '' ];
	}

	const unit: string = value.match( /[\d.\-+]*\s*(.*)/ )?.[ 1 ] ?? '';

	return [ num, unit.toLowerCase() ];
}
