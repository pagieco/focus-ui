# Resource list

A resource list displays a collection of objects of the same type, like page or products. The main job of a resource
list is to help users find an object and navigate to a full-page representation of it.

---

## Best practices

Resource lists can live in many places. You could include a short ressource list in a card summarizing recent user
activities. You could also dedicate an entire page to a resource list.

Resource lists should:

- Have items that perform an action when clicked. The action should navigate to the resource's details page or otherwise
  provide more detail about the item
- Support sorting if the list can be long, and especially if different user tasks benefit from different sort orders
- Support filtering if the list can be long
- Paginate when the current list contains more than 50 items
- Use a skeleton page component on intial page load for the rest of the page if the loading prop is true and items are
  processing
  
Resource lists can optionally:

- Provide bulk actions for tasks that are often applied to many list items at once. For example, users may want to add 
  the same tag to a large number of pages

---

## Content guidelines

Resource lists should:

- Identify the type of resurce, usually with a heading
- Indicate when not all members of a resource are being shown

---

## Examples

### Simple resource list

A resource list with simple items and no bulk actions, sorting or filtering.

```vue
<ResourceList
  :resource-name="{ singular: 'page', plural: 'pages' }"
  :items="">
  <template v-slot:resource-item>
    <ResourceItem>
      <h3>{{ name }}</h3>
    </ResourceItem>
  </template>
</ResourceList>
```

### Resource list with section and no bulk actions

A resource list with simple items and selection.

```vue
TODO
```

### Resource list with bulk actions

Allows uers to select items and perform an action on the selection.

```vue
TODO
```

### Resource list with loading state

Notifies users that list items are being processed.

```vue
TODO
```

### Resource list with sorting

Allows users to change the way the list is sorted by selecting one of several options from a select control.

```vue
TODO
```

### Resource list with filtering

Allows users to narrow the resource list to a subset of the original items.

```vue
TODO
```

### Resource list with multiselect

Allows users to select or deselect multiple items at once.

```vue
TODO
```

---

## Accessibility

Use the resource list component to let users access and manage a list of items. To present a list of items in a tabular
format for users to analyze, use the data table component instead.

### Structure

To show the relationship between items in the list, the resource list component produces a list wrapper (`<ul>`) and
list items (`<li>`). This structure allows users who use screen readers to:

- Identify how many items are in the current resource list view
- Know that all of the list items go together

### Bulk actions

A resource list with bulk actions include checkboxes that users can user to select all items or individual items. The
component generates a unique `id` for each checkbox `<input>`, and each `<input>` is given a visually hidden label
that leverages the `accessibilityLabel` for the items.

If some but not all items are checked, then the bulk checkbox uses `aria-checked="mixed"` to convey the partially
selected state.

### Sorting and filtering

When users use sorting and filtering controls to update items in the list, the update is conveyed to screen readers
with an `aria-live="polite"` attribute on the list.

### Navigation

Primarily, items in a resource list function as links to the full-page representations of the items. Each item should
have a unique `name` prop. For each item, the `accessibilityLabel` prop should be used to give the link a unique
`aria-label`. The `aria-label` should convey the link's purpose, using the `name` value. Users who use screen readers
should be able to easily distinguish each link from the others.
