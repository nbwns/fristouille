exports.handler = async function(event, context) {
	const algoliasearch = require("algoliasearch");
	const dotenv = require("dotenv");
	const axios = require("axios");

	dotenv.config();

	const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
	const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
	const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;
	const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;

	// Start the API client
	const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
	// connect to index
	const index = client.initIndex(ALGOLIA_INDEX_NAME);

	//get recipes 
	let recettes = axios({
        url: GRAPHQL_ENDPOINT,
        method: "post",
        data: {
          query: `{
            recettes(publishingStatus: "Published"){
              name
              recipeId
              slug
			  createdOn
              description
              pictureSmall
              diet
			  price
              preparationTime
              cookTime
              yield
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
	}).then((result) => {
        return result.data.data.recettes.map(recette => {

			let algoliaObject = {
				objectID: recette.recipeId,
				name: recette.name,
				slug: recette.slug,
				createdOn: recette.createdOn,
				description: recette.description,
				pictureSmall: recette.pictureSmall,
				diet: recette.diet,
				price: recette.price,
				preparationTime: recette.preparationTime/60,
				cookTime: recette.cookTime/60,
				yield: recette.yield
			}

			algoliaObject.tags = recette.tags.map(t => t.name);
			algoliaObject.ingredients = recette.compositions.map(c => c.ingredient[0].name);

			return algoliaObject;
        });        
	});

	//replace all objects from the index
	recettes.then(data => {
		index.replaceAllObjects(data).then(({ objectIDs }) => {
			console.log(objectIDs);
		});
	});
	
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