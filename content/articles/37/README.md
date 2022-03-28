---
guid: 3a7b574e-c79c-4a5c-be60-a4124bf1fc45
title: 'Yes, progressive enhancement is a fucking moral argument'
slug: progressive-enhancement
created: '2016-12-06T11:00:00+00:00'
changed: '2019-09-24T19:20:49+00:00'
strapline: 'You don''t get to choose who is viewing your work, you fucking fuck.'
---

I rolled my eyes when I saw [this post](https://web.archive.org/web/20161205174122/https://www.viget.com/articles/the-case-against-progressive-enhancements-flimsy-moral-foundation) circulate around the webosphere. I knew it was clickbait, but I clicked it and read it, because what else is a whiney SJW feminist fuck meant to do while she's drinking her coffee in the morning? But then, as I scanned the page, I realised what deeper level of fucked-up-ness it represents.

But let me back up and explain this. First of all, the article by [@joshkoor](http://twitter.com/joshkorr) revolves around the central notion that bringing Progressive Enhancement (PE from now on) into our work is a burden on the modern web developer. You see, any site should be able to be rendered 100% in javascript, and that's _okay_. Because the modern user has javascript, and expecting javascript to not be available is just plain pig-headedness. Those whiny PE proponents are making a *moral* case for PE, rather than taking a utilitarian and path-of-least-resistance approach.

Fundamentally, the article is a shitty strawman argument against PE. It erroneously states that PE proponents want the latest canvas-based in-browser game to work with JS turned off. Which is bollocks, because the argument for PE is developing useful apps and sites that achieve core functionality for *everyone*, no matter their browser, OS, hardware and user ableness, offering nice-to-haves as the abilities of those things increase. But no, the author has reduced it down to "PE hardliners want everything to work without JS". (The tech world equivalent of the tabloids shouting "Muslim extremists want YOU to cover up YOUR DAUGHTER!")

## Let the pain begin

First of all, the title of the article:

> The Case Against Progressive Enhancement's Flimsy Moral Foundation

This should more accurately read "The Case _For_ Progressive Enhancement Is Flimsy Because It Is A Moral Argument".

Let's be clear about this upfront. The author is arguing against PE because it is based on morality trumping practicality. You'll see why this is fucking problematic as we progress.

> ...some PE advocates argue [that] JavaScript should still be used only as an enhancement, and that sites must work without JavaScript.

Firstly, for content-orientated site, yes I do absolutely fucking argue that.

Secondly, for webapps, I also absolutely fucking argue that.

Your startup's webapp for getting Soylent delivered to your door so that you don't have to go to the shops and take valuable time from coding with shopping and cooking and other menial, women-orientated, tasks ISN'T SPECIAL. It doesn't get a free pass, saying "oh, PE is too hard for my delicate coding hands".

Even if, like the original author, you discount the moral argument for PE, then you are still left with the practical arguments. The main one of which is: the web is a hostile environment to your code. You do not control the users browser, OS, corporate policy or network speed/latency. You do not control their settings. You do not decide if their phone is old and shitty, or sparkly and new. Unlike all other coders in history, Frontend Developers (FEDs) have to code for a mind-bogglingly huge combination of OS, client app and hardware.

Progressive Enhancement is about making sure that your code works on a device, no matter the configuration. What's that? You're only testing your code on the latest iPhone? You arrogant fuck. *Immediately* go out there and start testing it on an old iPhone 4. Or an entry-level Android device. Because someone out there will be using your app on that and cursing you for making such a shitty site. They'll be cursing you while they're just trying to book their plane tickets, alone, in a country with limited data, but your site uses React and was only tested on the latest iPhone on office-speed wifi.

Part of PE means checking to see how your code works on older devices. You should be feature detecting and Cutting the Mustard to offer the best experience, no matter the device. Part of that might mean, horror of fucking horrors, not using JS to accomplish a task. Does a user need React and the rest of a JS app stack when they're not a byte of memory to spare?

"Oh, but we're not catering for those peop... less-advantaged users" you might cry, throwing your loose fingers in the air. HOW THE FUCK DO YOU KNOW THAT, SHIT FOR BRAINS? Your fancy limousine website might be aimed at the richest and most privileged, and fully tested on the latest version of Chrome on a bleeding-edge MacBook, but when your exec is forced to use a shitty hotel-lobby computer to access your site and suddenly it grinds to a halt because those computers are locked down by a contracting IT firm who didn't want to take any chances with security? What the fuck are you going to tell them then? "oh sorry, I only tested in on a fancy computer". Idiot.

## Morality is hard, mom

> In this post, I want to fully unpack those ideas and make the case that:

> * Progressive enhancement is a philosophical, moral argument disguised as a practical approach to web development.
> * This makes it impossible to engage with at a practical level.
> * When exposed to scrutiny, that moral argument falls apart.
> * Therefore, if PEers can’t find a different argument, it’s ok for everyone else to get on with their lives.

"PE is a moral argument and therefore impossible to engage with on a practical level". You know what that sounds like? That you haven't got any argument except "I don't want to do PE". It's the same argument that dipshits use to justify not doing accessibility work: "Oh, every time you say you don't want to do it, they just get angry and you can't argue". Of course I get angry. I've had enough of this teenage boy selfishness masquerading as adult argument.  

I know that progressive enhancement is harder than just jumping straight in and coding your app in whatever your favourite framework is. But guess what? Being a responsible adult is hard. Caring for others is hard. This fucking world is hard. It's up to each of us to make it *easier* for each other.

If I ever catch one of your anti-PE, anti-a11y people not doing PE work, but then spending a morning implementing the latest framework in your app, I will personally punch you until your kidneys turn into unicorns.

> But I am an expert at spotting fuzzy rhetoric and teasing out what’s really being said.

No, you're the kind of shit that enjoys arguing with people, rather than empathising with them. The kind of person who says "well, sometimes racism has a cause" or "men and women just have different brains" and expects people to look thoughtful and engage with you, rather than look disgusted and walking out of the room.

> Here is the real progressive enhancement argument: "It’s a moral imperative that everything on the web should be available to everyone everywhere all the time. Failing to achieve — or at least strive for — that goal is inhumane."

Guess what? I FUCKING SUBSCRIBE TO THAT NOTION. Your shitty Soylent app should be usable even by the non-white-manboy-developers of the world (not that they'd fucking want to use it). Are you really saying that you're incapable of coding a HTML form that submits a delivery address to some server-side code and stores it? REALLY? Because I can fucking well do that and I am *definitely* not one of the coding elite.

No, you're saying that:

* a) you don't want to code it, or;
* b) you're not allowed to code it.

If you don't want to code it then you're a lazy fuck. Morally lazy. No, you fucking are. If you don't want to write code that might work for a minority of people in bad situations, then you're morally corrupt. I'm sick of coddling peoples feelings on this. Just grow a fucking moral spine, you shit.

If, however, you're not ALLOWED to code it... well, that's still a shitty situation, but at least understandable. I've been there. I've had bosses who would not authorise devs to do PE "unless the client pays for it" (we did it anyway, when we could).

That's capitalism for you. If it can fuck over a group of people and still make a profit, it'll do it.

If your arguments against PE revolve around not having the time to do it, or not being allowed to do it, then your arguments are not with PE. They're with a shitty company that values money over people. They're with capitalism itself, which is either going to die, or eat the world. Stop whining about PE and start arguing against capitalism.

## It's all or nothing in my world

> Unstated assumptions:

> * A clunky experience is always better than no experience.
> * HTML content — i.e. text, images, unstyled forms — is the most important part of most websites.

Really? You want to argue that HTML content is not the most important part of your site? Because what the fuck else is a site but those things? Do you think you can just put up an input field where people can enter their credit card details? That they'll just fill that in an send it to you? Fuck off. You need content, images, text to justify your app and your shitty business.

And of course a fucking clunky experience is better than no experience. What are you, the experience police? I don't see you giving a shit about experience when it comes to the edge cases that you think PE people are whining about.

I'd rather be able to do something on your site, than nothing at all. I'd rather submit a HTML form and have my data saved than the all-or-nothing experience of my browser failing to load up the latest JS that submits serialised data to a API endpoint, but which didn't fucking load because my 3G provider is shit.

> * Everything beyond HTML content is superfluous fanciness.
> * It’s morally problematic if some users cannot access features built with JavaScript.

Fuck this shit. I'm just printing the author's avatar out and using it as a fucking dartboard.

> Assemble those unstated assumptions and you get the real PE argument: universal access to everything on the web is a moral imperative.

Shitting piss, you say "morality" like it's some kind of dirty word.

> That’s a philosophical argument, not a practical approach to web development.

No, it means you have to get off your lazy fucking arse and do something for people other than yourself and your whitecodebro demographic. You need to give a shit about people in poor connectivity regions, people who are stuck on older browsers that they can't upgrade, people in orgs with draconian lockdowns.

I'm not going to quote the rest of this shitty article because you can go read it yourself and make your morality bleed out of your skull.

No, what I'm going to do is explicitly link this kind of shitty attitude with the rest of the shit that's been going on in the world the last few months.

We've just seen far-right capitalist white nationalism - fascism by any other word - coming out of closet again. It's been hiding for 70 years, but it's back and now it's got the internet as a delivery method. These kinds of articles are, ultimately, playing into this fascist rhetoric.

Before you look agog, or pull a face at that statement, just listen to me. The "alt-right" (the fucking fascists) have been among us for years. They were gamergate. They were the internet trolls. They were the fedora-wearing fucks who always felt friend-zoned. They were white guy who felt hurt that he didn't have to think about anybody but himself. They were the able-bodied people who parked in disabled bays because "they're just faking it anyway". They were the people who read the Daily Mail and believe its hate. They were the friends who told racist jokes and then defended it with "not got a sense of humour, love?"

And now they're here again, as the people who don't give a shit about the "difficult people" who might be using their shitty application. They're the people who say "I'm only talking about javascript here" but mean "why do I have to bother about accessibility?". They're the coders who want to JUST SHIP CODE rather than thinking about, or having any empathy for, others. They're half people, bereft of empathy or kindness. They're the people running the web.

These people say "But if you take away the moral argument, why should you care about PE or a11y?".

THE MORAL ARGUMENT *IS* THE FUCKING ARGUMENT, YOU FEDORA-WEARING SHITBEAN.

I'm sick of this shit. I'm sick of developers thinking they're the pinnacle of things. I'm sick of the lack of empathy that's a core part of our industry. I'm going to fight it. I'm going to be angry about it.

I ask that you be angry about it too.
