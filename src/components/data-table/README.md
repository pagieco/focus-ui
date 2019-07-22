# Data table

Data tables are used to organize and display all information from a data set. While a data visualization represents
part of the data set, a data table lets users view details from the entire set. This helps users compare and analyze
the data.

---

## Best practices

Data tables should:

- Show values across multiple categories and measures
- Allow for filtering and ordering when comparison is not a priority
- Help users visualize and scan many values from an entire data set
- Help users find other values in the data hierarchy through use of links
- Minimize clutter by only including values that supports the data's purpose
- Include a summary row to surface the column totals
- Not include calculations within the summary row
- Wrap instead of truncate content. This is because if row titles start with the same word, they'll all appear the same
  when truncated
- Not to be used for an actionable list of items that link to detail pages. For this functionality, use the resource
  list component.
  
### Alignment

Column content types are build into the component props so the following alignment rules are followed:

- Numberical = Right aligned
- Textual data = Left aligned
- Align headers with their related data
- Don't center align

---

## Content guidelines

Headers should:

- Be informative and descriptive
- Consice and scannable
- Include units of measurement symbols so they aren't repeated throughout the columns
- Use sentence case (first word capitalized, rest lowercase)

Columns should:

- Consice and scannable
- Not include units of measurement symbols (put those symbols in the headers)
- Use sentence case (first word capitalized, rest lowercase)

### Decimals

Keep decimals consistent. For example, don't use 3 decimals in one row and 2 in others.

---

## Examples

---

## Accessibility

### Structure

Native HTML tables provide a large amount of structural information to screen reader users. Users who rely on screen
readers can navigate tables and identify relationships between data cells (`<td>`) and headers (`<th>`) using keys
specific to their screen reader.

Sortable tables use the `aria-sort` attribute to convery which columns are sortable (and in what direction). They also
use `aria-label` on sorting buttons to convey what activating the button will do.
