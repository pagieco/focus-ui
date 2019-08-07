(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{212:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"resource-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resource-list","aria-hidden":"true"}},[t._v("#")]),t._v(" Resource list")]),t._v(" "),s("p",[t._v("A resource list displays a collection of objects of the same type, like page or products. The main job of a resource\nlist is to help users find an object and navigate to a full-page representation of it.")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"best-practices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practices","aria-hidden":"true"}},[t._v("#")]),t._v(" Best practices")]),t._v(" "),s("p",[t._v("Resource lists can live in many places. You could include a short ressource list in a card summarizing recent user\nactivities. You could also dedicate an entire page to a resource list.")]),t._v(" "),s("p",[t._v("Resource lists should:")]),t._v(" "),s("ul",[s("li",[t._v("Have items that perform an action when clicked. The action should navigate to the resource's details page or otherwise\nprovide more detail about the item")]),t._v(" "),s("li",[t._v("Support sorting if the list can be long, and especially if different user tasks benefit from different sort orders")]),t._v(" "),s("li",[t._v("Support filtering if the list can be long")]),t._v(" "),s("li",[t._v("Paginate when the current list contains more than 50 items")]),t._v(" "),s("li",[t._v("Use a skeleton page component on intial page load for the rest of the page if the loading prop is true and items are\nprocessing")])]),t._v(" "),s("p",[t._v("Resource lists can optionally:")]),t._v(" "),s("ul",[s("li",[t._v("Provide bulk actions for tasks that are often applied to many list items at once. For example, users may want to add\nthe same tag to a large number of pages")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"content-guidelines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-guidelines","aria-hidden":"true"}},[t._v("#")]),t._v(" Content guidelines")]),t._v(" "),s("p",[t._v("Resource lists should:")]),t._v(" "),s("ul",[s("li",[t._v("Identify the type of resurce, usually with a heading")]),t._v(" "),s("li",[t._v("Indicate when not all members of a resource are being shown")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("h3",{attrs:{id:"simple-resource-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-resource-list","aria-hidden":"true"}},[t._v("#")]),t._v(" Simple resource list")]),t._v(" "),s("p",[t._v("A resource list with simple items and no bulk actions, sorting or filtering.")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ResourceList")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":resource-name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ singular: 'page', plural: 'pages' }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":items")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-slot:")]),t._v("resource-item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ResourceItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ name }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ResourceItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ResourceList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"resource-list-with-section-and-no-bulk-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resource-list-with-section-and-no-bulk-actions","aria-hidden":"true"}},[t._v("#")]),t._v(" Resource list with section and no bulk actions")]),t._v(" "),s("p",[t._v("A resource list with simple items and selection.")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("TODO\n")])])]),s("h3",{attrs:{id:"resource-list-with-bulk-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resource-list-with-bulk-actions","aria-hidden":"true"}},[t._v("#")]),t._v(" Resource list with bulk actions")]),t._v(" "),s("p",[t._v("Allows uers to select items and perform an action on the selection.")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("TODO\n")])])]),s("h3",{attrs:{id:"resource-list-with-loading-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resource-list-with-loading-state","aria-hidden":"true"}},[t._v("#")]),t._v(" Resource list with loading state")]),t._v(" "),s("p",[t._v("Notifies users that list items are being processed.")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("TODO\n")])])]),s("h3",{attrs:{id:"resource-list-with-sorting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resource-list-with-sorting","aria-hidden":"true"}},[t._v("#")]),t._v(" Resource list with sorting")]),t._v(" "),s("p",[t._v("Allows users to change the way the list is sorted by selecting one of several options from a select control.")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("TODO\n")])])]),s("h3",{attrs:{id:"resource-list-with-filtering"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resource-list-with-filtering","aria-hidden":"true"}},[t._v("#")]),t._v(" Resource list with filtering")]),t._v(" "),s("p",[t._v("Allows users to narrow the resource list to a subset of the original items.")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("TODO\n")])])]),s("h3",{attrs:{id:"resource-list-with-multiselect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resource-list-with-multiselect","aria-hidden":"true"}},[t._v("#")]),t._v(" Resource list with multiselect")]),t._v(" "),s("p",[t._v("Allows users to select or deselect multiple items at once.")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("TODO\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"accessibility"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accessibility","aria-hidden":"true"}},[t._v("#")]),t._v(" Accessibility")]),t._v(" "),s("p",[t._v("Use the resource list component to let users access and manage a list of items. To present a list of items in a tabular\nformat for users to analyze, use the data table component instead.")]),t._v(" "),s("h3",{attrs:{id:"structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#structure","aria-hidden":"true"}},[t._v("#")]),t._v(" Structure")]),t._v(" "),s("p",[t._v("To show the relationship between items in the list, the resource list component produces a list wrapper ("),s("code",[t._v("<ul>")]),t._v(") and\nlist items ("),s("code",[t._v("<li>")]),t._v("). This structure allows users who use screen readers to:")]),t._v(" "),s("ul",[s("li",[t._v("Identify how many items are in the current resource list view")]),t._v(" "),s("li",[t._v("Know that all of the list items go together")])]),t._v(" "),s("h3",{attrs:{id:"bulk-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bulk-actions","aria-hidden":"true"}},[t._v("#")]),t._v(" Bulk actions")]),t._v(" "),s("p",[t._v("A resource list with bulk actions include checkboxes that users can user to select all items or individual items. The\ncomponent generates a unique "),s("code",[t._v("id")]),t._v(" for each checkbox "),s("code",[t._v("<input>")]),t._v(", and each "),s("code",[t._v("<input>")]),t._v(" is given a visually hidden label\nthat leverages the "),s("code",[t._v("accessibilityLabel")]),t._v(" for the items.")]),t._v(" "),s("p",[t._v("If some but not all items are checked, then the bulk checkbox uses "),s("code",[t._v('aria-checked="mixed"')]),t._v(" to convey the partially\nselected state.")]),t._v(" "),s("h3",{attrs:{id:"sorting-and-filtering"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sorting-and-filtering","aria-hidden":"true"}},[t._v("#")]),t._v(" Sorting and filtering")]),t._v(" "),s("p",[t._v("When users use sorting and filtering controls to update items in the list, the update is conveyed to screen readers\nwith an "),s("code",[t._v('aria-live="polite"')]),t._v(" attribute on the list.")]),t._v(" "),s("h3",{attrs:{id:"navigation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigation","aria-hidden":"true"}},[t._v("#")]),t._v(" Navigation")]),t._v(" "),s("p",[t._v("Primarily, items in a resource list function as links to the full-page representations of the items. Each item should\nhave a unique "),s("code",[t._v("name")]),t._v(" prop. For each item, the "),s("code",[t._v("accessibilityLabel")]),t._v(" prop should be used to give the link a unique\n"),s("code",[t._v("aria-label")]),t._v(". The "),s("code",[t._v("aria-label")]),t._v(" should convey the link's purpose, using the "),s("code",[t._v("name")]),t._v(" value. Users who use screen readers\nshould be able to easily distinguish each link from the others.")])])},[],!1,null,null,null);e.default=r.exports}}]);