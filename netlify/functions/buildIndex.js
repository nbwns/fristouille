exports.handler = async function(event, context) {
	const algoliasearch = require("algoliasearch");
	const dotenv = require("dotenv");
	const axios = require("axios");

	dotenv.config();

	const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
	const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
	const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;
	const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
	const QUERY_FUNCTION = process.env.QUERY_FUNCTION;
	console.log("query function", QUERY_FUNCTION);

	// Start the API client
	const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
	// connect to index
	const index = client.initIndex(ALGOLIA_INDEX_NAME);

	console.log("Fetching recipes from query function...");

	//get recipes 
	return axios({
		url: QUERY_FUNCTION,
		method: "get"
	}).then((result) => {
		console.log("Numbers of results", result.data.length)
		
		let recettes = result.data.map((recette, index) => {

			console.log("recipe ID", recette.recipeId);
			console.log("index", index);

			let algoliaObject = {
				objectID: recette.recipeId,
				name: recette.name,
				slug: recette.slug,
				createdOn: recette.createdOn,
				description: recette.description,
				pictureSmall: recette.pictureSmall,
				pictureMedium: recette.pictureMedium,
				diet: recette.diet,
				price: recette.price,
				free: recette.free,
				category: recette.category,
				cuisine: recette.cuisine,
				months: recette.months,
				preparationTime: recette.preparationTime/60,
				cookTime: recette.cookTime/60,
				totalTime: (parseInt(recette.cookTime) + parseInt(recette.preparationTime))/60,
				yield: recette.yield,
				baseRecipe: recette.baseRecipe,
				authorName: recette.authorName,
				createdOn: new Date(recette.createdOn).getTime()
			}

			algoliaObject.tags = recette.tagsList;
			console.log(recette.ingredientsList);
			algoliaObject.ingredients = recette.ingredientsList;

			return algoliaObject;
		});  
		
		return recettes;
	}).then((recettes) => {
		console.log("Replacing all objects from Algolia Index with this amount of records:", recettes.length);
		let message = "Index updated";
		
		if(recettes && recettes.length > 0){
			index.replaceAllObjects(recettes).then(({ objectIDs }) => {
				console.log(objectIDs);
			});
		}
		else{
			message = "Error, no recipes"
		}

		return {
			statusCode: 200,
			headers:  {
				'Access-Control-Allow-Origin': '*',
				  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
				  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({message: message})
		};
	})
	.catch(error => {
		return {
			statusCode: 500,
			body: JSON.stringify({
			  error: error.message
			})
		  }
	});	
}