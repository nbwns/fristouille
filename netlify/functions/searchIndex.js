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
	let results = await index.search(
		event.queryStringParameters.query, 
		{
			hitsPerPage: 4,
			filters: event.queryStringParameters.filters,
			attributesToRetrieve: [
				'name',
				'slug',
				'pictureSmall',
				'pictureMedium',
				'diet',
				'tags',
				'authorName',
				'objectID'
				],
			attributesToHighlight: []
		}
	);

	//add cache
//TODO: remove CORS
	return {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
  			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(results.hits)
	};
	
}