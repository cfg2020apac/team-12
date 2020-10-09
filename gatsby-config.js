/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ["gatsby-plugin-postcss", 
  "gatsby-plugin-react-helmet",
  {resolve: `@martinreiche/gatsby-firestore`,
     options: {
       // credential or appConfig
       credential: require(`./credentials.json`),
       appConfig: {
        apiKey: "AIzaSyDzrk0KMpEdFASSX3n0Z_C9X4m-tve3C1k",
        authDomain: "jp-morgan-c945b.firebaseapp.com",
        databaseURL: "https://jp-morgan-c945b.firebaseio.com",
        projectId: "jp-morgan-c945b",
        storageBucket: "jp-morgan-c945b.appspot.com",
        messagingSenderId: "542910140897",
        appId: "1:542910140897:web:f07a946fffffb2407ec2a0",
        measurementId: "G-HZQ4PB8RPC"
       },
       types: [
         {
           type: `Book`,
           collection: `books`,
           map: doc => ({
             title: doc.title,
             isbn: doc.isbn,
             author___NODE: doc.author.id,
           }),
         },
         {
           type: `Author`,
           collection: `authors`,
           map: doc => ({
             name: doc.name,
             country: doc.country,
             books___NODE: doc.books.map(book => book.id),
           }),
         },
       ],
     },
   },
  ],
}
