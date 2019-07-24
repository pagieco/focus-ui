# Option list

The option list component lets you create a list of grouped items that users can pick from. This can include single
selection or multiple selections of options. Option list usually appear in a popover, and sometimes in a modal or a
sidebar. Option lists are styled differently than choise lists and should not be used within a form, but as a standalone
menu.

---

## Best practices

The option list component should:

- Be placed on its own inside a container. Usually the container behaves like a menu, as it does with popover. Don't
  place other components within the same container.
- Not be used when a select component will do.

---

## Content guidelines

### Option lists

Each item in an option list should be clear and descriptive.

---

## Examples

### Simple option list

Use for a group of similar selectable items when only one should be selected at once.

```vue
<OptionList
  title="Inventory location"
  v-model="selected"
  :options="[
    { value: 'byward_market', label: 'Byward Market' }, 
    { value: 'centretown', label: 'Centretown' }, 
    { value: 'hintonburg', label: 'Hintonburg' }, 
    { value: 'westboro', label: 'Westboro' }, 
    { value: 'downtown', label: 'Downtown' }, 
  ]" />
```

### Multiple option list

Use when you have a group of similar selectable items and more than one item can be selected at once.

```vue
<OptionList
  title="Manage sales channels availability"
  allow-multiple
  v-model="selected"
  :options="[
    { value: 'online_store', label: 'Online Store' },
    { value: 'messenger', label: 'Messenger' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'wholesale', label: 'Wholesale' },
    { value: 'buzzfeed', label: 'BuzzFeed' },
  ]" />
```

### Option lists with sections

Use sections when you have multiple groups of similar selectable items.

```vue
<OptionList
  title="Manage sales channels availability"
  allow-multiple
  v-model="selected"
  :options="[
    {
      options: [
        { ... },
      ],
    },
    {
      title: 'Traffic',
      options: [
        { ... },
      ],
    },
  ]" />
```

---

## Accessibility

Items in an option list are organized as list items (`<li>`) in an unordered list (`<ul>`) and are conveyed as a group
of related items to assistive technology users.

COntrols in simple options are buttons, and controls in multiple option lists are checkboxes.

If you customize the option list, you can provide ARIA roles that fit the context. These roles must be valid according
to the W3C ARIA specification to be conveyed correctly to screen reader users.

- The `role` prop adds an ARIA role to the option list wrapper
- The `optionRole` prop adds an ARIA role to the option list items
