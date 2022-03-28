---
guid: 50fbb5ef-c8bf-445b-a103-8ffd3f1e1e38
title: 'User Queries: Returning control to the user'
slug: user-queries
created: '2017-01-24T11:00:00+00:00'
changed: '2019-09-24T19:20:49+00:00'
strapline: Give them the power to fuck up in their own way.
---

As I write this I'm trying to use my fancy iPad in a cafe. The cafe doesn't have wifi (because this is German) and I'm being forced to tether to my phones 3G connection (which is piss-poor because the 0.5 meter of Berlin concrete creates quite the radio dead zone).

I'm just trying to access one particular webpage. Just one. I only want to find out some information. Seriously, it’s just a recipe for a cinnamon roll that I’d heard about.

The site I'm accessing is being good, for once. It's using the srcset attribute to send me images that are appropriate for my display (My editor made me look all this up afterwards). Unfortunately, what the browser has determined as appropriate for my display are quite high resolution 2x Retina images. They're coming down over the crappy 3G connection at KBs a second. I doubt I’ll ever see them.

I'm also waiting for the fonts to download. Here the designer hasn't been as thoughtful and I'm facing a FoIT (Flash of Invisible Text) as I wait for the webfonts to download (Safari 9 helpfully displays no fonts while it waits for a webfont to download). On top of this the site is loading lots of the normal javascript shitefest of modern webbery (social media share buttons, adverts, and probably most of a custom React library, just so a class name can be toggled somewhere)

Wouldn't it be wonderful to be able to _tell_ a site "hey, it's okay, I don't want any fancy stuff, just send me what I need”? Wouldn’t that be _lovely_?

Well, by one of those amazing coincidences that severely tempts me to buy a lottery ticket, something quite close to this appeared in the [Safari 10.1 Beta](https://developer.apple.com/library/prerelease/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_1.html) a few hours after starting to write this post. The Reduced Motion Media Query exposes the Reduced Motion operating system setting as a browser media query. (Reduced Motion prevents effects like background parallax, which can be very distracting or even distressing for some users).

```scss
@media (prefers-reduced-motion) {

  // Disable the non-essential animations.

  .background {

     animation: none;

  }

}
```
Now, that isn’t quite what I moaned about earlier. But it’s pretty damn amazing. A user can now specify that they don’t want to see CSS animations and, if a site honours it, they will now be disabled. There has never been a way for a user to do this before, apart from installing a third-party plugin and completely disabling CSS and JS [1], so to me this is HUGE. A site can honour a users browser _preferences_, not just what the browser doggedly reports.

## I have the power!
Could variants on Safari’s new system - a new breed of User Queries - solve my Moaning Myrtle problems?

Mostly, but not totally. Some things would be pretty easy to expose as User Queries. They would be simple, binary choices - the kind of thing that’s in a typical OS or app. So a user might be able to declare that they want:

- Reduced animation
- Night mode
- High/Low contrast
- Larger controls
- No custom fonts
- A generic “low-bandwidth” setting

and a good site designer could chose to honour these wishes. Via CSS, buttons would be bigger, contrast would be improved and only system fonts would be displayed. Hurrah!

I initially got very excited by the possibilities of a low-bandwidth setting, as whole “unnecessary” chunks of a site could be assigned a HTML class and then hidden in low-bandwidth scenarios.

```scss
@media (low-bandwidth) {
  .non-essential {
      display: none;
  }
}

```

But in reality, what would this achieve? We couldn’t hide high-bandwidth images or videos in this way, as they’re loaded independently of CSS, even if set to `display: none`. And hiding anything else behind a low-bandwidth MQ wouldn’t achieve much.

No, user settings would have to go deeper. Perhaps being exposed in the JS layer. It would be possible to load those non-essential site components via JS, with a simple check in place to see if the site is operating in a high-bandwidth mode and, if so, loading the content.

But there’s some things that might not fit into this world nicely. Images are my immediate concern. If a there was a user-declared setting of “low-bandwidth” then what would happen to ordinary images? These couldn’t be handled as a media query, nor loaded via Javascript, so the browser would have to step in and make a decision. Would no images be loaded? (Hey, remember when you used to be able to disable images in the browser?) Or would the browser try to grab the lowest value in a `srcret` array? How would things like animated GIFs conform to a no-animate user setting? This is something to think about.

## Original thinking

I thought I was being pretty original writing about this, but it turns out [@decadecity](https://twitter.com/decadecity) already [wrote about](https://decadecity.net/blog/2015/06/28/user-queries) this exact idea in 2015, outlining some potential scenarios that something like this could allow, and even successfully predicting the Reduced Motion MQ!

> With user queries there would be a number of settings available in the user agent. Presented via a settings UI these would allow users to set certain preferences that were then made available in the runtime in the way media queries provide information about the user agent.

They really expand on this concept, going as far as outlining dark patterns that could emerge from this (low-bandwidth ppl being targeted for better broadband advertising is an awful, but totally realistic, concern!)

## Beyond MQ
Incidentally, some browser-honoured user-settings already exist, apart from Safari’s new MQ. You might not think it, but font sizing is already completely a user-setting. You can bump your browser font size up and down, and a good site will respond to that, via EMs and REMs.

Languages are a user setting, that are accessible in the browser via CSS. (`:lang()`)

There’s probably others that I’ve not thought of. Let me know if you think of any!

## [1] Full circle - user stylesheets

Oh, I said there wasn’t a way for a user to impose their own settings on a site - well actually, I lie. There used to be ways to do to this. It was called User Stylesheets. user Stylesheets were meant to be the last stop of the CSS cascade: user rules that would override anything that a site had set.

These were incredibly useful. When I was a tech assistant at Further Education colleges I used to help students and teachers to set up their browsers with custom styles. Students with dyslexia used to want Comic Sans everywhere, while staff with poor eyesight wanted to reduce the contrast between text and background colours.

Sadly Google chose to [remove](https://bugs.chromium.org/p/chromium/issues/detail?id=318566) the ability for users to specify a custom stylesheet from Chrome. Similar functionality is offered via extensions, but it’s no longer a first-class citizen of the browser. I know it probably costs a few hundred KBs of code to implement, but come on, that was essential stuff for so many users.

## Summary
User Queries, if done right, would be fucking _sick_. They’re a perfect Progressive Enhancement tool and if you care about the user, they’re right up your alley.
