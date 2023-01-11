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
	let recettes = axios({
        url: QUERY_FUNCTION,
        method: "get"
	}).then((result) => {
		console.log("Numbers of results", result.data.length)
		
		return result.data.map(recette => {

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
				yield: recette.yield
			}

			algoliaObject.tags = recette.tags.map(t => t.name);
			algoliaObject.ingredients = recette.compositions.map(c => c.ingredient[0].name);

			return algoliaObject;
		});      
	});

	console.log("Replacing all objects from Algolia Index...");

	let message = "";

	console.log(recettes);
	//replace all objects from the index
	if(recettes){
		recettes.then(data => {
			index.replaceAllObjects(data).then(({ objectIDs }) => {
				console.log(objectIDs);
			});
		});
		message = "Index updated";
	}
	else{
		message = "Error, recettes is undefined"
	}
	
	/*index
	.saveObjects([newObject])/*
	.wait()
	.then((response) => console.log(response));*/

	// Search the index for "Fo"
	// https://www.algolia.com/doc/api-reference/api-methods/search/
	//index.search("wok").then((objects) => console.log(objects));
		
	return {
        statusCode: 200,
        body: JSON.stringify({message: "Index updated"})
    };
}