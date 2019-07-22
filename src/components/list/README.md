# List

Lists display a set of related text-only content. Each list item begins with a bullet or a number.

---

## Best practices

Lists should:

- Break up chuncks of related content to make the information easier for users to scan
- Be phrased consistently (try to start each item with a noun or a verb and be consistent with each item)
- Not be used for lists where the entire item represents an action

---

## Content guidelines

### List items

Every item in a list should:

- Start with a captital letter
- Not use commas or semicolos at the end of each line

---

## Examples

### Bulleted lists

Use for a text-only list of related items that don't need to be in a specific order and don't require an icon or other 
indicator.

```vue
<List type="bullet">
  <ListItem>Yellow shirt</ListItem>
  <ListItem>Red shirt</ListItem>
  <ListItem>Green shirt</ListItem>
</List>
```

### Numbered lists

Use for a text-only list of related items when an inherent order, priority, or sequence needs to be communicated.

```vue
<List type="number">
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</List>
```

---

## Accessibility

The list component outputs list items (`<li>`) inside a list wrapper (`<ul>` for bullet lists or `<ol>` for numbered 
lists). By default, list items are conveyed as a group of related elements to assistive technology users.

To group items for layout only, consider using the stack component.
