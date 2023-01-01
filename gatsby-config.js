/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/src/images/`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `projects`,
            path: `${__dirname}/src/projects/`,
        },
    }
  ],
  siteMetadata: {
        title: "Web Warrior",
        description: "Web Dev Portfolio",
        copyright: "Copyright © 2022 | Web Warrior",
        contact: 'me@email.com'
  }
}
