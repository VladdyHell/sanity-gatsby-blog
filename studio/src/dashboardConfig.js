export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "629eee43a287112e7a95a61c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-zeyqf2ss",
                  apiId: "245f3cfb-f98d-4975-a360-8bcda490df26",
                },
                {
                  buildHookId: "629eee43a287112e7a95a61d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-6w4esy73",
                  apiId: "d58a5d2d-c736-4905-a85e-2eaf60821471",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/VladdyHell/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-6w4esy73.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
