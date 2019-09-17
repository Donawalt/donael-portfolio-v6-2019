module.exports = {
  siteMetadata: {
    title: `Donaël WALTER`,
    description: `A la recherche d'un contrat de professionnalisation en Webdesign ou Développement Web. DUT MMI DIJON prochainement HETIC. Développeur Front-End Freelance.`,
    author: `Donaël WALTER`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      // CommonMark mode (default: true)
      commonmark: true,
      // Footnotes mode (default: true)
      footnotes: true,
      // Pedantic mode (default: true)
      pedantic: true,
      // GitHub Flavored Markdown mode (default: true)
      gfm: true,
      // Plugins configs
      plugins: [
        {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 4000,
            },
        },
        {
          resolve: "gatsby-remark-embed-video",
          options: {
            width: 800,
            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
            height: 400, // Optional: Overrides optional.ratio
            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            noIframeBorder: true //Optional: Disable insertion of <style> border: 0
        },
      },
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_self",
            rel: "nofollow"
          }
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        'gatsby-remark-copy-linked-files',
        "gatsby-remark-unwrap-images",
        `gatsby-remark-reading-time`,
      ],
    },
  },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Donaël WALTER`,
        short_name: `Donaël WALTER`,
        start_url: `/`,
        background_color: `#bdbdbd`,
        theme_color: `#9a2022`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
}
