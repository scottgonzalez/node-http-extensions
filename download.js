var fs = require( "fs" ),
	http = require( "http" );

exports.download = function( url, path, encoding, callback ) {
	if ( typeof encoding === "function" ) {
		callback = encoding;
		encoding = "utf8";
	}
	encoding = encoding || "utf8";
	http.cat( url, encoding, function( error, content ) {
		if ( error ) {
			if ( callback ) {
				callback( error );
			}
			return;
		}
		
		fs.writeFile( path, content, encoding, callback );
	});
};
