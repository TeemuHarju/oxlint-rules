const fs = require( "fs" );

// n/no-deprecated-api
fs.exists( "./foo.js",
	() => {} );

const validateEmailFormat = function( string ) {

	// security/detect-unsafe-regexp
	const emailExpression = /^([\w.\-])+@(([\dA-Za-z\-])+\.)+([\dA-Za-z]{2,4})+$/;

	return emailExpression.test( string );
};

const somethingBadHappened = true;

if( somethingBadHappened ) {
	console.error( "Something bad happened!" );

	// n/no-process-exit
	process.exit( 1 );
}
