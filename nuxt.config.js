export default {
	// Be sure this is set to false, or Quasar will not work
	ssr: false,
	mode: "universal",
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || "",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: process.env.npm_package_description || "",
			},
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: "#fff" },
	/*
	 ** Global CSS
	 */
	css: [
		"quasar/src/css/variables.sass", // Import Quasar variables
		"quasar/dist/quasar.sass",
	],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		"~/plugins/quasar.js",
		{ src: "~/plugins/quasar.js", mode: "client" }, // or 'server' for server-side only
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		"@nuxtjs/style-resources",
		"@nuxtjs/axios",
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		transpile: [/^quasar/],
		extend(config, ctx) {},
	},
};
