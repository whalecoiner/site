---
guid: af35d454-9564-4557-9bb9-5883ec40b61e
title: Bypassing Jekyll via Grunt
slug: bypassing-jekyll-your-grunt-tasks
date: '2014-09-06T09:00:00+00:00'
changed: '2019-09-24T19:20:54+00:00'
strapline: Just do an end run around it
---

Like many front-end people, I find myself mostly working on stylesheet files, rather than the actual HTML structure of a site.

My build process is pretty basic - Grunt Watch is running and upon detection of a change to the site's file structure it builds out the site, and triggers a livereload event. This is ace, and lets me work in my editor, while watching the changes occurring in all devices currently accessing that page.

But when we're just modifying Sass, we don't want the whole of Jekyll to run. Jekyll is ace, but good lord, it's slow. Slow in this context is a few seconds, which, when I'm using libsass for Sass files, makes it seem like the ages between which stars and galaxies are born.

The solution is to generate files as normal with libsass. When my watch task sees that they've changed it generates the CSS directly into the deploy directory and triggers a live reload.

However, and here's the tricksy bit, we need to have a Grunt watch task running on the *deployed* CSS files. When Grunt-watch sees that they have changed it triggers livereload, but livereload updates *only the CSS on the page* via a [style injection](http://css-tricks.com/style-injection-is-for-winners/). It doesn't reload the entire page. You can use those saved milliseconds to spend time with your loved ones.

Total time for stylesheet generation? 0.8 seconds. :)
