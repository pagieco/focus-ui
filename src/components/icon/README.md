# Icon

Icons are used to visually communicate core parts of the product and available actions.
They can act as wayfinding tools to help users more easily understand where they are in the product, and common
interaction patterns that are available.

---

## Examples

### Default icon

Use to visually communicate core parts of the product and available actions.

```vue
<Icon name="user" />
```

---

## Accessibility

Using icons can be a great help to users who have difficulties with reading, language, attention, and low vision.

If the icon appears without text, then use the `accessibilityLabel` prop to given the icon a text alternative.
This adds an `aria-label` attribute that's conveyed to screen reader users. 
