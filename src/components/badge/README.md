# Badge

Badges are used to inform users of the status of an object or of an action that's been taken.

---

## Best practices

Badges benefit users by:

- Using established color patterns so that users can quickly identify their status or importance level
- Being clearly labeled with short, scannable text
- Being positioned to clearly identify the object they're informing or labelling

---

## Content guidelines

### Badge label

Badge labels should:

- Use a single word to describe the status of an object
- Only use two words if you need to describe a complex state
- Always describe the status in the past tense. For example page not published

---

## Examples

### Default badge

Use to give a non-critical status update on a piece of information or action.

```vue
<Badge>Unpublished</Badge>
```

### Informational badge

Use to call out an object or action as having an important attribute. For example, marking an option as "Recommended" or
marking a page as "Published".

```vue
<Badge status="info">Published</Badge>
```

### Success badge

Use to indicate a successful, completed, or desirable state when it's important to provide positive reinforcement to
uses. For example, when users successfully review a page, a success badge shows that says "Reviewed".

```vue
<Badge status="success">Reviewed</Badge>
```

### Attention badge

Use when something requires users' attention but the issue isn't critical. For example, this badge would show next to
a page that needs to be reviewed by users.

```vue
<Badge status="attention">Incomplete SEO</Badge>
```

---

## Accessibility

Badges convey information with icons or color include text provided by the visually hidden component. This text is read
out by assistive technologies like screen readers so that users with vision issues can access the meaning of the badge
in context.
