exports.handler = async function(event, context) {
	const dotenv = require("dotenv");
	const axios = require("axios");

	dotenv.config();

	const QUERY_FUNCTION = process.env.QUERY_FUNCTION;

	console.log("Fetching recipes from query function...");
	
	//get recipes 
	return axios({
		url: `${QUERY_FUNCTION}?filter=published`,
		method: "get"
	}).then((result) => {
		console.log("Numbers of results", result.data.length)
		
		let recettes = result.data.map((recette, index) => {

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
				preparationTime: (recette.preparationTime ?? 0)/60,
				cookTime: (recette.cookTime ?? 0)/60,
				totalTime: (parseInt(recette.cookTime ?? 0) + parseInt(recette.preparationTime ?? 0))/60,
				yield: recette.yield,
				baseRecipe: recette.baseRecipe,
				authorName: recette.authorName,
				createdOn: new Date(recette.createdOn).getTime()
			}

			algoliaObject.tags = recette.tagsList;
			algoliaObject.ingredients = recette.ingredientsList;

			return algoliaObject;
		});      


		return recettes;

	}).then((recettes) => {
		console.log("# recettes",recettes.length);
	
	
		//TODO: remove CORS
		return {
			statusCode: 200,
			headers:  {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
				'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(recettes)
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