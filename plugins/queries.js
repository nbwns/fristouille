const queries = {
    getRecipeDetails(id){
        return `{
            recettes(recipeId: ${id}) {
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
				months
				category
				cuisine
				free
				baseRecipe
				createdOn
				prismicPageId
				slug
				authorName
				tags{
					name
				}
				compositions{
					name
					ingredient{
						name
					}
					quantity
					units
					remark
					optional
				}
            }
        }`
    }
}

export default queries;