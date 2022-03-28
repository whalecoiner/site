---
guid: 6ff47013-48a1-4eca-8e6e-a32f68df5c24
title: Inlining critical CSS
slug: inlining-critical-css
created: '2014-10-27T10:00:00+00:00'
changed: '2019-09-24T19:20:51+00:00'
strapline: Sticking some nitro up your CSS.
---

Lately I've been playing with <a href="https://github.com/filamentgroup/loadCSS">LoadCSS</a> from Filament Group. It's a wonderful system for asynchronously loading CSS, therefore removing a blocking resource from your page loads.

The only snag I've hit with it is the FOUC - a Flash Of Unstyled Content, caused by the HTML of the site loading before the heavier CSS asynchronously loads. To get around this there are known techniques for <a href="https://developers.google.com/speed/pagespeed/service/PrioritizeCriticalCss">inlining critical CSS</a> in the header of a page.

A sprinkle of critical CSS in the header ameliorates the FOUC, and while the page still has to redraw after the heavy CSS finishes loading, the effect is nowhere near as noticeable as going from totally unstyled to fully styled in one flash. It comes across more as a progressive load, than as a whoah-what-the-fuck-was-that?

Many articles advocate analysing a page to determine what critical CSS needs to be inlined, so as to prevent a FOUC. This is a lot of faff, requiring analysis of each page of a site and rebuilds whenever a page or CSS changes.

## Taking control

Personally, I think it's better to manually control critical CSS. By having a critical.css stylesheet, styles that form the backbone of a site - typography, spacing, perhaps some basic grids - can be pulled in from Sass components.

```bash

|- critical.scss
|-- _normalize.scss
|-- _typography.scss
|-- _simplegrids.scss

|- main.scss
|-- _grids.scss
|-- _component-1.scss
|-- _component-2.scss
|-- etc
|-- etc
|-- etc
|-- etc

```

These can then be referenced as usual from your HTML.

```html
<link rel="stylesheet" href="/theme/css/critical.css">
```

"But hang on", you say, "the critical.css stuff still isn't inlined, is it, you twonk?". You're correct, my friend. To inline the critical.css we need to turn to a Grunt plugin to help us out.

There are a few plugins out there that purport to inline critical CSS files. I've tried a few, eager to get my personal site blazing fast. But sadly none of them seem to work as advertised. They either try to do too much (inlining <em>all</em> CSS) or try to keep it simple, but break on such simple thinks as file-globbing.

To that end, I've ended up writing my own. Say hello to <a href="https://www.npmjs.org/package/grunt-inlinestyles">grunt-inlinestyles</a>! It's a simple Grunt plugin that looks for any links to stylesheets that include the data-attribute "data-inline". If it finds it, it inlines the CSS directly into the HTML.

It still needs some work to be perfect. At the moment it only works on pure HTML files. I'll be improving it soon so that it works on generic HTML templates (such as those found in Rails, Drupal, Wordpress), but currently it works just great on smaller static-site generators.

It also requires you to do some analysis of what is considered critical on your site - it won't do this for you. But I consider this its strength - learning what aspects of your CSS are critical, and which are not can only lead to more efficient and well-structure sites.

Please, try <a href="https://www.npmjs.org/package/grunt-inlinestyles">grunt-inlinestyles</a> out and let me know what you think.

## Resources
- <a href="https://www.npmjs.org/package/grunt-inlinestyles">https://www.npmjs.org/package/grunt-inlinestyles</a>
- <a href="https://github.com/filamentgroup/loadCSS">https://github.com/filamentgroup/loadCSS</a>
