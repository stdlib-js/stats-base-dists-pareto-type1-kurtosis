/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Returns the excess kurtosis of a Pareto (Type I) distribution.
*
* ## Notes
*
* -   If `alpha <= 4` or `beta <= 0`, the function returns `NaN`.
*
* @param alpha - shape parameter
* @param beta - scale parameter
* @returns excess kurtosis
*
* @example
* var v = kurtosis( 5.0, 1.0 );
* // returns ~70.8
*
* @example
* var v = kurtosis( 7.0, 12.0 );
* // returns ~24.857
*
* @example
* var v = kurtosis( 8.0, 2.0 );
* // returns ~19.725
*
* @example
* var v = kurtosis( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = kurtosis( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = kurtosis( 2.0, NaN );
* // returns NaN
*
* @example
* var v = kurtosis( NaN, 2.0 );
* // returns NaN
*/
declare function kurtosis( alpha: number, beta: number ): number;


// EXPORTS //

export = kurtosis;
