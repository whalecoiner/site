---
guid: e09e7eeb-da6d-4c83-9ff9-709d9ad4b300
title: React
slug: react
date: '2019-08-26T11:12:22+00:00'
changed: '2019-09-24T19:20:44+00:00'
strapline: >-
  Why I have a problem with React the library and spend a lot of time talking to
  my therapist
---

*UPDATE:* just to clarify that any implication that Dan Abramov was having a Twitter break because of a tantrum was unwarranted. It seems he was taking a self-care break after dealing with all the awfulness of Twitter. We feel you, Dan.

----------

So, [#ReactGate](https://twitter.com/hashtag/Reactgate?src=hash) has become a thing. What's been fomenting for a while blew up last week, with two prominent White Men In Tech having little tantrum Twitter breaks, and a wonderful woman of colour working as a dev/designer feeling she is no longer welcome in our industry and planning to leave as soon as it's financially possible.

I'm not going to try and describe the events that led to these particular events - at the time I was happily off Twitter and am dependent on reconstructions of the whole thing. Suffice to say it has raised serious issues about how the tech community tolerates and allows the far right and white supremacists within its ranks.

But I do want to present my own particular reasons for not enjoying the principles and philosophy behind React and how I do not therefore find the React community a pleasant place. These reasons are partially related to the events above. But not totally. 

## Some definitions

Let me set out some of my base assumptions and definitions before we start.

- React is an inherently client-side technology.
- While it can be used purely on the server (I often use it this way) you lose most of the core functionality, turning it into a simple renderer for JSX components, offering no fundamental advantage over any other server-side language. 
- Client-side means that a sparse HTML page waits for a JS app bundle download and parse before the app renders most markup into the browser from JS, on the device itself.
- Yes, I know you can use universal rendering and hydration of components to get faster initial page speeds.
- But that does not remove the fundamental bias that a mostly client-side stack entails.
- As in, now the computational and rendering cost is borne by an individual users hardware and browser.
- There is a reason that Facebook (ha!), Twitter, Reddit, AirBnB, Uber, whatever, push you to use their native apps over their browser apps: because the performance of a browser app sucks compared to a native app.
- (Fucking come at me if you disagree and I'll show you Instagram or Twitter web apps running like snails on my mid-budget Android phone purchased just this year.)
- [Mobile devices simply don't have the CPU and memory to cope well with client-side JS apps](https://twitter.com/slightlylate/status/919989184881876992). 
- React-based client-side apps run moderately well on laptop and desktop devices, as they generally have more CPU and memory available. 
- If React was used as one of many technologies, purely for non-critical user journeys, augmenting server-side rendered markup, then I don't think most of the issues we have seen of late would arise.
- However, React has been pushed not just as a nice little "V in the MVC".
- It has become something more. Now people expect entire sites and apps to be written in pure client-side JS, and that this JS is React (and some friends).

## A vague and not necessarily correctly ordered timeline of React and the Web post 2013 and why it angers me

I'm not going to even bother writing this up into paragraphs. This is flow of consciousness. You get my feelings here.

- React emerges blinking into the world, fluids dripping from its rapidly-hardening carapace. 
- In classic fashion, the most privileged 1% of developers (as in those with the most free time - young, white, able-bodied men) saw the newly released React and fell over themselves to be in on The Latest Interesting Technology.
- In a previous age (The Web That Was) these code trends would burn out after a year or two. A new library would appear and everyone would change direction and stampede to use that instead. 
  - Developers are fickle creatures who get lured by the shiny very easily. (Don't deny it)
- However this particular trend had a nuclear-powered fucker behind it: Facebook, Inc.
- Facebook has always been an engineering-led company (oh, it's not just an [enabler of genocide](https://www.nytimes.com/2018/10/15/technology/myanmar-facebook-genocide.html) - it's so much more!). 
  - As such it feeds on a steady sacrificial stream of young <strike>psykers</strike> developers that it can use to make money before they burn out or fuck off.
- Someone, somewhere, realized that releasing and popularizing the library that they used for their own projects would likely get them more more sacrificial developers to feed <strike>the Golden Throne of the Emperor of Mankind</strike> their insatiable engineering turnover. 
- By making their framework popular, they would have: 
  - a) increased visibility in the tech community 
  - b) have a pre-trained source of candidates for their engineering department.
- So Facebook made React open-source.
- This release coincided with a great new intake of developers into the community, as dotcom 2.0 actually managed to find purchase and the industry took off. Developers were in demand throughout the industry and development was seen as a lucrative career.
- These new devs were heavily trained by a combo of corporate-sponsored online materials, blog posts, video courses, and by the formation of bootcamps.
- The Web That Was, a place of chaos and malleability, was suddenly seen as an impediment to this process of training sacrificial developers, as it required acknowledgement of variety and empathy with the infinity of technology and human combinations.
- The Web That Was was seen as needing a lot more artisanal work. 
- Big Corporates twirled their non-existent mustaches and realized that it's easier to train people to use to work on a factory production line, learning a set of APIs, than it is to train them to see the Web as a precious resource that is inherently chaotic in nature. 
- BTW, I'm not blaming developers in all this - under Capitalism you always need to follow the money, and web development suddenly became a well-paying career. It was always going to happen.
- Good aspects of this movement (such as the design systems community, "Composition over bespoke design", excellent testing of components) get lost behind the Lust For Engineering.
- The commodification of the Web is fueled by React.
- As each month passed, more and more people suffered FOMO-induced panic, and decided to move over to React.
- In synchronicity, recruiters saw that this weird React thing was being spoken about by their tame developers. They started asking for it as a matter of course. 
- Web development, at least on the 1% of the loud bleeding edge developer crowd, suddenly went from a "soft" design-based discipline, to a "hard" engineering-based discipline, fueled by the engineering-focused React library, and the engineering-focused and corporate-sponsored community that surrounded it. 
- The old Frontend Developer roles, that covered user-focused design and coding, were suddenly forced to crystallize into either Frontend Engineer or Designer/UX roles. "Hybrid" roles were suddenly rare in the 1%.
- The 1% of the industry found "validity" in becoming engineering-focused. A role that was coded as Feminine and looked down on by "serious" engineers became Masculine and something to aspire to.
- Questions about "what technology is suitable for this particular project?" suddenly became replaced by "let's use React - everyone is using that and it saves us worrying about that weird frontend stuff".
- Progressive Enhancement got almost wiped out as a concept. Dealing with older-devices and people in network-poor situations were seen as hindrances. 
- The web community suddenly found itself being told how to do things by Thought Leaders and JavaScript visionaries. What was a plurality of technologies and platforms suddenly became an attempt to consolidate everything under a single platform. 
- React expanded out from the Web.
- Android and iOS developers, who had until now been enjoying their lives, suddenly found their careers being targeted by React Native. 
- Why pay for expensive native platform developers when you can use JavaScript and React for everything?
- Native platform developers suddenly find themselves being forcibly retrained as React Native developers.
- The concept of "We Live In A Meritocracy" becomes firmly implanted in the community.
- Tech, and knowledge of heavily corporate-sponsored libraries like React, are seen as ways to get further in ones career, and get on top of the great steaming capitalist shit-heap.
- Learning React is seen as a meritocratic liberator. 
- The hold of React on the general web community tightens.
- Meritocracy results in the erasure of any kind of Intersectional thinking. 
- Minority voices find it hard to be heard when they speak about perceived problems in the React and the wider tech community. ("He can't be problematic - he answers a lot of questions online and doesn't use racial epithets!") 
- We get to the point were questioning or mocking the React library is seen as Uncommunity like.
- Criticisms of React become attacks of the Community. Criticisms of the community become attacks on React.
- This is a natural outcome of The Social Media Age. Polarization of views is inevitable, as Centrism crumbles. 
- As the general tech community is validated for being more masculine-coded, masculine behaviors emerge and get stronger.
- People fight back. 
- Codes of Conduct emerged. 
- uh oh, Shaggy. React doesn't have a code of conduct. (unless you count it glomming off the vague and not very useful Facebook Code of Conduct).
- We reach today, where two prominent React community leaders quit Twitter rather than deal with accusations of emerging white nationalism and machismo-fueled poor behavior. 

[I've been talking about this rise of this awfulness for the last 3 years](https://www.sonniesedge.net/posts/progressive-enhancement/). Lots of other people have been screaming about it. It's not new. 

The popularity of React is fueled by corporate-sponsorship, a tech industry seeking validation by becoming Hard and Masculine, and aggressive Capitalist principles (validation through work, market dominance, a continuous supply of skilled Labor) that result in Things being placed before People. 

Sound familiar to anything? 

I'm not gonna say what. You figure it out. (Hint: think white shirts and garden centre torches)

## Fight back

- Support the plurality of technology.
- Fight for the user at every step.
- Advocate for using the most simple solution to solve any given problem.
- Push back. Say "no".
- Become craft professionals. Don't become factory workers. (yes, still labor-based, but I don't think anyone is going to listen to me about instigating a global revolution against capitalism and ushering in a post-capitalist age)
- Amplify stifled voices - Black, Indigenous, and people of colour, women, trans people, disabled people, etc. (The concept of meritocracy is inimical to the lived reality of Intersectionality) 
- Stop playing on Codepen when there's shit to be sorted. 











