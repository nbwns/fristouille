exports.handler = async function(event, context) {
	const dotenv = require("dotenv");
	const Airtable = require("airtable");

	dotenv.config();

	let params = null;
	
	params = {
		view: "RecipeCategories page"
	}

	var base = new Airtable({apiKey: process.env.AIRTABLE_TOKEN}).base('appI7jFWaljyfkpVd');
	
	async function getRecordsFromAirtable() {
		let recordsArray = [];
	
		await base('Ingrédients').select(params)
		.eachPage((records, fetchNextPage) => {
			//transform records
			let ingredients = []
			
			try{
				ingredients = records.map(r => {
					return {
						name: r.fields.Name,
						aisle: r.fields.Aisle,
					}
				});
			}
			catch(error){
				console.log(error);
			}			
			
			recordsArray = [...recordsArray, ...ingredients];
			fetchNextPage();
		})
			.catch(error => { console.error(error); return false; })
	
		return recordsArray;
	}

	let ingredients = await getRecordsFromAirtable();

	return {
		statusCode: 200,
		headers:  {
			'Access-Control-Allow-Origin': '*',
			  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
			  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(ingredients)
	};
	  
}