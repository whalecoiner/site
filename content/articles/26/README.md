---
guid: e54a9012-4da3-4e39-8156-4e85a3bf3ba1
title: Migrating your team to Sass
slug: migrating-your-team-to-sass
date: '2014-11-04T10:00:00+00:00'
changed: '2019-09-24T19:20:51+00:00'
strapline: Migrating to a modern process is all about the planning.
---

Having read all the articles, watched all the talks, and used it on your own personal projects, you've decided to start using Sass in your workplace. Congratulations! But now you've got the job of actually implementing it in your team.

Oh boy.

This article will give you the lowdown on ensuring the migration goes smoothly. It will show that the move to Sass isn't just about Sass, as lovely as it is. In reality the move is just as much about team culture and making the best use of supporting technologies.

But let's clear: I'm not going to tell you here how your frontend tooling chain should be built. Nor am I going to tell you how to write your Sass - that's up to you and will be unique to your site's needs. But I am going to suggest how you can work towards everyone using the same tools and how that will help you to be better at writing Sass.

## Discovery

Okay, let's get going with a review of what you've already got. No, I'm serious. It's all too easy to become blaze about your codebase, to assume that you all know how it works. If you haven't documented it already, then do it now, even in rough overview form. By the time you've finished your migration you'll want to show how far you've progressed, and as you'll see, it will be useful later on.

Now, get your team together and talk about your Sass proposal. Yes, talk! Your team are the ones who are going to be using this, so you need to ensure that everyone understands your intent, and you need to discover what everyone understands of modern techniques. I can't emphasise this enough. Don't be fooled by bragging, or assume that silence equates to knowledge. You need to make an honest assessment of where everyone is with their skills before you go any further.

A friendly way of making an assessment is to get everyone to research a particular area and to give a five minute talk on what they've found, along with producing demos on places like [Codepen](http://codepen.io) or [Sassmeister](http://sassmeister.com). I know, I know, this seems a bit junior school show-and-tell. But talking about their findings, and getting everyone to contribute with comments and recommend resources, will help you to assess who is up to speed and who needs help. More importantly, you'll get people to *own* their knowledge. You'll make it a collective team responsibility, and not just something for the tech-lead to inform them of and for them to enact.

It's when you're all talking the same language and are all familiar with the same concepts that you can really begin planning your move to Sass. But first, you've got to deal with the local development barrier.

## Synchronise your environments

It's sometimes easy to forget that Sass isn't CSS. It uses similar rules and syntax, but it's a full on programming language that is used to compile out to our favourite stylesheet language.

Just like different Microsoft Word versions produce documents that can't be used by each other, it's possible to write Sass that can't be used by other versions. This can happen if one member of your team is using a different Sass compiler from everyone else. They'll end up writing code that works for their version of the compiler. But if someone else uses that same code on another compiler version, it will (probably) output different CSS.

With luck, there will just be minor differences. But if the original author is using features that aren't available to everyone else, then it will break spectacularly, causing hours of problems for your team.

### Package control
The key to avoiding such scenarios is standardisation, and not just for Sass itself - your entire tooling chain needs to be in sync. Everyone needs to be using the same tools, the same versions of tools and using those same versions of the same tools in the same way.

Take a look at some of the various types of tools in your frontend tooling chain:

- **System package managers:** apt-get, Homebrew, cygwin
- **Languages:** Ruby, Python, PHP
- **Language package managers:** Ruby gems, pip, pear
- **Language frameworks:** Rails, Node.js, Drupal
- **Language framework package managers:** npm, drush
- **Web package managers:** Bower, Yeoman
- **Applications:**  Grunt, Gulp, Compass, Ruby Sass, node-sass
- **System libraries:** libsass
- **Web libraries:** jQuery, Modernizr

If even one person is running a different version of any of these from their teammates, it will cause compilation problems further down the line.

But don't worry, you can standardise everything. It just takes a bit of effort.

