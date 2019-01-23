#!/usr/bin/env node
const scraper = require('./scraper');
const dl = require('./downloadImages');
const argv = require('minimist')(process.argv.slice(2));

function parseURL(thr, board) {
	thr = thr.toString();
	const expression = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
	const regex = new RegExp(expression);
	if (thr.match(regex)) return thr;
	if (/\d{7}/.test(thr)) return `https://boards.4channel.org/${board}/thread/${thr}`;
}

scraper.crawlThread(parseURL(argv._[0], argv._[1]))
	.then(response => {
		dl.imageDL(response);
	})
	.catch(e => {
		console.log(e);
	});
