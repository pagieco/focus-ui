# Button

Buttons are used to make common ations immediately visible and easy to perform in one click, tap, or keypress.
Users can use them to navigate or to take action.

--- 

## Best practices

Buttons should:

- Be clearly and accurately labeled.
- Lead with strong, actionable verbs.
- Use established button colors appropriately. For example, only use a red button for an action that's difficult or
  impossible to undo.
- Prioritize the mose important actions. Too many calls to action an cause confusion and make uses unsure of what to
  do next.
- Be positioned in consistent locations on the interface.

--- 

## Examples

### Basic button

```vue
<Button>Add page</Button>
```

### Primary button

Use to highlight the most important actions in any experience. Don't use more than one primary button in a section or
screen to avoid overwhelming users.

```vue
<Button primary>Save page</Button>
```

### Destructive button

Use when the action will delete user data or be otherwise difficult to recover from. Destructive buttons should trigger
a confirmation dialog before the action is completed. Be thoughtful about using destructive buttons because they can
feel stressful for user.

```vue
<Button destructive>Delete page</Button>
```

### Disabled state

Use for actions that aren't currently available. The surrounding interface should make it clear why the button is
disabled and what needs to be done to enable it.

```vue
<Button disabled>Duplicate page</Button>
```

### Loading state

Use when a button has been pressed and the associated action is in progress.

```vue
<Button loading>Save page</Button>
```

---

## Accessibility

Buttons can have different states that are visually and programmatically conveyed to users.

- Use the `ariaControls` prop to add an `aria-controls` attribute to the button. Use this attribute to point to the
  unique `id` of the content that the button manages.
- If a button expands or collapses adjacent content, then use the `ariaExpanded` prop to add the `aria-expanded`
  attribute to the button. Set the value to convey the current expanded (`true`) or collapsed (`false`) state of
  the content.
- Use the `disabled` prop to set the `disabled` state of the button. This prevents users from being able to interact
  with the button, and conveys its inactive state to assistive technologies.
- Use the `ariaPressed` prop to add an `aria-pressed` attribute to the button.

#### Navigation

Users generally expect buttons to submit data or take action, and for links to navigate. If navigation is required for 
the button component, use the `url` prop. The control will output an anchor styled as a button, instead of a button in
HTML, to help convey this difference.

### Labeling

The `accessibilityLabel` prop adds an `aria-label` attribute to the button, which can be accessed by assistive
technologies like screen readers. Typically, this label text replaces the visible text on the button for users who
use assistive technologies.

Use `accessibilityLabel` for a button if:

- The button's visible text doesn't adequately convey the purpose of the button to non-visual users.
- The button has no text and relies on an icon alone to convey its purpose.

To help support users who use speech activation software as well as sighted screen reader users, make sure that the
`aria-label` text includes any button text that's visible. Mismatches between visible and programmatic labeling can
cause confusion, and might prevent voice recognition commands from working.

When possible, give the button visible text that clearly conveys its purpose without the use of `accessibilityLabel`.
When no additional content is needed, duplicating the button text with `accessibilityLabel` is not nessesary.
