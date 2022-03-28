---
guid: 511b5f60-7df0-49d8-ad0b-cbee000f72b4
title: Using Bootstrap on a large site
slug: using-bootstrap-large-site
created: '2014-09-25T09:00:00+00:00'
changed: '2019-09-24T19:20:54+00:00'
strapline: Say you've done this and watch the hordes descend upon you.
---

<p>It's fair to say that Bootstrap has a poor reputation in modern frontend circles. "It's bloated! It's redundant! It makes every site look the same!", shouts the Bearded Developer, "Roll your own damn solution!"</p>

<p>But it's not always that simple, is it?</p>

<h2>Making the case</h2>

<p>When I made the case to move the <a href="https://www.aat.org.uk/">Association of Accounting Technicians</a> frontend codebase to something more modern I'd argued that the site was not working effectively for the client's portable-device customers, with only single digit percentages even trying to visit, and massive bounce rates for those that did. Their site was effectively unusable on those devices, with constant pinch zooming being required to read basic text. Filling in forms on such a site was, frankly, an ordeal.</p>

<p>However, despite my suggesting this, I was now operating in unknown territory. None of the frontend team -  I say team, but I mean me, the lone frontender - had, at the time, any practical experience of responsive design or grid-layout techniques. So how the hell was I going to do this across a site with 50+ custom applications and thousands of content pages?</p>

<p>What I needed to do was effectively buy in a complete system that would allow me to get going immediately, without investing client time in me sitting down and learning new technologies while not actually producing anything.</p>

<p>In contractor world, you have to deliver the goods <em>fast</em>.</p>

<h2>Initial justification</h2>

<p>The biggest attraction of Bootstrap, bar the potential for a fast implementation, was maintainability. As a contracting team we were not destined to be with the client for long. So it was important that any system we put in place was easily picked up by those who followed us.</p>

<p>Bootstrap, with its masses of documentation and accompanying online discussion, blogs and tips, was perfect in this regard. I could be confident that if I left a Bootstrap-based system in place then any team following me, even if they didn't have experience already, would be able to search around and find plenty of information on how it worked.</p>

