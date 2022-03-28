---
guid: 7f9cf621-a9a7-4ea2-b2b1-29e34045bce9
id: 18
title: Working with Jekyll and the asset pipeline
slug: working-jekyll-and-asset-pipeline
created: '2013-10-04T10:00:00+00:00'
changed: '2019-09-24T19:20:54+00:00'
strapline: It's actually quite exciting.


---

As I noted earlier, I've started running this site on [Jekyll][1].  And oh my lord, have I learned a lot about it and Ruby doing so. So please, sit down, relax, let me bore you about it for a few minutes.

First, Jekyll is a Ruby app. Immediate panic, as I'm a [Drupal][2] dev. When I started using it there were a whole lot of concepts that I didn't have a clue about. Markdown? YAML? Gems?

![Silly animated gif that conveys no information][wtf]

Look, I'm pretty new to this web game, so cut me some slack, 'kay?

Getting started with Jekyll is way way different from what I'm used to. First on all, you gotta install Jekyll to your local machine, and you've gotta do that via a Ruby gem:

```bash
$ gem install jekyll
```

The concept of installing stuff in this way shouldn't weird me out. I mean, I use [Brew][8] and Drush every day. Why should this be any different? Possibly because this is the primary way of doing things, I'm used to a framework that has at least *some* GUI.

Time to use Jekyll to make a skeleton site:

```bash
$ cd ~/yoursitesdir/

$ jekyll new testsite
```

Okay, you've created a lot of stuff. Nothing's on fire. That's good. But this is all some kind of template, not a website. If I open index.html in a browser I just get curly brackets everywhere.

Google for a while.

Oh, right, you've got to compile it:

```bash
$ jekyll build
```

Oooh, it's spat out a complete website in ./site - nice. You see, Jekyll is a site *compiler*, not a server-side app like Drupal, or Wordpress. Your build your templates, tweak your CSS and compile out to a directory. Want to run that compiled dir on a server?

```bash
$ jekyll serve --watch
```

This will start a webserver at http://localhost:4000, with your website running on it. That --watch parameter? It'll compile your website every time you make a change. With tiny sites this takes an instant, although I suspect you'll run into seconds delays with larger sites.

What I really had to get used to was not having a honking great LAMP stack sitting underneath my CSS. I'm too used to getting caught up in the management of that and not having chance to actually work on the frontend like I want to be doing.

Jekyll is designed around a blogging paradigm, and allows you to write posts in [Markdown][3], which are then compiled out, using a template of your choosing, to HTML. Combine this with [Sass][5] and [Compass][6] for precompiling your CSS and you've got a nifty little blogging system. Deploying code is as simple as rsyncing your generated CSS and HTML up to your webserver.

But this isn't where the cool shit has been happening. I've been playing with [Jekyll-Assets][4], which is an implementation of the Ruby Asset Pipeline for Jekyll.

```bash
$ gem install jekyll-assets
```

This flummoxed me for a while. Everyone was going on about it, but I wasn't quite sure what it was. What it does is take the stuff that you'd normally need to do when manually building a site, such as compiling your Sass into CSS, minifying files, including CSS frameworks and their extensions, and *do it all for you*.

You've installed jekyll-assets on your machine. Now to get Jekyll to use it.

Create a folder called "_plugins" and add the following to a file called "ext.rb":

```ruby
require "jekyll-assets"
```

Nothing's happened. Just chill. Create a folder called "_assets" in the root. Stick in a folder called "stylesheets". Add a Sass stylesheet there.

Now go to your main HTML template and add the following to your header:



Check your generated HTML - your Sass stylsheet has been processed, written and included into your HTML as a link. Now you can update your Sass file, save it and Jekyll will automatically process it.

Jekyll-assets comes with support for major Sass libraries builtin:

```ruby
require "jekyll-assets/compass"
```

```scss
@import "compass";
```

![][whoah]

I hit a stumbling block when I went to add the [Breakpoint][6] Compass library to my test site. I couldn't see how to add it at all. Took me a while to figure that you have to install the Breakpoint gem

```bash
$ gem install breakpoint
```

and then include the gem in the ext.rb file, *before* the Compass require line. Seems backwards to me, but it works.

```ruby
require "breakpoint"
```

Media query breakpoints a-go-go.

Jekyll is lovely, and powered-up with jekyll-assets it's amazingly simple to build up a site. Hopefully this isn't the last I'll see of the Ruby world.

Things to do:

* Learn how to add gems to the project, rather than install them on the machine. Seems you can specify a download source and then the gems that need to be installed.
* Learn what the hell all these things I'm installing are. It's a bit Dark Magik at the moment.


[drunk]: http://stream1.gifsoup.com/view4/1410221/fast-show-o.gif
[dance]: http://stream1.gifsoup.com/view2/1342920/ren-and-stimpy-dance-o.gif
[whoah]: https://www.reactiongifs.com/wp-content/uploads/2013/10/woah.gif
[wtf]: https://www.reactiongifs.com/wp-content/gallery/wtf/seriously.gif

[1]: http://jekyllrb.com
[2]: http://drupal.org
[3]: http://daringfireball.net/projects/markdown/
[4]: https://github.com/ixti/jekyll-assets
[5]: http://sass-lang.com/
[6]: http://breakpoint-sass.com/

[8]: http://brew.sh/
