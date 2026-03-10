;(function($, window, document) {

	const block = $('div.usertopiccount-hidden').contents();
	if (!block.length) return;

	const details = $('div.panel div.column2 dl.details');

	details.find('dt').each(function () {

		const txt = $(this).text().replace(':','').trim().toLowerCase();

		if (txt === 'messages' || txt === 'total posts') {

			$(this).before(block);
			return false;
		}

	});

})(jQuery, window, document);
