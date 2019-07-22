# Avatar

Avatars are used to show a thumbnail representation of an indiviual or business in the interface.

---

## Best practices

Avatars should be one of 3 sizes:

- Small (32 x 32px): Use when the medium size is too big for the layout, or when the avatar has less importance.
- Medium (40 x 40px): Use as the default size.
- Large (60 x 60px): Use when an avatar is a focal point.

---

## Examples

### Default avatar

Used most in the interface. Only use another style if the avatar requires more or less visual weight.

```vue
<Avatar name="John Doe" />
```

## Accessibility

### Labeling

The avatar component represents content, and should have a text equivalent for users using assistive technologies.
By default, the value of the `name` prop is used for the alternative text. If different text would be more accurate,
use the `accessibilityLabel` prop to replace the value provided by `name`.
