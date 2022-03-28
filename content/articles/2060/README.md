---
guid: 93edb041-4e5d-4719-94fe-666956da6289
title: IndieWeb Camp Berlin 2018
slug: indieweb-camp-berlin-2018
created: '2018-03-11T20:54:00+00:00'
changed: '2019-09-24T19:20:46+00:00'
---

I've just spent the day at [IndieWeb Camp Berlin](https://indieweb.org/2018/Berlin). It's been so amazing hanging around with some very lovely and clever people, all talking about how the web should be owned by the people who use it, rather than the corporations mining it for data. 

The event is being hosted at Mozilla's Berlin HQ. Those Mozillan's are provided with snacks, drinks and a beautiful view in a way that makes my eyes water with envy. 

Some interesting highlights included...

## Microsub on the indieweb

- [Aaron Parecki](https://aaronparecki.com/) showing off [Aperture](https://aperture.p3k.io) powered by [Microsub](https://indieweb.org/Microsub). 

## Microformats sans CSS

- Microformat entries often collide with CSS, even when prefixed. Especially URL microformat items and CSS utility classes. 
- The fact that it's inside class attribute can make things extremely unclear for devs. "Is this class for styling or for microformats?"
- What if we made it possible to write microformats elsewhere?
- We discussed using 
  - data-attributes: nope. Using them to markup data for external services is apparently invalid according to the spec. 
  - JSON-LD: Violates DRY principle, and is not easily usable by the average person with a website. Requires knowledge of JSON and a way to generate it.
  - `property` attribute: this one passed muster. It was originally intended to be used by [RDFa](https://en.wikipedia.org/wiki/RDFa). But what if we used it to store microformats instead...?

## Data ethics on the indieweb

- Do we assume that people want to publish on your site via webmentions? Is there an implicit contract that says if they send you a webmention then you're free to use that incoming data?
- Or should we assume there are no rights and publishing desires by default and publish web mentions only if some kind of licensing indicator exists?
- How do we deal with licensing of incoming webmentions? via metatags, robots.txt, oembed?
- Is there an implicit right to privacy that web mentions violates?
- How do we determine licensing? Do we effectively created a scorecard of "happiness to publish" based on aforementioned factors?
- Are there regional/cultural differences?
- [adactio](https://adactio.com): "The licensing scorecard is effectively an algorithm, akin to Facebook's and Twitter's. we should be public about that if we pursued it".


## Photos

- How to markup photos, vs how to markup _collections_ of photos? 
- Collections are distinct from groups tagged photos. 
  - Collections are curated and displayed. More analogous to a physical gallery. It's an experience. 
- How to search across indieweb sites for photos, akin to Flickr search? The interesting prospect of searching across sites for all photos of the same tags. 
- Licensing comes up again!
