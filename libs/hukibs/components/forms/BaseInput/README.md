# BaseInput (internal)

Foundation for form inputs. Provides common label, size, variant, helper, error, and adornment behavior.

## Usage

BaseInput is not exported from the library directly, but its props are inherited by public inputs like `TextInput`, `SearchInput`, `SelectInput`, and `TInputTextArea`.

## Props

BaseInputProps:
- type?: `text | email | password | search | tel | url | number` (optional)
- size?: `small | medium | large` (optional)
- variant?: `default | ghost` (optional)
- label?: `string` (optional)
- placeholder?: `string` (optional)
- description?: `string` (optional)
- error?: `string | string[]` (optional)
- disabled?: `boolean` (optional)
- readonly?: `boolean` (optional)
- required?: `boolean` (optional)
- clearable?: `boolean` (optional)
- clearTitle?: `string` (optional)
- prefixIcon?: `string` (optional)
- suffixIcon?: `string` (optional)

See `./BaseInput.model.ts` for exact types.
