# Heading

Headings are used as the titles of each major section of a page in the interface. For example, card components generally
use headings as their title.

---

## Best practices

Headings should:

- Clearly describe the section or interface they refer to
- Highlight the most important concept or piece of information users need to know
- Sit at the top of the section or interface they're referring to

---

## Content guidelines

Headings should be:

- Informative and descriptive:
  - They should label the type of content grouped in the interface below
- Concise and scannable
  - Use simple, clear language that can be read at a glance
  - Keep headings to single sentence and avoid using punctuation such as periods, commas, or semicolons
  - Avoid articles (the, a, an) in headings to keep content short and actionable
  - Write in sentence case (first word capitalized, the rest is lowercase)
  
Microcopy headings should be easy for users to scan and understand instantly.

---

## Accessibility

A clear and consistent heading structure helps users who have difficulty with reading or language. It also helps screen 
reader users to navgitate the page using keystrokes that are custom to their screen reader.

Use the `element` prop to determine the specific HTML element that's output for the heading. The component defaults to
a (`<h2>`). Use a different value for the `element` prop if a different heading fits the context better.
