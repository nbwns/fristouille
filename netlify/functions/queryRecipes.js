exports.handler = async function(event, context) {
    const dotenv = require("dotenv");
    const Airtable = require("airtable");
    dotenv.config();

    let params = null;
    const filter = event.queryStringParameters.filter;
    const sendCompositions = event.queryStringParameters.compositions;

    if(filter === "published"){
        params = {
            view: "Publiées"
        }
    }
    else if(!Number.isNaN(filter)){
        params = {
            filterByFormula: `{recipeId} = '${filter}'` // Correction de la syntaxe
        }
    }
    else{
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({error: "invalid parameter"})
        };
    }

    var base = new Airtable({apiKey: process.env.AIRTABLE_TOKEN}).base('appI7jFWaljyfkpVd');

    async function getRecordsFromAirtable() {
        let recordsArray = [];

        return new Promise((resolve, reject) => {
            base('Recettes').select(params)
            .eachPage(function page(records, fetchNextPage) {
                // Transform records
                let recipes = []
                
                try{
                    if(!sendCompositions){
                        recipes = records.map(r => {
                            return {
                                recipeId: r.fields.RecipeID,
                                name: r.fields.Name,
                                description: r.fields.Description || null,
                                picture: r.fields.Picture || null,
                                pictureSmall: r.fields.PictureSmall || null,
                                pictureMedium: r.fields.PictureMedium || null,
                                diet: r.fields.Diet || null,
                                preparationTime: r.fields.PreparationTime || null,
                                cookTime: r.fields.CookTime || null,
                                yield: r.fields.Yield || null,
                                procedure: r.fields.Procedure,
                                ingredients: r.fields.Ingredients || null,
                                price: r.fields.Price || null,
                                difficulty: r.fields.Difficulty || null,
                                months: r.fields.Months || null,
                                category: r.fields.Category || null,
                                cuisine: r.fields.Cuisine || null,
                                free: r.fields.Free || null,
                                baseRecipe: r.fields.BaseRecipe || null,
                                createdOn: r.fields.CreatedOn,
                                prismicPageId: r.fields.PrismicPageID || null,
                                slug: r.fields.Slug || null,
                                authorName: r.fields.AuthorName ? r.fields.AuthorName[0] : null, // Protection contre undefined
                                authorWeb: r.fields.AuthorWeb ? r.fields.AuthorWeb[0] : null,
                                source: r.fields.Source || null,
                                tagsList: r.fields.TagsList || null,
                                compositionsJson: r.fields.CompositionsJSON || null,
                                ingredientsList: r.fields.IngredientsList || null,
                                compositionsStructuredData: r.fields.CompositionsStructuredData || null
                            }
                        });
                    }
                    else{
                        recipes = records.map(r => {
                            return {
                                recipeId: r.fields.RecipeID,
                                recipeName: r.fields.Name,
                                yield: r.fields.Yield || null,
                                compositionsJson: r.fields.CompositionsJSON || null
                            }
                        });
                    }
                }
                catch(error){
                    console.log(error);
                    reject(error);
                    return;
                }

                recordsArray = [...recordsArray, ...recipes];
                
                // Appel conditionnel de fetchNextPage
                fetchNextPage();
                
            }, function done(err) {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(`Total records retrieved: ${recordsArray.length}`); // Log pour debug
                    resolve(recordsArray);
                }
            });
        });
    }

    try {
        let recipes = await getRecordsFromAirtable();
        
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipes)
        };
    } catch (error) {
        console.error('Error fetching records:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({error: "Failed to fetch records"})
        };
    }
}