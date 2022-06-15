exports.handler = async function(event, context) {
	const algoliasearch = require("algoliasearch");
	const dotenv = require("dotenv");

	dotenv.config();

	const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
	const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
	const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

	// Start the API client
	const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
	// connect to index
	const index = client.initIndex(ALGOLIA_INDEX_NAME);

	//Search Algolia Index based on the query passed to the function
	let results = await index.search(event.queryStringParameters.query, {
		hitsPerPage: 4,
		attributesToRetrieve: [
			'name',
			'slug',
			'pictureSmall',
			'diet'
			],
		attributesToHighlight: []
	});

	//add cache

	return {
		statusCode: 200,
		body: JSON.stringify(results.hits)
	};
	
}