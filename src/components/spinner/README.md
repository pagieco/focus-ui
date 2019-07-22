# Spinner

Spinners are used to notify users that their action is being processed. For loading states, spinners should only be used
for content that can't be represented with a skeleton loading component, like for data charts.

---

## Examples

---

## Best practices

The spinner component should:

- Notify users that their request has ben received and the action will soon complete
- Not be used to given feedback for an entire page load
- White can only be used with small spinners on actionable components like buttons
- Be used in conjunction with skeleton loading to represent non-typographic content. For example, line graphs

---

## Content guidelines

### Accessibility label

Spinner accessibility label should:

- Accurately explaint he state of the requested action. For example, "Loading", "Submitting", "Processing".
- Use as few words to describe the state as possible.
