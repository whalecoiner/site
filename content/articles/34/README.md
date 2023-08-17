---
guid: 079c0319-6cb0-4c83-baa0-b79032750146
title: Auto-publishing via npm version
slug: npm-version
date: '2016-10-08T11:30:00+00:00'
changed: '2019-09-24T19:20:49+00:00'
strapline: tl;dr npm version handles semver and publishes for you...
---

So, I'm supposed to be prepping for an interview right now, but I had to write this down before I forget as it is SO FUCKING COOL.

[npm](https://npmjs.org) has an amazing feature called `npm version`. Using an argument your can change the [semver](http://semver.org/) version number in your `package.json` file and automatically create a commit for that new version.

```bash
$ npm version 1.1.5
```

Cool, huh?

Well, it gets cooler...

```bash
$ npm version patch
```

...will automatically increment the patch number in your `package.json`, meaning you don't even have to remember it. Similarly, `npm version minor` and `npm version major` will bump the minor and major versions.

But it gets even cooler. Add the following to your `package.json`:

```json
  "scripts": {
    "postversion": "git push && git push --tags && npm publish"
  }
```

npm will now, after already incrementing and creating a commit, _create a new tag, push the new tag and publish the new version of your package!_

So after I've made some bugfix commits, all I have to do is type

```bash
$ npm version patch
```

and I get a whole new published package, a commit in git and a new release tag.

[Oberaffengeil](https://www.youtube.com/watch?v=AX0X-s2wuaU)!

<div class="o-fixed-ratio">
  <iframe class="o-fixed-ratio__inner" allowfullscreen="0" scrolling="no" width="788" height="443" frameborder="0" src="https://www.youtube.com/embed/AX0X-s2wuaU?autoplay=0"></iframe>
</div>
