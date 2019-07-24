# Checkbox

Checkboxes are most commonly used to give users a way to make a range of selections (zero, one, or multiple). They may
also be used as a way to have users indicate they agree to specific terms and services.

---

## Best practices

Checkboxes should:

- Work indipendently from each other: selecting one checkbox shouldn't change the selection status of another checkbox
  in the list. The exception is when a checkbox is used to make a bulk selection of multiple items
- Be framed positively: for example, `Turn on notifications` instead of `Turn off notifications`
- Always have a label when being used to toggling a setting on or off
- Be listed according to a logical order, whether it's alphabetical, numerical, time-based, or some other clear system
- Link to more information or include a subtitle as required to provide more explanation. Don't rely on tooltips to
  explain a checkbox

---

## Content guidelines

### Lists with checkboxes

Lists that use checkboxes should:

- Start with a capital letter

---

## Examples

### Default checkboxes

Use in forms to toggle the state of something on or off. Default checkboxes can appear in two states: selected and
disabled, or unselected.

```vue
<Checkbox
  checked
  label="Basic checkbox"
  v-model="simpleCheckbox" />
```

---

## Accessibility

Screen readers convey the state of the checkbox automatically.

- Use the `disabled` prop to apply the HTML `disabled` attribute to the checkbox `<input>`. This prevents users from
  being able to interact with the checkbox, and conveys its inactive state to assistive technologies
- Use the `id` prop to provide a unique `id` attribute value for the checkbox. If an `id` isn't provided, then the
  component generates one. All checkboxes must have unique `id` values to work correctly with assistive technologies
- Setting `checked="indeterminate"` conveys the state of the checkbox using `aria-checked="mixed"`

### Labeling

- The required `label` prop conveys the purpose of the checkbox to all users
- Use the `labelHidden` prop to visually hide teh label but make it available to assistive technologies
- When you provide help text via the `helpText` prop or an inline error message via the `error` prop, the help or error
  content is conveyed to screen reader users with the `aria-describedby` attribute
