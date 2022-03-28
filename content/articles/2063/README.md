---
guid: 4ecc680b-a659-455c-a591-c8aefeba60d9
title: Microformats
slug: microformats
created: '2018-09-21T07:42:00+00:00'
changed: '2019-09-24T19:20:46+00:00'
---

> reserve all other single-letter-dash prefixes for future use. In practice we have seen very little (if any) use of single-letter-dash prefixing of class names by web developers/designers, and thus in practice we think this will have little if any impact/collisions. Certainly far fewer than existing generic microformat property class names like "title", "note", "summary".

Ah, well, no. Lots of people use single letter prefixes for CSS. The global company that I work for [does exactly this](https://github.com/springernature/frontend-playbook/blob/master/css/how-we-write-css.md). [Famous web authors use it](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/).

I love the Indieweb, but the "microformats as HTML classes" thing is just something I find really hard to get on board with. They could have used `data` attributes. They could have used a blob of JSON in the head of each page, like schema.org does. But no, they went with something that directly collides with presentational CSS.

You can [read more about this terrible aspect of microformats](http://microformats.org/wiki/events/2010-05-02-microformats-2-0).

I like microformats. I want to use them more. But they feel horribly in collision with CSS authoring practises.
