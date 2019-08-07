# Skeleton display text

Skeleton display text is used to provide a low fidelity representation of content before it appears on the page, and
improves load times perceived by users. Can be used for content in or outside of a card.

---

## Best practices

Skeleton display text component should:

- Give users an indication of what the page content will be once loaded
- Use real content for display text that never changes

---

## Content guidelines

### Skeleton display text

Show static display text that never changes on a page. For example, keep page titles, such as products on the product
list page, but use skeleton loading for page titles that change on the product details page.

---

## Examples

### Medium and large display text

Use this component to rerepsent medium and large display text such as page titles.

```vue
<SkeletonDisplayText size="medium" />
```

### Extra large display text

Use this component to represent extra large display text.

```vue
<SkeletonDisplayText size="large" />
```

### Small display text

Use this component to represent small display text such as content headings.

```vue
<SkeletonDisplayText size="small" />
```
