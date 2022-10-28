export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '635ba75710e8561b25e5f742',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-sktb3ksu',
                  apiId: 'c3202a54-78e7-4e77-b791-ba31d29deb21'
                },
                {
                  buildHookId: '635ba758c9e77814a0b1e40d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-zqqauh3b',
                  apiId: '7650d3e8-69b1-49a2-9137-455dd4fce4f2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ShrutikaAnkam-Techolution/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-zqqauh3b.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
