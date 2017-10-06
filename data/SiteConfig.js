module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: "Irfan Maulana's Blog", // Site title.
  siteTitleAlt: "Pelajari, Tulis, Kemudian Bagikan", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://mazipan.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-blog", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A GatsbyJS stater with Advanced design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-25065548-2", // GA tracking ID.
  disqusShortname: "mazipan-github-io", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Irfan Maulana", // Username to display in the author segment.
  userTwitter: "Maz_Ipan", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Jakarta, Indonesia", // User location to display in the author segment.
  userAvatar: "https://avatars1.githubusercontent.com/u/7221389?v=4&s=100", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/mazipan/",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Maz_Ipan",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:mazipanneh@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Irfan Maulana", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#9b4dca", // Used for setting manifest and progress theme colors.
  backgroundColor: "#fff" // Used for setting manifest background color.
};
