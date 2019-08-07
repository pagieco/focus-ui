# Toast

The toast component is a non-disruptive message that appears at the bottom of the interface to provide quick,
at-a-glance feedback on the outcome of an action.

---

## Best practices

Toast should:

- Be used for short messages to confirm an action
- Not go over 3 words
- Rarely be used for error messages

When to use:

- For success messages
- Only for non-critical errors that are relevant in the moment and can be explained in 3 words. For example, if there's
  an internet connection issue, the toast would say: Internet disconnected
  
When not to use:

- Avoid using toast for error messages. Always try to use a banner to prominently inform users about persistent errors.

---

## Content guidelines

### Messages

Toast messages should be:

- Short and affirmative
- Written in the pattern of: noun + verb

### Toast with action

Only include an action in toast if the same action is available elsewhere on the page. For example:

- If users need to reload a secton, offer the call to action [Reload] in the toast. If they miss the toast message, they
  can also refresh the entire page
- If users delete an iamge, offer the option to [Undo] the deletion. If they miss it in the toast message, they can
  still retrieve it from somewhere else
  
Actions should:

- Keep the action label short, preferably 1 verb
- Not have actions, like [Cancel], for dismissing toast. The [X] to dismiss is already included in the component
- Be used with a duration of at least 10,000 milliseconds for accessibility

---

## Examples

### Basic toast

Use to convery general confirmation or actions that aren't critical. For example, you might show a toast message to
inform the user that their recent action was successful.

```vue
<Button @click="showToast = !showToast">Show toast</Button>
<Toast v-if="showToast" content="Message sent" @dismiss="showToast = false" />
```

### Multiple toast messages

Use multiple toast messages to inform the user about distinct actions.

```vue
<Button @click="showToast1 = !showToast1">Show toast 1</Button>
<Button @click="showToast1 = !showToast1">Show toast 2</Button>

<Toast v-if="showToast1" content="Message sent" @dismiss="showToast1 = false" />
<Toast v-if="showToast2" content="Message sent" @dismiss="showToast2 = false" />
```

### Toast with custom duration

Use to shorten or lengthen the default duration of 5000 milliseconds.

```vue
<Button @click="showToast = !showToast">Show toast</Button>
<Toast
  v-if="showToast"
  content="Message sent"
  :duration="10000"
  @dismiss="showToast = false" />
```

### Toast with action

Use when a user has the ability to act on the message. For example, to undo a change or retry an action.

```vue
<Toast
  content="Image deleted"
  :action="{
    content: 'Undo',
    onClick: () => {},
  }" />
```

### Default toast

Use default toast for informative and neutral feedback.

### Success toast

Use success toast to indicate that something was successful. For example, a page was successfully updated.

```vue
<Toast success content="Page updated" />
```

---

## Accessibility

The content of the toast component is implemented as an ARIA live region using `aria-live="polite"`. When the toast
appears, screen readers should announce the toast text after any other more pressing announcements.

Avoid using toast for critical information that users need to act on immediately. Toast might be difficult for users
with low vision or low dexterity to access because it:

- Disappears automatically
- Can't be easily accessed with the keyboard
- Might appear outside the proximity of the users' current focus

### Toast with action

Make sure that users can also accomplish the action in the toast another way, since the toast action may be difficult
to access for some users. If the toast action is not available somewhere else on the page, for example a retry action
that reloads the section, it should have a fallback action, for example a browser refresh.

Toast with action should persist for at least 10,000 milliseconds to give the user enough time to act on it.
