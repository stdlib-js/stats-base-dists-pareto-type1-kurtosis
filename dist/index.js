/** @license Apache-2.0 */

'use strict';

/**
* Pareto (Type I) distribution excess kurtosis.
*
* @module @stdlib/stats-base-dists-pareto-type1-kurtosis
*
* @example
* var kurtosis = require( '@stdlib/stats-base-dists-pareto-type1-kurtosis' );
*
* var v = kurtosis( 5.0, 1.0 );
* // returns ~70.8
*
* v = kurtosis( 4.2, 12.0 );
* // returns ~384.095
*
* v = kurtosis( 8.0, 2.0 );
* // returns ~19.725
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
