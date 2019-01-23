const scraper = require('../scraper');
const fs = require('fs');

const thread = 'https://boards.4channel.org/c/thread/3349705';
scraper.crawlThread(thread)
	.then(response => {
		const format = JSON.stringify(response, null, 4);
		fs.writeFileSync('thread.json', format, 'utf-8');
	}).catch(e => console.log(e));
