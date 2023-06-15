exports.handler = async function(event, context) {
	const dotenv = require("dotenv");
	const axios = require("axios");

	dotenv.config();

	const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;

	console.log("Fetching recipes from Airtable...");

	const pageSize = 100;
	let itemsLength = 350;
	let numberOfPages = parseInt(itemsLength / pageSize);
	let pages = [...Array(numberOfPages).keys()];

	let recipes = [];
	for (const page in pages) {
		const result = await axios({
			url: GRAPHQL_ENDPOINT,
			method: "post",
			data: {
			query: `{
				recettes(
					_page_size: ${pageSize},
					_page: ${page},
					_filter: {
						publishingStatus:{
						_eq: "Published"
					  }
				  }){
					recipeId
					name
					description
					picture
					pictureSmall
					pictureMedium
					diet
					preparationTime
					cookTime
					yield
					procedure
					ingredients
					price
					difficulty
					months
					category
					cuisine
					free
					baseRecipe
					createdOn
					prismicPageId
					slug
					authorName
					authorWeb
      				source
					tags{
						name
					},
					compositionsJson,
    				ingredientsList
				}
			}`,
		}
		});
		recipes = [...recipes, ...result.data.data.recettes];
	}

	console.log(recipes.length);
		//TODO: remove CORS
	return {
        statusCode: 200,
		headers:  {
			'Access-Control-Allow-Origin': '*',
  			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
			'Content-Type': 'application/json'
		},
        body: JSON.stringify(recipes)
    };
	  
}