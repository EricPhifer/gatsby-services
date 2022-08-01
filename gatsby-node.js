// const path = require('path');

// exports.createPages = async ({graphql, actions}) => {
//     const { createPage } = actions
//     const result = await graphql(`
//             query {
//                 sites: allSanitySitetemplates {
//                     nodes {
//                         title
//                         slug {
//                             current
//                         }
//                     }
//                 }
//             }
//         `)

//     result.data.sites.nodes.forEach((node) => {
//         createPage({
//             path: `/sitetemplates/${node.slug.current}`,
//             component: path.resolve('./src/templates/Sites.js'),
//             context: {
//                 name: node.title,
//                 slug: node.slug.current,
//             }
//         })
//     });
// }