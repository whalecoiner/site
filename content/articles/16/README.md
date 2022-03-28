---
guid: fa600935-231a-4202-ac05-11da9a6b8785
title: Categorising front end ticket severity
slug: categorising-ticket-severity-frontend-work
created: '2013-10-03T09:00:00+00:00'
changed: '2019-09-24T19:20:54+00:00'
strapline: Ticket severity seems to be orientated towards backend projects.
---

I've had the pleasure of having an entire day having every developer on my team watch me mess up their lovely web applications. Developers aren't happy about this, I've found.

This is all because I'm upgrading my main client site to use Twitter Bootstrap, via the Drupal Bootstrap system. It's great - makes maintenance in the future much easier. But it's causing a flurry of tickets as it suddenly exposes each weird trick and hack that the backend devs use to generate their forms.

Anyway, it got me thinking about how frontend tickets are categorised in tracking systems such as JIRA. The traditional severity levels, talking as they do about memory leaks and compile issues, don't really apply to the frontend world, so I ended up with the following and beat our developers until they abided by them:<

- Blocker - Somehow causes Critical issues in other systems or services.
- Critical - Causes no data to be sent from page. Causes bad data to be sent.
- Major - Makes information on page unreadable.
- Minor - Something looks odd, but doesn't look awful.
- Trivial - Should be 1px off to the left.

What do you think?
