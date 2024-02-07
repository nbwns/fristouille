exports.handler = async function(event, context) {
	const dotenv = require("dotenv");
	const Airtable = require("airtable");

	dotenv.config();

	var base = new Airtable({apiKey: process.env.AIRTABLE_TOKEN}).base('appI7jFWaljyfkpVd');
	
	async function getRecordsFromAirtable() {
		let recordsArray = [];
	
		await base('Recettes').select({
			view: "Publiées"
		}).eachPage((records, fetchNextPage) => {
			//transform records
			let recipes = []
			
			try{
				recipes = records.map(r => {
					return {
						recipeId: r.fields.RecipeID,
						name: r.fields.Name,
						description: r.fields.Description || null,
						picture: r.fields.Picture ||null,
						pictureSmall: r.fields.PictureSmall || null,
						pictureMedium: r.fields.PictureMedium || null,
						diet: r.fields.Diet || null,
						preparationTime: r.fields.PreparationTime || null,
						cookTime: r.fields.CookTime || null,
						yield: r.fields.Yield || null,
						procedure: r.fields.Procedure,
						ingredients: r.fields.Ingredients || null || null,
						price: r.fields.Price || null,
						difficulty: r.fields.Difficulty || null,
						months: r.fields.Months || null,
						category: r.fields.Category || null,
						cuisine: r.fields.Cuisine || null,
						free: r.fields.Free || null,
						baseRecipe: r.fields.BaseRecipe || null,
						createdOn: r.fields.CreatedOn,
						prismicPageId: r.fields.PrismicPageId || null,
						slug: r.fields.Slug || null,
						authorName: r.fields.AuthorName[0] || null,
						authorWeb: r.fields.AuthorWeb ? r.fields.AuthorWeb[0] : null,
						source: r.fields.Source || null,
						tagsList: r.fields.TagsList || null,
						compositionsJson: r.fields.CompositionsJSON || null,
						ingredientsList: r.fields.IngredientsList || null
					}
				});
			}
			catch(error){
				console.log(error);
			}			
			
			recordsArray = [...recordsArray, ...recipes];
			fetchNextPage();
		})
			.catch(error => { console.error(error); return false; })
	
		return recordsArray;
	}

	let recipes = await getRecordsFromAirtable();

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