const request = require('request');
const fs = require('fs');

module.exports = {
	imageDL: obj => {
		for (const i in obj) {
			if (!obj[i].file) continue;
			const currentFileSplit = obj[i].file.split('.');
			request.head(obj[i].file, () => {
				request({ url: obj[i].file, encoding: null, forever: true })
					.on('error', e => { console.log(e); }).pipe(fs.createWriteStream(`${obj[i].id}.${currentFileSplit[currentFileSplit.length - 1]}`))
					.on('close', () => { console.log('File Downloaded!'); });
			});
		}
	}
};


