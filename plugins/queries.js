const queries = {
    generateRecipes(){
        return `{
            recettes(publishingStatus: "Published"){
              name
              recipeId
              slug
              description
              picture
              pictureSmall
              pictureMedium
              diet
              preparationTime
              cookTime
              yield
			  months
              procedure
              ingredients
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
              }
            }
          }`
    },
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
				months
                procedure
                ingredients
                tags{
                  name
                }
                slug
				compositions{
					name
					ingredient{
					  name
					}
					quantity
					units
				}
            }
        }`
    }
}

export default queries;