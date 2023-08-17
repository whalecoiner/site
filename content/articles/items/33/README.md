---
guid: 789d71c2-dd64-4245-b5fe-2589256d8eab
title: Introducing Loom
slug: introducing-loom-a-new-framework
date: '2016-10-03T10:00:00+00:00'
changed: '2019-09-24T19:20:49+00:00'
strapline: A framework that helps you weave your own pattern libraries.

---

So, I thought it'd be a great idea to write my own CSS framework. This is the kind of thinking that occurs when I've had too much caffeine (file this alongside my other caffeine-based projects, such as "Why not repaint the apartment?" and "Try abseiling down an industrial chimney").

I was inspired by writing an in-house framework for a previous client. It was eventually used on several major projects, but was relatively inflexible, written as it was for one use-case and for a certain way of writing code.

"So," I thought to myself, "what if I were to write my own, something that could output any type of CSS code, in whatever way the user wanted to use it?"

Think large, and swing hard, you know?

## Introducing Loom

[Loom](https://github.com/sonniesedge/loom) is a Sass framework for producing your own pattern libraries. It's still in alpha, but already it provides a series of OOCSS bricks, mixins, functions and classes that allow you to quickly put together a pattern library of your own, ready to use on a real website. Aimed at professional web developers, it aims to make your life _easier_.

It's designed to be light, flexible, modular and just enough opinions to ensure that it runs smoothly.

## Why build something else?

Oh, it was partly for the fun, but mainly because I wanted to produce something that was actually _useful_. Loom doesn't try to give you pre-made and pre-themed CSS that can be dropped onto a site, the way Zurb Foundation or Twitter Bootstrap libraries do. It gives you a toolkit, a way of making your own pattern libraries. A way to weave your own patterns. Yeah, clever.

## Architecture

[Loom](https://github.com/sonniesedge/loom) is written in Sass and is based upon the ITCSS layered architecture. It uses BEM for its (optional) object and utility classes. It's deliberately written in a way that discourages Sass nesting and avoids CSS specificity battles, by returning to source order as the way of describing specificity. This makes it perfect for use in multi-developer teams where the threat of "just add a multi-level selector to the end of the stylesheet to make it work" is ever present.

## Why use it?

Dave Rupert nailed it when he said client work was about "[producing a series of mini-Bootstraps](http://daverupert.com/2013/04/responsive-deliverables/)". As developer-designers, we should be delivering complete pattern-libraries that describe how a clients site can be used, and which can be used to grow the site styles, get a visually overview and to attach testing.

Loom is grounded in [Design System thinking](http://atomicdesign.bradfrost.com/chapter-1/) and is aimed at helping you to create your own [pattern libraries](http://alistapart.com/blog/post/getting-started-with-pattern-libraries). This is vital when you're working on multi-page, multi-author sites, where you don't get to craft each page artisanally yourself, but instead rely on authors and CMSs to generate a page.

The framework knows about design systems, and so comes pre-equpped with variables, mixins and functions that can be used to extract standard thematic elements for your site. Annoyed by developers using `color: #52BE80` in the middle of a class? Well now you can encourage them to use `color: get-color(brand-green)` instead, and keep things clean.

## How do you use it?
There's two ways of using [Loom](https://github.com/sonniesedge/loom). You can use the (entirely optional) Object and Utility classes to quickly scaffold out a site.

```html
  <header class="o-container">
    <h1 class="o-h-alpha u-margin-none">Good morning humans of Earth</h1>
    <h2 class="u-color-meta">We find you disturbing</h2>
  </header>
```

Or you can use the mixins provided to create your own atomic components and apply them to your HTML. Perfect for creating robust and lasting pattern libraries!

```scss
.c-header {
  @include container();
}

.c-title {
  @include heading();
  @include font-size(alpha);
  margin: 0;
}

.c-meta {
  color: get-color(meta);
}
```

```html
  <header class="c-header">
    <h1 class="c-title">Good morning humans of Earth</h1>
    <h2 class="c-meta">We find you disturbing</h2>
  </header>
```

Note that Objects are added to Components via `@include`, rather than `@extend`. This is a conscious choice. `@extend` is extremely unpredictable with how it can affect source order, and would undermine the functionality of Loom. `@include` introduces a lot of repetition, but this is eliminated when the final CSS is used on a page, as gzip will compress repeated lines of text to nothing.

## Encouraging a common way of working

Loom aims to help your team work together. It's designed to be used with style linting systems, and to be consumed by automated styleguide generators and regression testing systems.

When you tie in a stylelinting system like [stylelint](https://github.com/stylelint/stylelint) and [BEM Linter](https://github.com/postcss/postcss-bem-linter) you have an extremely robust system that should catch any code that strays from your house style.

The outputted visual components are perfect for integrating with pattern library documentation systems, such as [PatternLab](http://patternlab.io/).


## Fully documented

Loom is fully documented, using [SassDoc](http://sassdoc.com/). You can look through the included documentation to see what variables, functions and mixins are available out of the box.

## Take a look
You can [find Loom on Github](https://github.com/sonniesedge/loom). Please feel free to take a look and start trying it out. I'm really happy to hear suggestions and ideas!
