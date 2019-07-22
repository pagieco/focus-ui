# Button group

Button group displays multiple related actions stacked or in a horizontal row to help with arrangement and spacing.

---

## Best practices

Button groups should:

- Group together call to actions that have a relationship
- Be used with consideration that too many calls to action can cause users to be unsure of what to do next
- Be thoughtful about how multiple buttons will look and work on small screens
- Only be used in groups of up to six buttons if the buttons contain an icon with no text.

---

## Examples

### Default button group

Use when you have multiple buttons to space them out evenly.

```vue
<ButtonGroup>
  <Button>Cancel</Button>
  <Button primary>Save</Button>
</ButtonGroup>
```

### Button group with segmented buttons

Use to emphasize several buttons as a thematically-related set among other controls.

```vue
<ButtonGroup segmented>
  <Button>Bold</Button>
  <Button>Italic</Button>
  <Button>Underline</Button>
</ButtonGroup>
```
