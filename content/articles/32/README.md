---
guid: 2fda4728-8740-44a0-96c8-3954b2f6827a
title: Deploying a compiled site to a personal Github Pages account
slug: deploying-a-compiled-site-to-github-pages
date: '2016-09-20T15:57:00+00:00'
changed: '2019-09-24T19:20:51+00:00'
strapline: >-
  Personal Github Pages only allow either static sites or Jekyll as a source,
  not both.
---

Having recently switched to using [Github Pages](https://pages.github.com/) to host this site I thought I'd quickly note down how I overcame some of the limitations of the Github Pages when it comes to using modern build processes.

Github Pages is a free [Jekyll-based](https://jekyllrb.com/) hosting service offered by Github. You can create a repository called WHATEVER.github.io and via a lot of internal magic a static website of the same name appears, built from the Jekyll project hosted there. It's Github taking over the build process step for you.

Difficulties arise when you hit some of the limits imposed by Github Pages on the way Jekyll can be used. For security reasons Github [doesn't allow most third-party gems to be run](https://help.github.com/articles/adding-jekyll-plugins-to-a-github-pages-site/) on Github Pages, nor does it allow any Gulp/Grunt/npm build scripts to be run on their servers. This is totally understandable - that kind of stuff would be a huge security nightmare.

The lack of third-party gems and build scripts means that a lot of modern [website build techniques](https://css-tricks.com/gulp-for-beginners/) are not available to people using Github Pages. For example, there is no way to get CSS auto-prefixing to work on there, as the [Autoprefixer gem](https://github.com/ai/autoprefixer-rails) is not allowed, nor can you run Autoprefixer via [Postcss](https://github.com/postcss/autoprefixer) on their server.

Okay, yeah, you could set up your site in such a way as to generate your compiled Jekyll pages and CSS into a static site, intermixed with your Jekyll code and store that on your github account. You'd also have to pull in all your npm/Bower dependencies and store them in your repo as well. A working solution, but not an elegant solution one.

But there is another way. You can still use Jekyll, and your modern build process, but you _only_ publish the compiled static site to Github pages.

The trick is to use two repositories, hosting your automated, advanced, super-whizzy site source on a separate repository from your WHATEVER.githubpages.io repository. You then use a script to build a static site from your source and publish the generated static site as a commit to your WHATEVER.githubpages.io repository. You then get the advantages of Jekyll as a CMS, a modern build process from Gulp/Grunt, no compiled CSS in your source repo and you get to bypass the build limitations of Github Pages.

The easiest way to do this is with the [gulp-gh-pages](https://github.com/shinnn/gulp-gh-pages) npm package. It allows you to specify a build directory where your compiled site is built to and a repository where the site should be pushed. It will then take this compiled site, clone it to another folder, and create a commit from everything in that folder, pushing it to Github.

This package can also be used on organisational and project Github pages, which allow a branch on the same repository to be used as a source for serving the site (I'm unsure why Github don't allow this on Personal sites). In that case you specify the same repo, but use a different branch (by default it's `gh-pages`) to serve your static site.

Check out the [source for this site](https://github.com/SonniesEdge/sonniesedge-website), compared to the compiled code in the [sonniesedge.github.io repository](https://github.com/SonniesEdge/sonniesedge.github.io) to see the difference and to note the [build/deploy script](https://github.com/SonniesEdge/sonniesedge-website/blob/master/gulpfile.js) used to produce one from the other.
