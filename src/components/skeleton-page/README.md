# Skeleton page

Skeleton page is used with other skeleton loading components to provide a low fidelity representation of the user
interface (UI) before content appears on the page. It improves load times perceived by users.

---

## Best practices

Skeleton page component should:

- Be used for pages where all content loads at the same time
- Give users an indication of what the page layut will be once loaded. Do this by mimicking its layout similarly to the
  state that will be loaded.
  
---

## Content guidelines

Show page titles that never change for a page. For example keep the title "Products" on the page listpage, but use
skeleton loading for titles that change on the product detail page. Don't use placeholder content for titles that will
change when the page fully loads.

Secondary actions are always represented with skeleton content. You can change the number of skeleton actions that
best represent the number of actions once loaded.

---

## Examples

### Page with dynamic content

Use this component to compose a loading version of a page where the page title and header content are dynamic, meaning,
the content changes.

TODO

### Page with static content

Use this component to compose a loading version of a page where the page title and header content are known and stay
the same.

TODO
