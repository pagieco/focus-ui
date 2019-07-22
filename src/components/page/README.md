# Page

Use to build the outer wrapper of a page, including the page title and associated actions.

---

## Best practices

THe page component should:

- Always provide a title for the page header.
- Always provide breadcrumbs when a page has a parent page.
- Be organized around a primary activity. If that primary activity is a single action, provide it as a primary button 
  in the page header.
- Provide other page-level actions as secondary actions in the page header.
- When the page represents an object of a certain type, provide pagination links to the previous and next object of the 
  same type.

---

## Content guidelines

### Title

Titles should:

- Describe the page in as few words as possible
- Be the name of the object type (pluralized) when the page is a list of objects. For a list of orders, the page title 
  should be "Orders".
- Not be truncated.

### Breadcrumbs

The content of each breadcrumb link should be the title of the page to which it links.

### Page header actions

Page header action labels should be:

- Clear and predictablel: users should be able to anticipate what will happen when they click a page action. Never 
  deceive users by mislabeling an action.
- Action-led: they should always lead with a strong verb that encourages action. To provide enough context to users, 
  use the {verb}+{noun} format.

--- 

## Examples

### Page with all header elements

Use for detail pages, which should have pagination and breadcrumbs, and also often have several actions.

```vue
<Page
  breadcrumbs="[{ content: 'Pages', url: '/pages' }]"
  title="Page with contact form"
  primaryAction="{ content: 'Save', disabled: true }"
  secondaryActions="[
    {
      content: 'Duplicate',
      accessibilityLabel: 'Secondary action label',
    },
    { content: 'View your website' }, 
  ]"
  actionGroups="[{
    title: 'Promote',
    accessibilityLabel: 'Action group label',
    actions: [{
      content: 'Share on Facebook',
      accessibilityLabel: 'Individual action label',
    }]
  }]"
  pagination="{
    hasPrevious: true,
    hasNext: true,
  }">
  <p>Page content</p>
</Page>
```
