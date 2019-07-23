# Pagination

Use pagination to let users move through an ordered collection of items that has been split into pages. Pagination uses 
buttons to move back and forth between pages.

---

## Best practices

Pagination should:

- Only be used for lists with more than 25 items
- Be placed at the bottom of a long list that has been split up into pages
- Pagination should navigate to the previous and next set of items in the paged list
- Hint when users are at the first or the last page by disabling the corresponding button

---

## Content guidelines

There are no editable content elements that are specific to the pagination component.

---

## Examples

### Default pagination

Use for pagination at the bottom of lists.

```vue
<Pagination
  has-previous 
  has-next
  @previous="onPreviousHandler"
  @next="onNextHandler" />
```

### Pagination with keyboard navigation

Attach standard keyboard shortcuts to important pagination controls.

```vue
<Pagination
  has-previous
  has-next
  previous-tooltip="j"
  next-tooltip="k"
  :previous-key="[74]"
  :next-keys="[75]"
  @previous="onPreviousHandler"
  @next="onNextHandler" />
```
