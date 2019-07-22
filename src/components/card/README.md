# Card

Cards are used to group similar concepts and tasks together to make the product for users easier to scan, read and 
get things done.

---

## Best practices

Cards should:

- Use headings that set clear expectations about the card's purpose
- Prioritize information so the content users most need to know comes first
- Stick to single user flows or break more complicated flows into multiple sections
- Avoid too many call-to-action buttons or links and only one primary call to action per card
- Use calls to action on the button of the card for next steps and use the space in the upper right corner of the card 
  for persistent, optional actions (such as an Edit link)

---

## Content guidelines

### Heading

Headings should be:

- Descriptive: help users understand what they'll find in the card
- Concise and scannable:
  - Use simple, clear language that can be read at a glance
  - Keep headings to a single sentence and avoid using punctuation such as periods, commas, or semicolons
  - Where possible, avoid articles (the, a, an) to keep content short and actionable
  - Written in sentence case
  - Informative: They should label the type of content grouped in the body content below

### Body content

Body content should be:

- Actionable: start sentences with imperative verbs when telling users what actions are available to them 
  (especially something new). Don't use permissive language like "you can".

### Call-to-action button

Buttons should be:

- Clear and predictable: users should be able to anticipate what will happen when they click a button.
  Never deceive users by mislabeling a button.

### Section titles

Section titles should be:

- Informative: they should label the type of content grouped in the body content below
- Like headings: follow the same content guidelines as when you're writing headings

### Action links

Links should be:

- Used for secondary or persistent actions: links should be used to represent lower priority actions than buttons,
  or persistent actions that users may take at any time (such as persistent Edit link).
- Clearly labeled: users should not need to guess where they'll end up if they click on an action link. Never use 
  "click here" as a link because it doesn't set expectations about what's next.
- Similar to buttons: Follow the same content guidelines as when you're writing text for buttons.

--- 

## Examples

### Default card

Use when you have a simple message to communicate to users that doesn't require any secondary steps.

```vue
<Card title="Website dashboard" sectioned>
  <p>View a summary of your website performace.</p>
</Card>
```

### Card with header actions

Use for less important card actions, or actions users may do before reviewing the contents of the card. For example,
users may want to add items to a card containing a long list. 

```vue
<Card sectioned title="Variants" actions="[{ content: 'Add variant' }]">
  <p>
    Add variants if this product comes in multiple versions, like sizes or colors.
  </p>
</Card>
```

### Card with footer actions

Use footer actions for a card's most important actions, or actions users should do after reviewing the contents of the
card. For example, users should review the contents of a page's seo settings before an important action like publishing
the page.

```vue
<Card
  title="Homepage SEO"
  primaryFooterActions="[{ content: 'Add attribute' }]"
  secondaryFooterActions="[{ content: 'Edit page' }]">
  <CardSection title="Attributes">
    <List>
      <ListItem>My amazing page title</ListItem>
      <ListItem>And a powerful description</ListItem>
    </List>  
  </CardSection>
</Card>
```

### Card section with action

Use when your card section has actions that apply only to that section.

```vue
<Card title="Customer">
  <CardSection>
    <p>John Smit</p>
  </CardSection>
  <CardSection title="Contact information" actions="[{ content: 'Edit' }]">
    <p>john.smit@example.com</p>
  </CardSection>
</Card>
```

### Card with a subdued section

Use to indicate when one of the sections in your card contains inactive or disabled content.

```vue
<Card title="Accounts">
  <CardSection>
    <List>
      <ListItem>John Smit</ListItem>
      <ListItem>Mister Anon</ListItem>
    </List>
  </CardSection>
  
  <CardSection subdued title="Deactivated accounts">
    <List>
      <ListItem>John Smit</ListItem>
      <ListItem>Mister Anon</ListItem>
    </List>
  </CardSection>
</Card>
```

---

## Accessibility

The required `title` prop gives the card a level 2 heading (`<h2>`). This helps with readability and provides structure
to screen reader users.

If you use the `subdued` prop on a card or section, make sure that the card or section `title` conveys the reason
for using `subdued`. This ensures that users with low vision, including those who use screen readers, can identify
that the content is inactive or less important.
