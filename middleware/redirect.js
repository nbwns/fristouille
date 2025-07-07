function redirectFromRecettes(route) {
	console.log("redirect ?", route);
	const recettesRegex = /^\/recettes\/(.*)$/;
	const match = route.match(recettesRegex);
	
	if (match) {
	  const param = match[1];
	  const redirectUrl = `/recettes/?q=${param}`;
	  return redirectUrl;
	}
	
	return route; // Retourne la route inchangée si elle ne correspond pas au schéma "/recettes/..."
}

export default function ({ route, redirect }) {
	const redirectUrl = redirectFromRecettes(route.path);
  
	if (redirectUrl !== route.path) {
		return redirect(redirectUrl);
	}
  }