<p>Hey, I'm not saying that I didn't write documentation - I love that stuff (no, really, I'm that sick). But for the client, it gave them extra reassurance that their money-making site would be able to be supported in the future.</p>

<h2>Implementing Bootstrap</h2>

<p>Now come here, Timmy, and let your ol' Grandma tell you something - Bootstrap is so popular precisely for the reasons that it's dismissed. Because it comes loaded with everything it's possible to drop it into a site and, with some minor HTML adjustments, simply work.</p>

<p>Okay, it wasn't exactly as simple as dropping in a CSS file to the theme directory and dusting my hands clean. A site based on Drupal is never going to let us get away with something as easy as <em>that</em>...</p>

<h3>Integrating with Drupal</h3>

<p>I'm used to the pitying faces that people pull when I tell them I work with Drupal. Clunky, weird and with internals made of Pain, Drupal is never going to be liked, even if it <em>is</em> extremely popular.</p>

<p>For the AAT site, integrating the Bootstrap framework with the Drupal theming layer was a key consideration. For once fortune beamed down upon us, as the <a href="https://www.drupal.org/project/bootstrap">Drupal Bootstrap</a> base theme existed and had already done most of the heavy lifting of converting Drupal's HTML output to Bootstrap conventions.</p>

<p>I should perhaps explain why I chose to retain the default Bootstrap way of applying styles to HTML, which involves adding classes to the site HTML, rather than creating fresh Sass that worked with the existing markup.</p>

<p>Maintainability was a huge part of this. The entire theme had to be handed over to a potentially less-experienced developer after I had left. By leaving the markup as Bootstrap standard, we could get someone in, either with previous Bootstrap knowledge, or with the ability to follow the extensive Bootstrap documentation, who could pick things up and get going. In addition, a more refined solution, while more satisfying and, frankly, technically proficient, would have taken longer to implement. Like I said, time is money for a client.</p>

<p>For the backend developers, having the classes available to add via HTML enabled them to quickly build layouts without having to ask a frontender to develop specific Sass for their code.</p>

<p>With regard to the CDN versions of Bootstrap supplied by the Drupal Bootstrap theme: This was something that I avoided, as it brought in so much superfluous CSS, didn't have an SLA and because it wasn't integrated with my nascent Grunt-based frontend-tooling system.</p>

<p>Oh yeah, Grunt, baby. By integrating the Sass version of Bootstrap to our existing code and compiling it via Grunt, I was able to pick and choose which aspects of Bootstrap that I used, avoiding some of the bloat that normally accompanies Bootstrap usage.</p>

<h3>Building a component library</h3>

<p>Bootstrap might be bloated by default, but it's <em>extremely</em> well documented. I was able to take the provided pattern-library/documentation pages and extend them to incorporate our newly standardised components.</p>

<p>Yup, standardised components. I'd never done anything like that before, but a visit to one of <a href="http://csswizardry.com/">CSSWizardry's</a> workshops in London opened my mind to a <a href="http://smacss.com/book/resources">better way of doing things</a>. In retrospect I'm not sure how I ever ran the site without a component-library in place, which is probably a sign of an inevitable decision to adopt its usage. With the component library I was able to test code to make sure it didn't break existing components, present prototypes of components for future projects and, importantly, have a place for our backend developers and UX team to see what was available for them to use in projects.</p>

<p>With the component-library also came a predefined style of writing code, one that I could latch onto and extend. Not having had a formal coding convention before, this provided a really nice place from which to start doing things in a more consistent manner.</p>

<h2>Bootstrap, your bum does look big in that. Because it's huge.</h2>

<p>So what were the downsides of using Bootstrap?</p>

<p>First of all a minified Bootstrap CSS file (with all Bootstrap components compiled in) comes in at 133kb/120kb(minified). Huge, by CSS standards. And this was on <em>top</em> of the existing site CSS (which, to be fair, was rapidly being stripped away as areas of custom code were replaced by Bootstrap components). This was ameliorated somewhat by compiling Bootstrap from source - I was able to pick and choose what components were needed. The end product was still large, but nowhere near as large as a raw Bootstrap file.</p>

<p>And then there was the problem of a smorgasbord of components. Choice isn't always a good thing, especially when our backend developers, upon learning of our component library, dived straight in and started using components willy-nilly. A jumbotron here, leading text there. To be fair, that could have been mitigated by more rigorous policing of code, and elimination of components that were not ready for deployment yet.</p>

<p>Bootstrap is very opinionated. Because so much had already been defined, you were pretty much locked into Bootstrap's way of doing things. This isn't necessarily a bad thing - the naming conventions are quite pleasant - but it set a style tone that would be hard to escape from now.</p>

<p>Not a fault of Bootstrap, but the migration to a new theme revealed those areas where a backend developer had decided to cut corners, or output code that bypassed the Drupal theming system. Many applications failed instantly due to this. A lot of work was necessary to standardise such errant code. Those applications that were built using standard Drupal Form API elements migrated with ease. Which just goes to show.</p>

<p>To ease migration we hold back those broken apps on a slightly modified version of the old theme. They were excluded in the Drupal theme layer via URL and we initiated a gradual, but ongoing, process of refactoring the code in those apps to Drupal standards.</p>

<h2>So, did it work?</h2>

<p>Using the built-in components, I was able, solo, to take an enormous site - one of the biggest examples of Large Scale Drupal in the world - from a fixed-width archaic structure to a grid-based, RWD, mobile-first site within <strong>six weeks</strong>.</p>

<p>The results speak for themselves - personal device usage went from 5% to over 30% in just a few months following the migration. Mobile marketing campaigns that were once outsourced we brought in-house, able to work on a RWD site. And most importantly, none of the users or business owners started shouting. If you work in web, you know that's the best possible result for a theme migration. ;)</p>

<p>On a personal note, it laid the foundations for my current knowledge of adaptive design and modern tooling techniques. I wouldn't be here without good ol' Bootstrap. Yup.</p>

<h2>If you had a time machine...</h2>

<p>With the benefit of hindsight, and a lot more experience, I realise that Bootstrap only <em>really</em> helped with layout and mobile navigation - everything else I could have adapted from existing code. If I'd been more informed with our forward planning I would have identified those as the primary areas in need of work and focussed my efforts there.</p>

<p>For the layout, I suspect a couple of weeks invested in learning something like <a href="http://susy.oddbird.net/">Susy</a> or <a href="https://github.com/csswizardry/csswizardry-grids">CSSwizardgrids</a> for pure grid layout would have paid dividends. I've been playing with both lately and they make me cry with their simplicity and compactness.</p>

<p>Taking some time to create components before I started migration would have been grand. In retrospect I had a lot of proto-components waiting that could have easily been smooshed together into a working library. But to be fair, at the time I was grappling with the very idea of component-based design, so I can be forgiven for being blind to them.</p>

<p>Maintenance - would I still have been able to hand over the site given the above? Yes, I suspect so, with adequate documentation.</p>

<p>However, all that takes time, something that we didn't have. We live in a capitalist society and, as I've said before, client money trumps everything. I had only a limited window to get responsive into play, and in reality I couldn't afford to spend it learning new tools.</p>

<p>But HEY, let's not get sad about capitalism. This implementation of Bootstrap works, yeah? And it looks slick. And it's pretty damn fast. So boo yeah.</p>

<p>*  dances away *</p>
