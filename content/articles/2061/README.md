---
guid: 877e88ac-0f35-43a0-b7e1-e9d42f702699
title: CMS via Dropbox
slug: cms-dropbox
created: '2018-09-23T10:01:00+00:00'
changed: '2019-09-24T19:20:46+00:00'
---

I'm experimenting with serving the content of this static site from Dropbox, rather than Github. 

While deploying from Github is a million times easier than dealing with the Dropbox SDK, I've found myself blocked from writing by not wanting to go through the annoyance of writing a file, applying frontmatter, commiting to git (which might mean stashing work on another branch, and pushing it. I've also found myself not wanting to write drafts on the site, fearing that some overly interested imaginary horde is going to read the public Github codebase and critique my pre-published prose. 

Now I can publish both articles and notes a lot easier. In fact notes are now a matter of writing a new markdown file in a dropbox folder (no frontmatter needed as it's supplied by the build chain) and, assuming it's marked for public consumption, it will automatically get made live on my website.

Okay, `vim ~/Dropbox/_blog/text/notes/$( date '+%Y-%m-%dt%H-%M' ).md` is not the sexiest line in existance, but a bash alias will sort that little detail out.
