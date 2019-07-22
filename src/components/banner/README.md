# Banner

Informs users about important changes or persistent conditions. Use this component if you need to communicate to users
in a prominent way. Banners are placed at the top of the page or section they apply to, and below the page or 
section header.

---

## Best practices

Banners should:

- Be placed in the appropriate context:
  - Banners relevant to an entire page should be placed at the top of that page, below the page header. The should 
    occupy the full width of the content area.
  - Banners related to a section of a page (like a card, popover, or modal) should be placed inside that section, below
    any section heading. These banners have less spacing and pared-back design to fit within a content context.
- Focus on a single theme, piece of information, or required action to avoud overwhelming users.
- Be dismissible unless they contain critical information or an important step users need to take.
- Be concise so that scannable-users shouldn't need to spend a lot of time.
- Be limited to a few important calls to action with no more than one primary action.
- Be used thoughtfully and sparingly for only the most important information.
- Not be used as the primary entry point to information or actions merchants need on a regular basis.
- Not be used for marketing information or upsell.
- Use the default icon for `success`, `info`, `warning` and `critical` statuses.

---

## Examples

### Default banners

- Use to convey general information or actions that aren't critical. For example, you might show a banner that ask for
  user feedback.
- Default banners contain lower priority information and should always be dismissable.

```vue
<Banner title="Page archived" @dismiss"onBannerDismiss">
   <p>The page as archived on June 7, 2019 at 3:20pm EDT.</p>
</Banner>
```

### Informational banners

Use to update users about a change or give them feedback.

### Success banners

- Default to using toasts for success messages, unless the feedback is delayed, persistent, or has a call to action
- Include next steps if applicable

```vue
<Banner
  title="Your page is ready to be viewed."
  status="success" />
```

### Warning banners

- Use to display information that needs attention or that users need to take action on
- Seeing these banners can be stressful for users so be cautious about using them

```vue
<Banner
  title="Before you can publish a page, this change needs to be made:"
  status="warning">
  <List>
    <ListItem>
      The name of the website you're publishing to has characters that aren't
      allowed. Domain names can only include these characters:
      ...
    </ListItem>
  </List>
</List>
</Banner>
```

### Critical banners

- Use to communicate problems that have to be resolved immediately for users to complete a task
- Seeing these banners can be stressful for users so be cautious about using them

```vue
<Banner
  title="High risk of spam detected"
  status="critical">
  <p>
    Before publishing this page <Link url="...">review the risk analysis</Link> and determine if this page 
    has high risk forms.
  </p>
</Banner>
```

---

## Accessibility

Banners provide context and assist workflows for users with disabilities.

- Critical and warning banners have a `role="alert"` and are announced by assistive technologies when they appear.
- All other banners have a `role="status"` and are read after any critical announcements.
- Banners use `aria-describedby` to describe their purpose to assistive technologies when they receive focus. If a 
  banner has a `title`, then the title content is used for the `aria-describedby`. If the banner doesn't have a `title`,
  then all of the banner content is used for the `aria-describedby` attribute.
- Banner containers have a `tabindex="0"` and display a visible keyboard focus indicator. Because of this, users can
  discover banners while tabbing through forms or other interactions, and developers can programatically move focus to banners.

### Error notifications in forms

#### Critical banners

When users submit long or complex forms with errors, use a critical banner to summarize what went wrong. Place the
banner at the top of the form and move focus to the banner when the form is submitted. This allows all users to move
through the form in a logical order to correct the issues. 
