# Text Field

A text field is an input field that users can type into. It has a range of options and supports several text formats
including numbers.

---

## Best practices

Text fields should:

- Be clearly labeled so it's obvious to users what they should enter into the field
- Be labeled as "Optional" when you need to request input that's not required
- Only ask for information that's really needed
- Validate input as soon as users have finished interaction with a field (but not before)

---

## Content guidelines

### Field label

A label is a short description of the requested input. Labels are not instructional text but should be meaningful and
clearly indicate what is expected.
Labels should be:

- Placed above or beside the form field
- Short and succinct (1-3 words)
- Written in sentence case (the first word capitalized, the rest lowercase)

### Field placeholder text

Placeholder text is shown inside the form field to teach users what to input. Field placeholder text should:

- Be used only for supplementary information because the text has low contrast and is not visible when text is entered
- Be written as examples instead of instructions
- Include "e.g." before an example

### Designating option fields

Try to only ask for information that is required. If you need to ask users to provide optional information, mark the 
field optional by placing the text "(optional)" at the end of the field's label. Don't mark required fields with 
asterisks.

### Help text

Help text provides extra guidance or instructions to people filling out a form field. It can also be used to clarify
how the information will be used. As with all form content, help text should be succinct and easy to read.

### Validation error messages

Error messages should:

- Clearly explain what went wrong and how to fix it
- Be short and concise, no more than a single sentence
- Use passive voice so users don't feel like they're being blamed for the error

---

## Examples

todo

---

## Accessibility

### Structure

Screen readers convey information about text fields automatically through native HTML.

- Use the `disabled` prop to add the HTML `disabled` attribute to the text field.
- Use the `readOnly` prop to add the HTML `readonly` attribute to the text field.
- If you use the `type` prop, then some assistive technologies adapt the software keyboard to the current task. This
  helps users with mobility, vision, and cognitive issues to enter information more easily
  
Use the `id` prop to provide a unique `id` attribute value for the text field. If you don't provide an `id` then the
component generates one automatically. All text fields need to have unique `id` values.

### Labeling

The `label` prop is required to convey the purpose of the text field to all users.

If there are separate visual cues that convey the purpose of the text field to sighted uses, then the label can be
visually hidden with the `labelHidden` prop.

When you provide help text via the `helpText` prop or an inline error message via the `error` prop, the help or error
content is conveyed to screen reader users with the `aria-describedby` attribute. This attribute causes the content to
be read along with the label, either immediately or after a short delay.

Use the `placeholder` prop to provide additional instructions. However, don't rely on placeholders alone since the 
content isn't always conveyed to all users.
