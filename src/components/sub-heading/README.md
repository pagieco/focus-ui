# Subheading

Subheadings are used for the title and any sub-sections in top-level page sections. Generally, sections of a card use
subheadings for their titles.

---

## Best practices

Subheadings should:

- Be used to explain and clearly label logical groups in existing sections of a page
- Not be used without a parent heading
- Not be used in tables of list items, such as for the primary content in a resource list

---

## Content guidelines

Subheadings should be:

- Informative and descriptive: they should label the type of content grouped beneath them
- Concise and scannable:
  - Use simple, clear language that can be read at a glance
  - Keep subheadings to single sentence and avoid using punctuations such as periods, commas, or semicolons
  - Write in sentence case (first word capitalized, the rest lowercase)

---

## Examples

### Subheading in a card

```vue
<Subheading>Accounts</Subheading>
```

---

## Accessibility

A clear and consistent heading structure helps users who have difficulty with reading or language. It also helps screen
reader users to navigate the page using keystrokes that are custom to their screen reader.

Use the `element` prop to determine the specific HTML element that's output for the subheading. The component defaults
to a level 3 heading (`<h3>`). Use a different value for the `element` prop if a different subheading fits the
content better.