- System language versions can be standardised with tools such as [Node Version Manager](https://github.com/creationix/nvm) and [rbenv](https://github.com/sstephenson/rbenv), which allow you to bypass the versions that might come pre-installed on an OS.
- Frameworks can be standardised by specifying a version number upon installation.
- After that, everything can probably be controlled by project-level package installers, such as Node's [npm](https://www.npmjs.org) and Ruby's [Bundler](http://bundler.io). The package installation script can be stored in your project's version control system, and then used by everyone.

Take some time to discover the best way of installing programs on your system. Sometimes a system-level package manager, such as apt-get or Homebrew, is the best way to do things. Sometimes it's better to use a language-specific package manager, such as npm. No two setups are the same!

### Document everything
Put yourself in the position of a team member by sitting down with a newly installed machine, or the equivalent in a virtual machine, and installing all the tools you will need. Document every step as you go - you may discover some surprising gaps in your assumptions - and make that document available to everyone. Write down every program installed, making sure that you specify versions used (and how to install a specific version!). Then, give your team access to clean VMs and allow them to try out the process. They'll soon let you know if you missed anything.

### It's worth it
If all this sounds overly pernickety, then remember that you'll be saving yourself a lot of headache in the future in trying to figure out why different developer machines compile to CSS differently. If you all using version X of package Y, running on version Z of a particular language, then things will be a lot easier to debug.



## Converting from CSS to Sass

So, finally, we get to the meat of things! Now that everyone is running the same build tools you can start to write Sass as a team.

You don't have to rewrite all your CSS to Sass before you can start using your standardised setup. You can start by simply renaming all your old `.css` files to `.scss`, and running them through your new system. You should, hopefully, end up with what you had previously. Perhaps not a major achievement on the surface, but it shows that the tooling chain that you built works. High five! Let the new system run for a week and make sure that everyone is compiling the same CSS.

### Planning
Before you start reorganising your Sass, you need another round of planning, this time about how you are going to [structure your Sass](http://www.sitepoint.com/architecture-sass-project/). (You can start this earlier, once everyone is familiar with Sass concepts).

Again, do this as a *team* - don't let one person decide how things will be built! The site documentation that you did earlier is going to be invaluable here. Get a room, get a whiteboard and pens, and get scribbling. Think about what needs to be done and how much resourcing it will take to achieve.

If you're not already using atomic design techniques, then this planning stage is a good time to start thinking about doing so. Start reviewing your site and codebase for areas of code that can be consolidated into components. You can demonstrate these new components by getting a style guide going. It's not only a great visual indicator for showing how the restructuring is doing, but will allow you to enact [visual regression testing](http://sonniesedge.co.uk/2014-10-17/visual-regression-testing.html) at a later date.

Don't try to do everything at once! For example, create a task to create all your necessary component partials as empty files, and commit them to your repo. Have another task for populating the new component partial, then yet another one for converting all related HTML to use the new component structure and naming scheme. Take it slowly. Plan it. Don't rush.

Depending on the size of your codebase, converting your CSS to effectively-utilised Sass could take days, or weeks. How long it takes doesn't matter. What's important is that you have planned it well.

### Building
The actual conversion to Sass will hopefully be boringly simple. Start enacting all those [best practise](http://joshbroton.com/my-sass-less-css-practices-modularization-nesting-variables-mixins-etc/) Sass techniques that you've read about and which you identified in your planning sessions.

Do you need to make the move to [RWD](http://www.sitepoint.com/responsive-web-design/) during your build? Plan for keeping your current fixed-width layout while you switch to using components. Once they are in place, *then* switch to using a responsive grid layout.

Stick to your plan. Don't try and rush ahead. Make sure that everyone is getting their chance to contribute to your new Sass-based system.

### Maintenance and the future
In the weeks following the successful move to Sass, start thinking about introducing more advanced tools to your tooling chain and your Sass. For example:

- Consolidate common values into Sass variables: colours, padding values, etc
- Make use of mixins for repeated code.
- Sass linting - start off with  relaxed settings, and then as your team experience grows, start increasing the error levels.

Again, plan for it, and don't rush. Give yourself time to research and find best practise.

## In conclusion
Moving your team over to a new technology such as Sass isn't about the technology - it's about planning, anticipation and using the resources you have effectively.  
