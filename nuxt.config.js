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
    '@/assets/css/stylesheets.css',
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/queries', '@/plugins/vue-instantsearch.js', { src: '~/plugins/pwa-update.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  publicRuntimeConfig: {
    graphqlEndpoint: process.env.GRAPHQL_ENDPOINT,
	algoliaApiKey: process.env.ALGOLIA_API_KEY,
	algoliaAppId: process.env.ALGOLIA_APP_ID,
	searchIndexFunction: process.env.SEARCH_INDEX_FUNCTION,
	queryFunction: process.env.QUERY_FUNCTION,
	baseUrl: process.env.BASE_URL
  },
  privateRuntimeConfig: {

  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
	  '@nuxt/postcss8',
    'vue-ssr-carousel/nuxt',
	'@nuxt/image'
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

  router: {
    middleware: ['redirect']
  },

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
			}
		  }
		]
	  },
  },

  image: {    
	domains: ['fristouille.blob.core.windows.net']
  },

  eslint: {
    failOnWarning: false,
    failOnError: false
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  loading: {
    color: '#FC762B',
    height: '8px'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Fristouille',
      short_name: 'Fristouille',
      description: 'La cuisine durable tout en simplicité',
      orientation: 'portrait',
      lang: 'fr-BE',
      useWebmanifestExtension: false,
      theme_color: '#FC762B',
      background_color: '#2D1F2E',
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
	transpile: ["vue-slicezone", "nuxt-sm", 'vue-instantsearch', 'instantsearch.js/es'],
  // css: ['~/assets/css/main.css'],
  postcss: {
        postcssOptions: {	
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
      },
    },
  },
  storybook: {
    // This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
    stories: [...getStoriesPaths().map(path => path.replace("../", "~/"))]
  },
  // This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
  ignore: [...getStoriesPaths().map(path => path.replace("../", "~/"))],

  
 router: {
    prefetchLinks: false
  },

  generate: {
    routes(){
      console.log("generate");
      console.log("query function", process.env.QUERY_FUNCTION);
      let recettes = axios({
        url: process.env.QUERY_FUNCTION,
        method: "get",
        // data: {
        //   query: queries.generateRecipes(),
        // }
      }).then((result) => {
        return result.data.map(recette => {
          console.log(recette)
          return {
            route: `Recette/${recette.slug}/${recette.recipeId}`,
            payload: recette
          }
        })        
      });

      return Promise.all([recettes]).then((values) => {
        console.log(values[0]);
        return values[0];
      });
    },
    fallback: '404.html',
	crawler: false
  }
}
