const unused = 1;

export interface Foo {
    bar: string;
}

/**
 * Test function that logs the provided parameter.
 *
 * @param {string} param - The parameter to log.
 */
export async function test( param: string ) {
	await console.log( param );
}

