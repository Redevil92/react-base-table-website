"use client"

import React, { useState } from "react"
import { BaseTable, BaseTableHeader } from "react-base-data-table"
import CommentData from "react-base-data-table/dist/types/components/BaseTable/models/CommentData"
import HighlightCondition from "react-base-data-table/dist/types/components/BaseTable/models/HighlightCondition"

interface TableItem {
  [key: string]: string | number
  id: number
  name: string
  quantity: number
  price: number
  status: string
  category: string
}

const initialItems: TableItem[] = [
  {
    id: 1,
    name: "Laptop Pro 15",
    quantity: 25,
    price: 1299.99,
    status: "In Stock",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Wireless Mouse",
    quantity: 150,
    price: 29.99,
    status: "In Stock",
    category: "Electronics",
  },
  {
    id: 3,
    name: "USB-C Hub",
    quantity: 0,
    price: 49.99,
    status: "Out of Stock",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    quantity: 45,
    price: 149.99,
    status: "In Stock",
    category: "Electronics",
  },
  {
    id: 5,
    name: "Office Chair",
    quantity: 12,
    price: 299.99,
    status: "Low Stock",
    category: "Furniture",
  },
  {
    id: 6,
    name: "Standing Desk",
    quantity: 8,
    price: 599.99,
    status: "Low Stock",
    category: "Furniture",
  },
  {
    id: 7,
    name: "Monitor Stand",
    quantity: 30,
    price: 79.99,
    status: "In Stock",
    category: "Furniture",
  },
  {
    id: 8,
    name: "Desk Lamp",
    quantity: 0,
    price: 45.99,
    status: "Out of Stock",
    category: "Furniture",
  },
  {
    id: 9,
    name: "Notebook Set",
    quantity: 200,
    price: 12.99,
    status: "In Stock",
    category: "Office Supplies",
  },
  {
    id: 10,
    name: "Pen Pack",
    quantity: 500,
    price: 8.99,
    status: "In Stock",
    category: "Office Supplies",
  },
  {
    id: 11,
    name: "Sticky Notes",
    quantity: 75,
    price: 5.99,
    status: "In Stock",
    category: "Office Supplies",
  },
  {
    id: 12,
    name: "Binder Clips",
    quantity: 0,
    price: 3.99,
    status: "Out of Stock",
    category: "Office Supplies",
  },
  {
    id: 13,
    name: "Webcam HD",
    quantity: 20,
    price: 89.99,
    status: "In Stock",
    category: "Electronics",
  },
  {
    id: 14,
    name: "Headphones",
    quantity: 35,
    price: 199.99,
    status: "In Stock",
    category: "Electronics",
  },
  {
    id: 15,
    name: "Filing Cabinet",
    quantity: 5,
    price: 149.99,
    status: "Low Stock",
    category: "Furniture",
  },
  {
    id: 16,
    name: "Whiteboard",
    quantity: 10,
    price: 89.99,
    status: "In Stock",
    category: "Office Supplies",
  },
  {
    id: 17,
    name: "Ergonomic Mouse",
    quantity: 60,
    price: 69.99,
    status: "In Stock",
    category: "Electronics",
  },
  {
    id: 18,
    name: "Cable Organizer",
    quantity: 100,
    price: 14.99,
    status: "In Stock",
    category: "Office Supplies",
  },
  {
    id: 19,
    name: "Laptop Stand",
    quantity: 40,
    price: 59.99,
    status: "In Stock",
    category: "Furniture",
  },
  {
    id: 20,
    name: "Desk Pad",
    quantity: 55,
    price: 24.99,
    status: "In Stock",
    category: "Office Supplies",
  },
]

// Initial highlights to demonstrate the feature
const initialHighlights: HighlightCondition[] = [
  {
    propertyId: "id",
    value: 3,
    columnId: "quantity",
    style: { backgroundColor: "#ffcdd2" }, // Red for out of stock
  },
  {
    propertyId: "id",
    value: 8,
    columnId: "quantity",

    style: { backgroundColor: "#ffcdd2" }, // Red for out of stock
  },
  {
    propertyId: "id",
    value: 5,
    columnId: "quantity",

    style: { backgroundColor: "#fff9c4" }, // Yellow for low stock warning
  },
  {
    propertyId: "id",
    value: 1,
    columnId: "quantity",

    style: { backgroundColor: "#c8e6c9" }, // Green for high value item
  },
]

// Initial comments to demonstrate the feature
const initialComments: CommentData[] = [
  {
    commentId: 1,
    propertyId: "id",
    value: 3,
    columnId: "price",
    text: "Need to reorder ASAP - customer waiting",
    author: "John Smith",
    date: new Date("2026-01-07T10:30:00"),
  },
  {
    commentId: 2,
    propertyId: "id",
    value: 6,
    columnId: "price",
    text: "Price increase pending approval from management",
    author: "Sarah Johnson",
    date: new Date("2026-01-06T14:15:00"),
  },
  {
    commentId: 3,
    propertyId: "id",
    value: 14,
    columnId: "name",
    text: "New model arriving next month - consider discount on current stock",
    author: "Demo User",
    date: new Date("2026-01-08T09:00:00"),
  },
]

