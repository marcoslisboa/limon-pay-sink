export default {
  widgets: [
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
                  buildHookId: '60b93edf0d105946e94b1db5',
                  title: 'Sanity Studio',
                  name: 'limon-pay-sink-studio',
                  apiId: 'ad8fdce2-4ffc-44e0-baf9-a5affe351f35'
                },
                {
                  buildHookId: '60b93edff446a244d8b49333',
                  title: 'Blog Website',
                  name: 'limon-pay-sink',
                  apiId: '2ff40b71-1776-4aa3-a925-0eca3517005d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcoslisboa/limon-pay-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://limon-pay-sink.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
