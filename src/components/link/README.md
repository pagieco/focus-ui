# Link

Links are used to embed actions or pathways to more information in a sentence.

---

## Best practices

Links should:

- Consist of text that clearly describes either the action that users will take or the location they'll navigate to
- Only be used in a sentence. For stand-alone navigational components, use the Button component

---

## Content guidelines

### Links

Links should:

- Set the expectation of where users will be taken or what action will be performed
- Be consistent with the content they point to. If a navigational link leads to a page called Users, label the link
  "users".
- Use descriptive text and avoid using generic content such as "click here"

---

## Example

### Default links

Use for the text links in larger spans of text.

```vue
<Link url="https://my-website/and-url">more privileged users</Link>
```

### External links

Use for text links that point to a different website. They will open in a new browser tab or window.

```vue
<Link url="https://my-website/and-url" external>
  more privileged users
</Link>
```

---

## Accessibility

Use the `url` prop to give the link component a valid `href` value. This allows the element to be identified as a link
to assistive technologies and gives it default keyboard support.

### Submitting data

Uses generally expect links to navigate, and not to submit data or take action. If you need a component that doesn't
have a URL associated with it, then use the Button component instead.

### Labeling

Give links text that clearly describes their purpose.

To provide consistency and clarity:

- Use the same text for links that navigate to the same content
- Use different text for links that navigate to different content
