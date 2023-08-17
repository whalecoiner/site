---
guid: bfe930a5-0644-41ce-8289-2c4a414534c2
title: 'You really don''t need all that JavaScript, I promise'
date: '2019-10-08T21:05:16+00:00'
changed: '2019-10-08T21:08:22+00:00'


bookmark_of: 'https://kryogenix.org/code/dont-need-that-js/'
---

> So you say to yourself, I have a plan. Instead of me letting the user click on a link that then goes to the browser and the browser giving me back control when the new page loads, what about implementing that myself?

> Instead of letting the browser handle navigation, I will handle navigation, so as to avoid the loss of control. What I'll do is, I'll XHR the page off the server, and then I'll innerHTML it into the current page. You're getting around the loss of control by handling loading yourself. Don't trust the browser to do it, do it yourself. Implement it internally.

An excellent post from Stuart Langridge. It excellently sums up the culture of Not Invented Here that permeates the industry of late. 


