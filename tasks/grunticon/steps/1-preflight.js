require('rsvp');

module.exports = new RSVP.Promise(function(resolve, reject){
	if( svgCount + pngCount > 0 ){
		// Nice message about PNGs
		if(pngCount > 0){
			if(crushingIt){
				grunt.log.ok(pngCount+' PNG'+(pngCount===1?'':'s')+' => pngcrush => "'+pngDestDir+'"');
			} else {
				grunt.log.ok(pngCount+' PNG'+(pngCount===1?'':'s')+' => "'+pngDestDir+'"');
			}
		} else {
			grunt.log.warn('No PNG files were found.');
		}

		// Nice message about SVGs
		if(svgCount > 0){
			if(crushingIt){
				grunt.log.ok(svgCount+' SVG'+(svgCount===1?'':'s')+' => phantomjs => "'+pngTempDir+'" => pngcrush => "'+pngDestDir+'"');
			} else {
				grunt.log.ok(svgCount+' SVG'+(svgCount===1?'':'s')+' => phantomjs => "'+pngTempDir+'" => "'+pngDestDir+'"');
			}

		} else {
			grunt.log.warn('No SVG files were found.');
		}

		resolve();
	} else {
		grunt.log.error('No SVG or PNG files were found.');
		reject();
	}
});