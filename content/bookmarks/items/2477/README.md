---
guid: 838bf51a-851c-4635-ace5-0a2219702c64
title: AddyOsmani.com - Native image lazy-loading for the web!
date: '2019-04-07T09:18:22+00:00'
changed: '2019-09-24T14:32:55+00:00'


bookmark_of: 'https://addyosmani.com/blog/lazy-loading/'
---

> Web pages often contain a large number of images, which contribute to data-usage, page-bloat and how fast a page can load. Many of these images are offscreen, requiring a user to scroll in order to view them.

> Historically, to limit the impact offscreen images have on page load times, developers have needed to use a JavaScript library in order to defer fetching these images until a user scrolls near them.

These features are now coming natively to Chrome, and I hope to other browsers soon after. 

Looks like it will be polyfillable, especially if we stick to the strategy of serving non-critical images via a very low-resolution file in 'src' and progressively enhancing as features become available. 
