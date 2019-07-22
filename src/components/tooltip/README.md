# Tooltip

Tooltips are floating labels that briefly explain the function of a user interface element. They can be triggered when
users hover, focus, tap, or click.

---

## Best practices

Tooltips should:

- provide useful, additional information or clarification
- Succinctly describe or expand on the element they point to
- Be provided for icon-only buttons or a button with an associated keyboard shortcut
- Not be used to communicate critical information, including errors in forms or other interaction feedback
- Not contain any links or buttons
- Be used sparingly. If you're building something that requires a lot of tooltips, work on clarifying the design and
  the language in the experience.
  
---

## Content guidelines

### Basic tooltips

Tooltips should:

- Be written in sentence case
- Be concise and scannable
- Not be used to communicate error messages or important account information

---

## Examples

### Default tooltip

Use only when necessary to provide an explanation for an interface element.

```vue
<Tooltip content="This order has shipping labels.">
  <Link>Order #1001</Link>
</Tooltip>
```
