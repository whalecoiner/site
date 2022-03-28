---
guid: 29306f5b-558a-44c3-bdec-601d71658aab
title: A11y Club
slug: a11y-club
created: '2019-05-15T09:17:36+00:00'
changed: '2019-09-24T19:20:44+00:00'
strapline: 'Some live notes from #a11yclub Düsseldorf. '

---

A11y Club is super fab, and I always love coming here. Here's some live notes. 


## Manuel Matuzović - Accessible React

8 tips for React apps. 

### 1. Create a sound document outline

- Screen readers navigate by headings. Skip direct to heading. 
- React heading component. Automatically sets heading levels. 
- use tools to determine outline. Toberly?
- also benefits SEO

### 2. Hide content correctly

- You can hide headings visually. 
- Don't use `display: none` as it hides things from a11y tree
- But best to incorporate into design. 
- Use text for all icon buttons. You can visually hide it. 

### 3. Use buttons when appropriate! 

- don't use divs! They are not focusable. You can make it accessible but why do the extra work?
- button gives semantic meaning for free

### 4. Use fragments to avoid invalid HTML.

- Fragments allow you to avoid typical React div wrappers
- `<React.fragment>`

### 5. Take care of focus management.

- React client apps continuously modify DOM
- this can lead to focus being lost
- make sure you manage focus!
- but don't over complicate it!

### 6. Make notifications accessible to everyone.

- popup messages need to be accessible to screen readers
- use aria Live Regions to communicate to screen readers
- Reach UI, react-aria-live

### 7. Announce page changes when SPA "page" changes.

- Reach Router can help a lot with this.

### 8. Test your React code automatically.

- `react-axe` is best tool
- use only on dev
- auto testing lets you test for low hanging fruit


## Marc Hainschild - Separation of Concerns 

- works for federal office of agriculture and food
- needs way to have components that work in many different apps and tech stacks
- wants to respect separation of concerns.
- HTML first, with server side rendered code, progressively enhanced. 
- starting with HTML makes accessibility first class citizen. 
- Has base styles for all HTML primitives.
- Applies specialised component styles as needed. 
- Example of [Able Player](https://ableplayer.github.io/ableplayer/ transcriptions).
- Designing for a disability makes life better for so many other people. 
- HTML, CSS, A11y fully documented in specs.