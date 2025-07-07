exports.handler = async function(event, context) {
    const dotenv = require("dotenv");
    const Prismic = require('@prismicio/client')

	dotenv.config();

    async function getPrismicRoutes() {
        try {
            const client = Prismic.client(process.env.PRISMIC_ENDPOINT)

            const routes = []

            //TODO: améliorer et faire du récursif

            // Top Pages
            const articles = await client.query(
                Prismic.Predicates.at('document.type', 'simplepage'),
                { pageSize: 100 }
            )
            routes.push(...articles.results.map(doc => ({
                url: `/${doc.uid}`,
                changefreq: 'weekly',
                priority: 0.8,
                lastmod: doc.last_publication_date
            })))

            // Childpages astuces
            const astuces = await client.query(
                Prismic.Predicates.at('document.tags', ['astuce']),
                { pageSize: 100 }
            )
            routes.push(...astuces.results.map(doc => ({
                url: `/astuces/${doc.uid}/`,
                changefreq: 'weekly',
                priority: 0.9,
                lastmod: doc.last_publication_date
            })))

            // Childpages about
            const about = await client.query(
                Prismic.Predicates.at('document.tags', ['about']),
                { pageSize: 100 }
            )
            routes.push(...about.results.map(doc => ({
                url: `/a-propos/${doc.uid}`,
                changefreq: 'weekly',
                priority: 0.9,
                lastmod: doc.last_publication_date
            })))

            return routes;

        } catch (error) {
            console.error('Erreur Prismic:', error)
            return []
        }
    }

    let articles = await getPrismicRoutes();

	return {
		statusCode: 200,
		headers:  {
			'Access-Control-Allow-Origin': '*',
			  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
			  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(articles)
	};
}