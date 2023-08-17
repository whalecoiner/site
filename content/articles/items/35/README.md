---
guid: 495c2956-275c-4438-9b6e-b83c0e9af8a9
title: Setting the scope for Loom
slug: loom-setting-the-scope
date: '2016-10-08T11:30:00+00:00'
changed: '2019-09-24T19:20:49+00:00'
strapline: 'First in a series of posts on learning to write Loom, a new Sass framework.'
---

*Writing the core of [Loom](https://github.com/sonniesedge/loom) has been extraordinary fun, and I'll be sharing some of the thought processes and techniques behind it with you.*

So what did I want from a new framework?

I didn't want make it _too_ broad. I know I want the user to do anything with it, but you could go too far with that, you know? I mean, the ultimate do-anything-you-want Sass/CSS framework is a bunch of mixins that can be used to write your own code. (Hell, the _ultimate_ framework is blank text-file). Multi-contributor, sponsored projects like [Bourbon](https://github.com/thoughtbot/bourbon/) are already out there and do things 1000x better than a single developer ever could.

On the other hand, things like [Pure](http://purecss.io/) are just too restrictive. You just want me to include a CSS file and use your classes? Nah, mate.

No, I had to think about what _I'd_ like to see from a CSS framework, and go from there. That's the reason most open-source projects get started, no?


# Put your thoughts down in writing
I had all these ideas buzzing around my head for Loom, but nothing concrete or any stated goals, so I sat down and came up with the following manifesto points:

- It should make things *easier* for a developer like me. So, if I were to end up configuring a framework more than using it, it's pointless. If each time I use it I ended up overriding the classes with my own, it's not fulfilling it's job.
- This isn't about themes. I'm not aiming to recreate Foundation or Bootstrap here. I want a framework that could be used to _produce_ a CSS library like Bootstrap.
- Following from the previous point, this should be aimed at people like me, professional frontenders. This isn't something to be be picked up and dropped into a project to make it look pretty. This is something to help professional designer/developers in their everyday tasks.
- I love design systems, and I want something that ties in with that. I want to be able to write code that lends itself to pattern libraries and styleguides. You know, that whole idea of producing [a mini-Bootstrap for each client](http://daverupert.com/2013/04/responsive-deliverables/), as Dave Rupert talks about. So this framework needs some way of easily accessing design system settings, such as spacings, colour palettes, typography, etc.
- I wanted to be write CSS in the way that I want to write it. This doesn't just mean naming conventions, but the way that CSS classes are used. Which end of the Atomic vs Component spectrum do I want to swing to? Do I have to make that choice?
- Modularity. The problem with many CSS libraries is that they get imported all in one go and don't offer any selectivity. You end up having to overwrite their CSS classes with your own.
- Enforce some best practice with regard to specificity. One of the few things I really don't like to see in CSS is overly-nested selectors and the emergence of specificity wars - it's the bane of most projects I've come into. Whatever system I came up with should help avoid that.
- Recognise that most developers don't stick rigidly to any particular methodology. Most people end up with a hybrid of many approaches, something that works for them. Any framework should have flexibility for that.


# Thinking technically
After looking at these manifesto points it became so much easier to decide on the technical architecture of things.

- I didn't want to offer something themed. There's a multitude of <strike>Wordpress themes</strike> pattern libraries already out there that do that. I wanted a loose collection of objects and utilities to help others build a pattern library.
- I definitely wanted to use ITCSS, right from the start. It allows enormous flexibility for structuring code while avoiding specificity wars. It's not documented very well, but I could address that in the framework documentation.
- I wanted to let the consumer decide if they want to output chunky components or lighter utility classes. I can't say I prefer using utility classes, but I can utterly see the value.
- I wanted to use BEM of for naming. But I was still unsure at this initial point about if I wanted to force this on end users.
- I wanted to make sure everything would be modular. I think this came naturally from wanting to use ITCSS - it's designed to allow the insertion or modification of modules and layers, and is what drew me to it initially.
- I wanted it to be documented. There's nothing more frustrating than a framework that you don't have full information for. I'd always wanted to use SassDocs so I went for that.
- Because of my design system love, I wanted to get that incorporated from the start. That meant everything should be standardised into Sass variables where possible.

# So what next?

That set the scope for what I wanted to achieve, but comes after that? Check back soon for the next part, "Organizing the Code".
