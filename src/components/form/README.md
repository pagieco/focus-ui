# Form

A wrapper component that handles the submission of forms.

---

## Best practices

The form component should be used to:

- Wrap around all form input elements
- Emulate the native HTML `form` element behavior with a custom `onSubmit` callback.

---

## Exampels

### Custom onSubmit

Use onSubmit as a callback for when your form is submitted.

```vue
<Form @submit="handleSubmit">
  <FormLayout>
    <TextField
      v-model="email"
      label="Email"
      type="email"
      helpText="We'll use this email address to inform you on the future changes to Focus."/>
  </FormLayout>
</Form>
```

---

## Accessibility

The form component wraps content in an HTML `<form>` elemnt. This helps to support assistive technologies that use
different interaction and browse modes.

Forms can have only one submit button and it must be at the end of the form. By default, buttons added to the form are 
given a `type` attribute set to `button` to avoid conflicts. To make a button the submit button instead 
(`type="submit"`), set the `submit` prop on the button.
