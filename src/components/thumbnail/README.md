# Thumbnail

Use thumbnails as a visual anchor and identifier for an object. They should be used along with text to provide context.

---

## Best practices

Thumbnails should:

- Be one of 3 sizes:
  - Small (40 x 40 px): use when the medium size is too large for the layout, or when the thumbnail has less 
    importance.
  - Medium (60 x 60 px): use as the default size.
  - Large (80 x 80 px): use when a thumbnail i a major focal point. Avoid this size in lists or items.
    
---

## Content guidelines

Any time you use an image to communicate a concept, it's important to use descriptive `alt text`. Doing this is 
important for accessibility because it allows screen readers to describe what's in the image to people who may not be
able to see it.

For thumbnails, we recommend using a format that describes what will show in the image:

- `alt="Photo of {product}"`. For example. "Photo of black t-shirt with cartoon tiger".
- an empty `alt="""` attribute ignores the image in assistive technologies such as screen readers, and may be used on 
  decorative thumbnails.
  
---

## Examples

### Default thumbnail

Use as the default size.

```vue
<Thumbnail source="https://image.com/png.jpg" alt="Photo of a PNG image" />
```

### Small thumbnail

Use when the default size is too large for the layout, or when the thumbnail has less importance.

```vue
<Thumbnail size="small" source="https://image.com/png.jpg" alt="Photo of a PNG image" />
```

### Large thumbnail

Use when a thumbnail is a major focal point. Avoid this size in lists or items.

```vue
<Thumbnail size="large" source="https://image.com/png.jpg" alt="Photo of a PNG image" />
```
