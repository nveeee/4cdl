const Nightmare = require('nightmare');
const cheerio = require('cheerio');

module.exports = {
	/**
	 * Returns an array of post objects containing post id, image files, and text
	 * @param {string} thread - URL, thread ID
	 */
	crawlThread: async thr => {
		const nightmare = new Nightmare({ show: false });

		try {
			const posts = await nightmare.goto(thr)
				.wait('.board .thread')
				.evaluate(() => {
					const element = document.querySelector('.thread'); /* eslint no-undef: 0 */
					return element.innerHTML;
				})
				.end()
				.then(threads => {
					const $ = cheerio.load(threads);
					const data = [];
					$('.postContainer').each(function() { /* eslint func-names: 0 */
						data.push({
							id: $(this).attr('id'),
							file: `http:${$(this).children().last()
								.children('.file')
								.children('.fileThumb')
								.attr('href')}`,
							text: $(this).children().last()
								.children('.postMessage')
								.text()
						});
						if (data[data.length - 1].file === 'http:undefined') data[data.length - 1].file = '';
					});
					return data;
				});
			return posts;
		} catch (error) {
			console.error(`${error}`);
		}
	}
};
