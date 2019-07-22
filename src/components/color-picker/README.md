# Color Picker

The color picker is used to let users select a color visually. For example, users use the color picker to customize 
the accent color of the email templates for their website.

---

## Best practices

- Use the alpha slider if you want to allow users to be able to select a transparent color.

---

## Content guidelines

There are no customizable content elements in the color picker component.

---

## Examples

### Default color picker

Use when users need to select a color to make the selection a visual task rather than a technical one.

```vue
<ColorPicker v-model="accentColor" />
```

### Color picker with transparent value

Use when attached to a visual builder to allow the designated object to have a transparent background that allows
underlying objects to show through.

```vue
<ColorPicker allowAlpha v-model="accentColor" />
```
