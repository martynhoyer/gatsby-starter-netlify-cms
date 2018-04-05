module.exports = {
  siteMetadata: {
    title: "Corse Concierge",
    siteUrl: `https://www.corseconcierge.com`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-netlify",
    "gatsby-plugin-netlify-cms",
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "cmsImages"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: []
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Corse Concierge",
        short_name: "Concierge",
        start_url: "/",
        background_color: "#6e408d",
        theme_color: "#6e408d",
        display: "minimal-ui",
        icons: [
          {
            src: "/favicons/android-chrome-36x36.png",
            sizes: "36x36",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-48x48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-72x72.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-96x96.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-256x256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        dir: "/src/svg", // only process this directory
        // svgr options
        icon: false,
        viewBox: true
        // see https://github.com/smooth-code/svgr for a list of all options
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-89672578-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      }
    }
  ]
};