export default function EditableTableExample() {
  const [items, setItems] = useState<TableItem[]>(initialItems)
  const [highlights, setHighlights] =
    useState<HighlightCondition[]>(initialHighlights)
  const [comments, setComments] = useState<CommentData[]>(initialComments)

  const headers: BaseTableHeader[] = [
    {
      id: "name",
      text: "Product Name",
      width: 200,
      editOptions: {
        editable: true,
        type: "string",
      },
    },
    {
      id: "quantity",
      text: "Quantity",
      width: 120,
      editOptions: {
        editable: true,
        type: "number",
      },
    },
    {
      id: "price",
      text: "Price ($)",
      width: 120,
      editOptions: {
        editable: true,
        type: "number",
      },
    },
    {
      id: "status",
      text: "Status",
      width: 150,
      editOptions: {
        editable: true,
        type: "list",
        options: ["In Stock", "Low Stock", "Out of Stock"],
      },
    },
    {
      id: "category",
      text: "Category",
      width: 150,
      editOptions: {
        editable: true,
        type: "list",
        options: ["Electronics", "Furniture", "Office Supplies"],
      },
    },
  ]

  const handleChange = (updatedItem: TableItem, originalIndex: number) => {
    const newItems = [...items]
    newItems[originalIndex] = updatedItem
    setItems(newItems)
  }

  // Handle bulk changes across multiple columns (e.g., paste operation)
  const handleBulkChange = (
    changes: { itemUpdated: TableItem; originalIndex: number }[]
  ) => {
    setItems((prev) => {
      const newItems = [...prev]
      changes.forEach(({ itemUpdated, originalIndex }) => {
        newItems[originalIndex] = itemUpdated
      })
      return newItems
    })
  }

  // Handle bulk changes in the same column
  const handleBulkFieldChange = (
    changes: { itemUpdated: TableItem; originalIndex: number }[],
    headerId: string
  ) => {
    setItems((prev) => {
      const newItems = [...prev]
      changes.forEach(({ itemUpdated, originalIndex }) => {
        newItems[originalIndex] = {
          ...newItems[originalIndex],
          [headerId]: itemUpdated[headerId],
        }
      })
      return newItems
    })
  }

  const handleSetHighlight = (highlight: HighlightCondition) => {
    setHighlights((prev) => {
      // Check if highlight already exists for this cell
      const existingIndex = prev.findIndex(
        (h) =>
          h.propertyId === highlight.propertyId && h.value === highlight.value
      )
      if (existingIndex >= 0) {
        // Update existing highlight
        const updated = [...prev]
        updated[existingIndex] = highlight
        return updated
      }
      // Add new highlight
      return [...prev, highlight]
    })
  }

  const handleRemoveHighlight = (
    highlight: HighlightCondition,
    cssProperty: string
  ) => {
    setHighlights((prev) => {
      const existingIndex = prev.findIndex(
        (h) =>
          h.propertyId === highlight.propertyId && h.value === highlight.value
      )
      if (existingIndex >= 0) {
        const updated = [...prev]
        const existingHighlight = { ...updated[existingIndex] }
        // Remove the specific CSS property
        if (existingHighlight.style) {
          const newStyle = { ...existingHighlight.style }
          delete newStyle[cssProperty as keyof typeof newStyle]
          // If no styles left, remove the highlight entirely
          if (Object.keys(newStyle).length === 0) {
            updated.splice(existingIndex, 1)
          } else {
            existingHighlight.style = newStyle
            updated[existingIndex] = existingHighlight
          }
        }
        return updated
      }
      return prev
    })
  }

  const handleSaveComment = (comment: CommentData, item: unknown) => {
    console.log("Saving comment:", comment, "for item:", item)
    setComments((prev) => {
      // Check if comment already exists by matching propertyId, value, and columnId
      const existingIndex = prev.findIndex(
        (c) =>
          c.propertyId === comment.propertyId &&
          c.value === comment.value &&
          c.columnId === comment.columnId
      )
      if (existingIndex >= 0) {
        const updated = [...prev]
        updated[existingIndex] = comment
        return updated
      }
      return [...prev, comment]
    })
    console.log("Updated comments:", comments)
  }

  const handleDeleteComment = (comment: CommentData, item: unknown) => {
    console.log("Deleting comment:", comment, "for item:", item)
    setComments((prev) => prev.filter((c) => c.commentId !== comment.commentId))
  }

  return (
    <div className="not-prose">
      <BaseTable<TableItem>
        headers={headers}
        items={items}
        height="450px"
        onChange={handleChange}
        onBulkChange={handleBulkChange}
        onBulkFieldChange={handleBulkFieldChange}
        highlightCondition={highlights}
        onSetHighlightCondition={handleSetHighlight}
        onRemoveHighlightCondition={handleRemoveHighlight}
        comments={comments}
        onSaveComment={handleSaveComment}
        onDeleteComment={handleDeleteComment}
        advancedSettings={{
          showIndex: true,
          contrastRow: true,
          currentUsername: "Demo User",
          showFlashOnCellUpdate: true,
        }}
      />
    </div>
  )
}
