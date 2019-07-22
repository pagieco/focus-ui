# Text style

Text style enhances text with additional visual meaning. For example, using subdued text to de-emphasize it from its
surrounding text.

---

## Best practices

Text style should be:

- Used when enhancing the text to help users understand its meaning
- Subdued if the text is less important than its surrounding text
- Strong for input fields, or for a row total in a price table
- Paired with symbols, like an arrow or dollar sign, when using positive or negative styles

---

## Examples

### Subdued text style

Use to de-emphasize a piece of text that is less important to users than other nearby text. May also be used to indicate
when normal content is absent, for example, "No supplier listed". Don't use only for aesthetic effect.

```vue
<TextStyle variation="subdued">No supplier listed</TextStyle>
```

### Strong text style

Use to mark text representing user input, or to emphasize the total rows in a price table.

```vue
<TextStyle variation="strong">Total</TextStyle>
```

### Positive text style

Use in combination with a symbol showing an increasing value to indicate an upward trend.

```vue
<TextStyle variation="positive">Views increased</TextStyle>
```

### Negative text style

Use in combination with a symbol showing a decreasing value to indicate a downward trend.

```vue
<TextStyle variation="negative">Views decreased</TextStyle>
```

### Code text style

Use to display inline snippets of code or code-like text.

```vue
<p>
  New URL that visitors should be forwarded to. If you want your website's
  homepage, enter <TextStyle variation="code"> / </TextStyle> (a forward slash).
</p>
```

---

## Accessibility

Don't rely on text style alone to convey information to users. Ensure that text styles are used to enhance the
information provided in text.
