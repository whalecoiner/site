---
guid: 1b014af4-db69-4008-ad8f-db884df5a4a6
title: A day without JavaScript
slug: a-day-without-javascript
date: '2017-06-07T10:00:00+00:00'
changed: '2019-09-24T19:20:46+00:00'
strapline: What could go wrong?

sections:
  - feedly
  - 24ways
  - amazon
  - bbcnews
  - googlechrome
  - googlemaps
  - googlesearch
  - netflix
  - nytimes
  - twitter
  - wikipedia
  - youtube
  - conclusion
---

As I write this it's raining outside, and I'm trying to avoid having to go out into the murk and watch the Germans conduct their annual [diversity maneuvers](http://www.karneval-berlin.de/en/). I've therefore decided to pass my time by doing the one thing that counts as a religious crime in web dev land: I'm going to turn off javascript in my browser and see what sites work and what sites don't. 

I know, I know, my life is simply too exciting.

Now, I know that because I write a lot about the universal web and progressive enhancement, people assume that I must hate javascript. 

This would be an incorrect assumption. 

I simply hate people relying on brittle client-side javascript when there are other alternatives. In the same way as I wouldn't rely on some unknown minicab firm as the sole way of getting me to the airport for a wedding flight, I don't like relying on a non-guaranteed technology as the sole way of delivering a web app.

For me it's a matter of elegance and simplicity over unnecessary complexity.

## Too many tabs
So, for my dreary grey day experiment I restricted myself to just the things open in my browser tabs. For normal people this might be two or three sites. 

Not for me. I have approximately 17 shitmillion tabs open, because I Have a Problem With Tabs.

No seriously. I can never just close a tab. I've tried things like [One Tab](https://www.one-tab.com/) but I just can't get down to less than 30 in any one window ("I'll just save that tab for later" I think, each and ever time). Let's just agree that I need some kind of therapy, and we'll all be able to move on. 

Anyway, there's nothing fancy to this experiment. It was a case of turning off javascript in the browser and reloading a site, nothing more. To quickly disable the browser's JS with one click I used Chrome and the [Toggle Javascript](https://chrome.google.com/webstore/detail/toggle-javascript/cidlcjdalomndpeagkjpnefhljffbnlo) extension - available, ironically enough, via the javascript-only Chrome web store. 

Oh, and for you, sweet reader, I opened these tabs in new windows, so you don't have to see the pain of 50 tabs open at once.

## First impressions

So how was it? Well, with just a few minutes of sans-javascript life under my belt, my first impression was "Holy shit, things are _fast_ without javascript". There's no ads. There's no video loading at random times. There's no sudden interrupts by "DO YOU WANT TO FUCKING SUBSCRIBE?" modals. 

If this were the only manifestation of turning off javascript, I'd do this for the rest of time. However, a lot of things don't work. Navigation is the most common failure mode. Hamburger menus fail to internally link to a nav section (come on, that's an easy one kids). Forms die when javascript is taken away (point the form to an endpoint that accepts GET/POST queries ffs). Above the fold _images_ fail to load (you do know they're streaming by default, yes?).

## The sites

Let's get to it. I think I've got a pretty representative list of sites in my open tabs (perhaps due to the aforementioned Tab Problem). Howl at me on Twitter if you feel I missed anything particularly important.
