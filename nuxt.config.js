import axios from 'axios';
import queries from './plugins/queries';
import smConfig from "./sm.json";
import { getStoriesPaths } from "slice-machine-ui/helpers/storybook";
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fristouille',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/main.css',
	'assets/css/stylesheets.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/queries', '@/plugins/vue-instantsearch.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  publicRuntimeConfig: {
    graphqlEndpoint: process.env.GRAPHQL_ENDPOINT,
	algoliaApiKey: process.env.ALGOLIA_API_KEY,
	algoliaAppId: process.env.ALGOLIA_APP_ID,
	searchIndexFunction: process.env.SEARCH_INDEX_FUNCTION
  },
  privateRuntimeConfig: {

  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
	["@nuxtjs/prismic", {
		endpoint: smConfig.apiEndpoint || "",
	  }], ["nuxt-sm"]
  ],

  prismic: {
    endpoint: "https://fristouille.cdn.prismic.io/api/v2",
    linkResolver: "@/plugins/link-resolver",
    htmlSerializer: "@/plugins/html-serializer",
	apiOptions: {
		routes: [
		  { type: 'homepage', path: '/' },
		  { type: 'simplepage', path: '/:uid' },
		  {
			type: 'childpage',
			path: '/:section/:uid',
			resolvers: {
			  // A list of "path variables" mapped to the API ID
			  // of a Content Relationship field in the Custom Type.
			  section: 'parent_page'
			},
		  }
		]
	  },
  },

  eslint: {
    failOnWarning: false,
    failOnError: false
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
	transpile: ["vue-slicezone", "nuxt-sm", 'vue-instantsearch', 'instantsearch.js/es']
  },
  storybook: {
    // This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
    stories: [...getStoriesPaths().map(path => path.replace("../", "~/"))]
  },
  // This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
  ignore: [...getStoriesPaths().map(path => path.replace("../", "~/"))],

  generate: {
    routes(){
      console.log("generate")
      let recettes = axios({
        url: process.env.GRAPHQL_ENDPOINT,
        method: "post",
        data: {
          query: queries.generateRecipes(),
        }
      }).then((result) => {
        return result.data.data.recettes.map(recette => {
          console.log(recette)
          return {
            route: `Recette/${recette.slug}/${recette.recipeId}`,
            payload: recette
          }
        })        
      });

      return Promise.all([recettes]).then((values) => {
        console.log(values);
        return values[0];
      });
      
     
    },
    fallback: '404.html'
  }
}
