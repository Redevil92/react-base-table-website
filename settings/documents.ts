import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  // Getting Started
  {
    heading: "Getting Started",
    title: "Quick Start",
    href: "/quick-start",
  },
  {
    title: "Core Features Overview",
    href: "/core-features-overview",
  },
  {
    title: "Props Reference",
    href: "/props-reference",
  },
  {
    title: "Tutorials",
    href: "/tutorials",
    items: [
      {
        title: "Basic Table",
        href: "/basic-table",
      },
      {
        title: "Table with Groups",
        href: "/table-with-groups",
      },
      {
        title: "Editable Table",
        href: "/editable-table",
      },
    ],
  },
  {
    spacer: true,
  },
  // Core Features
  {
    heading: "Core Features",
    title: "Column Definition",
    href: "/column-definition",
  },
  {
    title: "Editing Capabilities",
    href: "/editing-capabilities",
  },
  {
    title: "Highlight and Comments",
    href: "/highlight-and-comments",
  },
  {
    title: "Filtering",
    href: "/filtering",
  },
  {
    title: "Sorting",
    href: "/sorting",
  },
  {
    title: "Selection",
    href: "/selection",
  },
  {
    title: "Editing",
    href: "/editing",
    items: [
      {
        title: "Overview",
        href: "/overview",
      },
      {
        title: "Cell Editors",
        href: "/cell-editors",
        items: [
          {
            title: "Text Editor",
            href: "/text-editor",
          },
          {
            title: "Number Editor",
            href: "/number-editor",
          },
          {
            title: "Select Editor",
            href: "/select-editor",
          },
        ],
      },
      {
        title: "Single Cell Update",
        href: "/single-cell-update",
      },
      {
        title: "Bulk Update",
        href: "/bulk-update",
      },
      {
        title: "Delete",
        href: "/delete",
      },
      {
        title: "Copy and Paste",
        href: "/copy-and-paste",
      },
      {
        title: "Reorder Rows",
        href: "/reorder-rows",
      },
      {
        title: "Add a Comment",
        href: "/add-comment",
      },
      {
        title: "Highlight a Cell",
        href: "/highlight-cell",
      },
      {
        title: "Context Menu",
        href: "/context-menu",
        items: [
          {
            title: "Single Cell Context Menu",
            href: "/single-cell-context-menu",
          },
          {
            title: "Selection Context Menu",
            href: "/selection-context-menu",
          },
          {
            title: "Headers Context Menu",
            href: "/headers-context-menu",
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  // Advanced Features
  {
    heading: "Advanced Features",
    title: "Advanced Settings",
    href: "/advanced-settings",
  },
  {
    title: "Grouping",
    href: "/grouping",
  },
  {
    title: "Nested Rows",
    href: "/nested-rows",
  },
  {
    title: "TypeScript Reference",
    href: "/typescript-reference",
  },
]
