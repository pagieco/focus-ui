# Modal

Modals are overlays that prevent users from interacting with the rest of the application until a specific action is
taken. They can be disruptive because they require users to take an action before they can continue interacting with
the rest of the application. If should be used thoughtfully and sparingly.

---

## Best practices

Use modals when users must complete an action before they can continue with the main workflow. Avoid using modals to
display complex forms or large amounts of information.

Modals should:

- Require the user to take action
- Close when users press the `X` button, the `Cancel` button, or the <kbd>Esc</kbd> key, not when users click or tap
  the area outside the modal
- Not have more than two buttons (primary and secondary) at the bottom. This prevents unclear action hierarchy and
  crowding on mobile screens. Since modals are for focused tasks, they should have focused actions. In some cases
  however, a tertiary action may be appropriate.
  
---

## Content guidelines

### Title

Titles should be:

- Informative and descriptive
  - They should label the type of content grouped in the modal
  - Use a clear {verb}+{noun} question
- Concise and scannable
  - Use simple, clear language that can be read at a glance
  - Keep headings to single sentence and avoid using punctuations such as periods, commas, or semicolons
  - Avoid articles (the, a, an) in microcopy headings to keep content short and actionable
  - Written in sentence case (first word capitalized, the rest is lowercase)
  
### Body content

Body content should be:

- Actionable: start sentences with imperative verbs when telling auser what actions are available to them (especially
  something new). Don't use permissive language like "you can"
  
### Primary and secondary actions

Actions should be:

- Clear and predictable: users should be able to anticipate what will happen when they click a button. Never deceive a
  user by mislabeling an action
  
### Tertiary actions

Tertiary actions should:

- Only be used when the action requires the context of the content in the modal
- Never be used to dismiss the modal

### Footer

Footer content should:

- Actionable, start sentences with imperative verbs when telling a user what actions are available to them (especially
  something new). Don't use permissive language like "you can"
  
---

## Examples

### Basic modal

TODO

---

## Accessibility

- Modals use ARIA `role="dialog"` to convey to screen reader users that they work like native dialog windows.
- If you set the `title` prop to give the modal component a heading, then the `title` is used to label the dialog
  element with `aria-labelledby`. This helps to convey the purpose of the modal to screen reader users when it displays.
  
### Keyboard support

- When a modal opens, focus moves automatically to the modal container so it can be accessed by keyboard users
- While the modal is open, keyboard focus shouldn't leave the modal
- Users can dismiss the modal with the keyboard by activating the `X` button, the `Cancel` button if one is provided, or
  by pressing the <kbd>Esc</kdb> key
- After a modal is closed, focus returns to the button that launched it
