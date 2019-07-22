# Layout

The layout component is used to create the main layout of a page. Layout sections come in hree main configurations:
one-column, two-column, and annotated. One and two column layouts can be combined in the same page. Annotated
layouts should be used on their own and only on settings pages.

---

## Best practices

The layout component should:

- Use sections with white backgrounds for primary content and sections with grey backgrounds for secondary content that
  is less important
- Center cards on the background when there is no secondary card on the page to stop the content from becoming too wide
- Group similar concepts and actions together in cards
- Separate different cards using a full-width divider
- Structure primary/secondary, two-column layouts so the primary ⅔ section is used for main information and the
  secondary ⅓ section is used for information that might be used as often but remains helpful for context or
  secondary tasks
- Use qual-width layouts with two or more columns when each layout section has the same importance

---

## Content guidelines

The content from the layout component coles from cards and annotated sections.

### Headings

Headings should be:

- Informative and descriptive
  - They should label the type of content grouped in the card
- Concise and scannable
  - Use simple, clear language that can be read at a glance
  - Keep to a single sentence and avoid using punctuation such as periods, commas, or semicolons
  - Avoid artiles (the, a, an) in microcopy headings to keep content short and actionable
  - Write in sentence case (first word capitalized, the rest is lowercase)
  
### Body content

Body content should be:

- Actionable: start sentences with imperative verbs when telling users what actions are available to them (especially
  something new). Don't use permissive language like "you can"
- Stuctured for user success: alway put the most critical information first
- Clear: use the verb "need" to help users understand when they're required to do something
  
### Call-to-action button

Buttons should be:

- Clear and predictable: users should be able to anticipate what will happen when they click a button. Never deceive
  users by mislabeling a button
  
### Section titles

Section titles should be:

- Informative: they should label the type of content grouped in the body content below
- Like headings: follow the same content guidelines as when you're writing headings

### Action links

Links should be:

- Used for secondary or persistent actions: links are for lower priority actions than buttons, or persistent actions
  (such as an Edit link) that users can take at any time
- Clearly labeled: users should not need to guess where they'll end up if they cick on an action link. Never use "click
  here" as a link because it doesn't set expectations about what's next.
- Similar to buttons: follow the same content guidelines as when you're writing buttons

### Annotated content titles

### Annotated content description

---

## Examples

### One-column layout

Use to have a single section on its own in a full-width container. Use for simple pages and as a container for banners
and other full-width content.

```vue
<Layout>
  <LayoutSection>
    <Card title="Online dashboard">
      <p>View a summary of your online performance.</p>
    </Card>
  </LayoutSection>
</Layout>
```

### Two columns with primary and secondary widths

Use to follow a normal section with a secondary section to create a 2/3 + 1/3 layout on detail pages (such as individual
product or order pages). Can also be used on any page that needs to structure a lot of content. This layout stacks
the columns on small screens.

```vue
<Layout>
  <LayoutSection>
    <Card title="Order details" subdued>
      <p>View a summary of your order.</p>
    </Card>
  </LayoutSection>
  <LayoutSection secondary>
    <Card title="Tags" sectioned>
      <p>Add tags to your order.</p>
    </Card>
  </LayoutSection>
</Layout>
```

### Two columns with equal width

Use to create a ½ + ½ layout. Can be used to display content of equal importance. This layout will stack the columns on
small screens.

TODO

### Three columns with equal width

Use to create a ⅓ + ⅓ + ⅓ layout. Can be used to display content of equal importance. This layout will stack the columns
on small screens.

```vue
<Layout>
  <LayoutSection one-third>
    <Card title="Florida" :actions="[{ content: 'Manage' }]">
      <CardSection>
        <TextStyle variation="subdued">455 units available</TextStyle>
      </CardSection>
      <CardSection title="Items">
        <ResourceList :resource-name="{ singular: 'product', plural: 'products' }">
          ...
        </ResourceList>
      </CardSection>
    </Card>
  </LayoutSection>
  <LayoutSection one-third>
    ...
  </LayoutSection>
  <LayoutSection one-third>
    ...
  </LayoutSection>
</Layout>
```

### Annotated layout

Use for settings pages. When settings are grouped thematically in annotated sections, the title and description on each
section helps users quickly find the settings they're looking for.

```vue
<Layout>
  <AnnotatedLayoutSection title="Page details" description="Your visitors will use this information to contact you.">
    <Card sectioned>
      <FormLayout>
        <TextField label="Page name" />
        <TextField type="email" label="Account email" />
      </FormLayout>
    </Card>
  </AnnotatedLayoutSection>
</Layout>
```
