# A statically generated blog example using Next.js, Markdown, and TypeScript

This is the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) plus TypeScript.

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

## Deploy

- Deploy to Vercel.
- GitHub Pages can't support displaying the pictures in the assets folder. I tried to fix it by adding `basePath` to `next.config.js` but no luck.

## To-do

- [ ] It has some problem with the markdown to html format such as the title and list marker, wait to check.