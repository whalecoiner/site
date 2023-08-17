---
guid: 9e89ae41-494a-4111-b5d6-6de72a4c6c47
title: Getting started with data science tools
slug: data-science-tools
date: '2018-02-03T23:00:00+00:00'
changed: '2019-09-24T19:20:46+00:00'
strapline: Using a microscope to hammer DNA
---

My girlfriend recently attended an [introduction to data science workshop at Thoughtworks](https://github.com/ThoughtWorksInc/twde-datalab) that assumed that the attendees had a working knowledge of package managers and tech tooling. As she's an actual, you know, _post-doctoral research scientist helping build insights into Alzheimer's Disease_, she really doesn't have to time to fuck around learning tech tools for fun, and so didn't have a machine ready to deal with this stuff. But being the kind soul that I am (and who likes having a happy partner), I wrote up how to get a machine working with data science tech tools, and I'm sharing it with you here. 

## Overview
This installation guide assumes a completely blank install of MacOS High Sierra. If you're following this guide on any other OS or machine state then you may have software that interferes with this! This is just a rough guide, not an infallible instruction list! Be warned!

## Installing base software

The steps in this section are not _strictly_ necessary to get data sciencing. But Brew is so ubiquitous in the MacOS ecosystem, that it's a good idea to have it installed anyway. 

I'd also recommend installing iTerm, as it's just nicer to use than MacOS's default Terminal.

So, first of all, install the Xcode command-line tools with:

```bash
$ xcode-select --install
```

Then we need to install Brew. We do this by telling the Ruby interpreter to download a script off the internet and to run it. (Running a remote script would normally be a risky thing to do, but Brew is well known and trusted, so go ahead).

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”
```

## Installing Python tools

MacOS comes with Python 2.7 by default, but we need python 3 for some of the things later on in this guide. It's possible to just install python 3 with Brew, and use that instead of the default. But it's generally a bad idea to replace the system versions of languages directly (it's the same with Ruby), as it _could_ cause unexpected problems later on, and will definitely lessen your flexibility in switching between versions of Python. 

So we're going to install a system that allows you to install multiple versions of Python (and lots of other scientific languages!), but to create an alias to them whenever you need them.

I'm following from lots of useful tips from David Culley, who [published his own guide](ttps://www.davidculley.com/installing-python-on-a-mac/).

Let's install the CLI tool "wget", which kinda stands for "Webserver Get", and is a tool to get things from web servers. We'll need this in a second. (BTW, if you didn't install Brew earlier, you'll need to figure out how to install your own copy of wget).

```bash
$ brew install wget
```

Now we'll need to install some science tools. This is where things get mildly confusing. Our aim is to install Anaconda, a huge collection of both data science tools and a package manager / virtual environment manager called "conda". 

To do that we need to install first Miniconda, which is a minimal install of Anaconda, containing only the "conda" tool and none of the science packages. 

We will then use `conda` to upgrade `miniconda` to the full-fledged `anaconda`. 

Got that? Good, because it took me a good while to get my head around it.

So, let's use `wget` to download the `Miniconda` installer.

```bash
$ wget https://repo.continuum.io/miniconda/Miniconda3-latest-MacOSX-x86_64.sh
```

We then run it with:

```bash
$ bash Miniconda3-latest-MacOSX-x86_64.sh 
```

I'd recommend choosing the defaults for everything.

When that is finished, remove the original installer with:

```bash
$ rm ~/Miniconda3-latest-MacOSX-x86_64.sh
```

At this point you should open a new terminal window! This is because miniconda just altered some PATH things in your environment, and these new settings can't be picked up until a new terminal is created.

We can see the effects on your PATH by typing:

```bash
$ echo $PATH
```

It should hopefully show miniconda at the start of the PATH line.

So we've installed Miniconda, but want access to Anaconda, which has all the useful Python science packages. 

```bash
$ conda install anaconda
```

Just to make sure everything is up to date, run the following: 

```bash
$ conda update --all
```


## Installing tutorial packages

Now we switch to the Thoughtworks guide at https://github.com/ThoughtWorksInc/twde-datalab.

We need a place to hold all your different fun science projects. I'd recommend a folder in your home dir called "Projects". You can make this with:

```bash
$ mkdir ~/Projects
```

Clone the Thoughtworks project and move into the appropriate folder:

```bash
$ git clone https://github.com/ThoughtWorksInc/twde-datalab && cd twde-datalab
```

Then use "pip" (which was installed by the Anaconda package) to install all the things listed in "requirements.txt" (which just came from the git repo).

```bash
$ pip install -r requirements.txt
```

Now run the script that came from with the project. (If you like, you can take a look at what's inside it with "cat run_decisiontree_pipeline.sh"). 

```bash
$ sh run_decisiontree_pipeline.sh
```

This will download a huge chunk of data from a remote storage place, hosted by thoughtworks on Amazon's S3 service and start analysing it.

That's it! After this it all becomes data science and weird shit that I don't really understand. 

I'll be over here, with my CSS.


## Useful resources

- https://github.com/ThoughtWorksInc/twde-datalab
- https://www.anaconda.com/what-is-anaconda/
- https://wilsonmar.github.io/python-install/
- https://conda.io/docs/user-guide/getting-started.html#managing-conda
- https://www.davidculley.com/installing-python-on-a-mac/
