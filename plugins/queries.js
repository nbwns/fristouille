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
				price
				difficulty
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
				}
				compositionsJson
            }
        }`
    }
}

export default queries;