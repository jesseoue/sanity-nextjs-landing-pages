export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f8808b8e8fce9bdabb6cb97',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sm6e19my',
                  apiId: '93e65780-62c8-44d0-a933-8937934a4d7a'
                },
                {
                  buildHookId: '5f8808b85a048daa402d67ab',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jtnzsmg8',
                  apiId: 'b27c125f-c943-4868-8ee1-be8790c565c5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jesseoue/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jtnzsmg8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
