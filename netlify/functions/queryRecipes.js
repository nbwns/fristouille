exports.handler = async function(event, context) {
	const dotenv = require("dotenv");
	const axios = require("axios");

	dotenv.config();

	const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;

	console.log("Fetching recipes from Airtable...");

	let pages = [1,2,3,4];

	let recipes = [];
	for (const page in pages) {
		const result = await axios({
			url: GRAPHQL_ENDPOINT,
			method: "post",
			data: {
			query: `{
				recettes(
					_page_size: 100,
					_page: ${page},
					_filter: {
						publishingStatus:{
						_eq: "Published"
					  }
				  }){
					name
					recipeId
					slug
					createdOn
					description
					pictureSmall
					pictureMedium
					diet
					price
					preparationTime
					cookTime
					yield
					free
					category
					cuisine
					months
					tags{
						name
					}
					compositions{
						ingredient{
							name
						}
					}
				}
			}`,
		}
		});
		recipes = [...recipes, ...result.data.data.recettes];
	}

	console.log(recipes.length);
		
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