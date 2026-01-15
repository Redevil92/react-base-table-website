"use client"

import React, { useState } from "react"
import { BaseTable, type HighlightCondition } from "react-base-data-table"

interface Product {
  id: number
  name: string
  category: string
  price: number
  stock: number
  status: string
  rating: number
  supplier: string
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    category: "Electronics",
    price: 2499,
    stock: 25,
    status: "In Stock",
    rating: 4.8,
    supplier: "Apple Inc.",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    category: "Electronics",
    price: 1199,
    stock: 150,
    status: "In Stock",
    rating: 4.7,
    supplier: "Apple Inc.",
  },
  {
    id: 3,
    name: "Samsung Galaxy S24",
    category: "Electronics",
    price: 999,
    stock: 80,
    status: "In Stock",
    rating: 4.5,
    supplier: "Samsung",
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    category: "Audio",
    price: 349,
    stock: 45,
    status: "In Stock",
    rating: 4.9,
    supplier: "Sony Corp.",
  },
  {
    id: 5,
    name: "iPad Air",
    category: "Electronics",
    price: 599,
    stock: 60,
    status: "In Stock",
    rating: 4.6,
    supplier: "Apple Inc.",
  },
  {
    id: 6,
    name: "Dell XPS 15",
    category: "Electronics",
    price: 1899,
    stock: 30,
    status: "In Stock",
    rating: 4.4,
    supplier: "Dell Inc.",
  },
  {
    id: 7,
    name: "Bose QuietComfort",
    category: "Audio",
    price: 279,
    stock: 0,
    status: "Out of Stock",
    rating: 4.3,
    supplier: "Bose Corp.",
  },
  {
    id: 8,
    name: "Nintendo Switch",
    category: "Gaming",
    price: 299,
    stock: 100,
    status: "In Stock",
    rating: 4.7,
    supplier: "Nintendo",
  },
  {
    id: 9,
    name: "PS5 Console",
    category: "Gaming",
    price: 499,
    stock: 15,
    status: "Low Stock",
    rating: 4.8,
    supplier: "Sony Corp.",
  },
  {
    id: 10,
    name: "Xbox Series X",
    category: "Gaming",
    price: 499,
    stock: 20,
    status: "In Stock",
    rating: 4.6,
    supplier: "Microsoft",
  },
  {
    id: 11,
    name: 'LG OLED C3 65"',
    category: "TV",
    price: 1799,
    stock: 12,
    status: "In Stock",
    rating: 4.9,
    supplier: "LG Electronics",
  },
  {
    id: 12,
    name: 'Samsung QN90C 55"',
    category: "TV",
    price: 1499,
    stock: 8,
    status: "Low Stock",
    rating: 4.5,
    supplier: "Samsung",
  },
  {
    id: 13,
    name: "AirPods Pro 2",
    category: "Audio",
    price: 249,
    stock: 200,
    status: "In Stock",
    rating: 4.7,
    supplier: "Apple Inc.",
  },
  {
    id: 14,
    name: "Logitech MX Master 3S",
    category: "Accessories",
    price: 99,
    stock: 75,
    status: "In Stock",
    rating: 4.8,
    supplier: "Logitech",
  },
  {
    id: 15,
    name: "Keychron Q1 Pro",
    category: "Accessories",
    price: 199,
    stock: 40,
    status: "In Stock",
    rating: 4.6,
    supplier: "Keychron",
  },
  {
    id: 16,
    name: "Steam Deck OLED",
    category: "Gaming",
    price: 549,
    stock: 5,
    status: "Low Stock",
    rating: 4.9,
    supplier: "Valve",
  },
  {
    id: 17,
    name: "Canon EOS R6 II",
    category: "Camera",
    price: 2499,
    stock: 10,
    status: "In Stock",
    rating: 4.7,
    supplier: "Canon Inc.",
  },
  {
    id: 18,
    name: "Sony A7 IV",
    category: "Camera",
    price: 2199,
    stock: 0,
    status: "Out of Stock",
    rating: 4.8,
    supplier: "Sony Corp.",
  },
  {
    id: 19,
    name: "DJI Mini 4 Pro",
    category: "Camera",
    price: 759,
    stock: 25,
    status: "In Stock",
    rating: 4.6,
    supplier: "DJI",
  },
  {
    id: 20,
    name: "Apple Watch Ultra 2",
    category: "Wearables",
    price: 799,
    stock: 35,
    status: "In Stock",
    rating: 4.5,
    supplier: "Apple Inc.",
  },
]

const statusOptions = ["In Stock", "Low Stock", "Out of Stock", "Discontinued"]
const categoryOptions = [
  "Electronics",
  "Audio",
  "Gaming",
  "TV",
  "Accessories",
  "Camera",
  "Wearables",
]

const headers: BaseTableHeader[] = [
  { text: "ID", id: "id", width: 60 },
  {
    text: "Product Name",
    id: "name",
    width: 180,
    editOptions: {
      editable: true,
      type: "string",
    },
  },
  {
    text: "Category",
    id: "category",
    width: 120,
    editOptions: {
      editable: true,
      type: "list",
      options: categoryOptions,
    },
  },
  {
    text: "Price ($)",
    id: "price",
    width: 100,
    editOptions: {
      editable: true,
      type: "number",
    },
  },
  {
    text: "Stock",
    id: "stock",
    width: 80,
    editOptions: {
      editable: true,
      type: "number",
    },
  },
  {
    text: "Status",
    id: "status",
    width: 120,
    editOptions: {
      editable: true,
      type: "list",
      options: statusOptions,
    },
  },
  { text: "Rating", id: "rating", width: 80 },
  {
    text: "Supplier",
    id: "supplier",
    width: 140,
    editOptions: {
      editable: true,
      type: "string",
    },
  },
]

const EditableProductTable = () => {
  const [items, setItems] = useState<Product[]>(initialProducts)
  const [highlights, setHighlights] = useState<HighlightCondition[]>([
    {
      propertyId: "id",
      value: 7,
      columnId: "stock",
      style: { backgroundColor: "#ffcdd2" },
    },
    {
      propertyId: "id",
      value: 18,
      columnId: "stock",
      style: { backgroundColor: "#ffcdd2" },
    },
    {
      propertyId: "id",
      value: 9,
      columnId: "stock",
      style: { backgroundColor: "#fff9c4" },
    },
    {
      propertyId: "id",
      value: 16,
      columnId: "stock",
      style: { backgroundColor: "#fff9c4" },
    },
    {
      propertyId: "id",
      value: 4,
      columnId: "rating",
      style: { backgroundColor: "#c8e6c9" },
    },
  ])
  const [comments, setComments] = useState<CommentData[]>([
    {
      commentId: 1,
      propertyId: "id",
      value: 7,
      columnId: "status",
      text: "Expected restock in 2 weeks from supplier",
      author: "Demo User",
      date: new Date("2026-01-07T10:30:00"),
    },
    {
      commentId: 2,
      propertyId: "id",
      value: 1,
      columnId: "price",
      text: "Consider bundling with accessories for holiday sale",
      author: "Sales Team",
      date: new Date("2026-01-08T14:15:00"),
    },
    {
      commentId: 3,
      propertyId: "id",
      value: 16,
      columnId: "stock",
      text: "High demand - order more units ASAP",
      author: "Demo User",
      date: new Date("2026-01-09T09:00:00"),
    },
  ])

  const handleChange = (updatedItem: Product, originalIndex: number) => {
    const newItems = [...items]
    newItems[originalIndex] = updatedItem
    setItems(newItems)
  }

  const handleBulkChange = (
    changes: { itemUpdated: Product; originalIndex: number }[]
  ) => {
    setItems((prev) => {
      const newItems = [...prev]
      changes.forEach(({ itemUpdated, originalIndex }) => {
        newItems[originalIndex] = itemUpdated
      })
      return newItems
    })
  }

  const handleBulkFieldChange = (
    changes: { itemUpdated: Product; originalIndex: number }[],
    headerId: string
  ) => {
    setItems((prev) => {
      const newItems = [...prev]
      changes.forEach(({ itemUpdated, originalIndex }) => {
        newItems[originalIndex] = {
          ...newItems[originalIndex],
          [headerId]: itemUpdated[headerId as keyof Product],
        }
      })
      return newItems
    })
  }

  const handleSetHighlight = (highlight: HighlightCondition, item: Product) => {
    console.log("Setting highlight:", highlight, item)

    const newHighlight: HighlightCondition = {
      ...highlight,
      propertyId: "id",
      value: item.id,
    }

    setHighlights((prev) => {
      const existingIndex = prev.findIndex(
        (h) =>
          h.propertyId === newHighlight.propertyId &&
          h.value === newHighlight.value &&
          h.columnId === newHighlight.columnId
      )
      if (existingIndex >= 0) {
        const updated = [...prev]
        updated[existingIndex] = newHighlight
        return updated
      }
      return [...prev, newHighlight]
    })
  }

  const handleRemoveHighlight = (
    highlight: HighlightCondition,
    cssProperty: string,
    item: Product
  ) => {
    setHighlights((prev) => {
      const existingIndex = prev.findIndex(
        (h) =>
          h.propertyId === "id" &&
          h.value === item.id &&
          h.columnId === highlight.columnId
      )
      if (existingIndex >= 0) {
        const updated = [...prev]
        const existingHighlight = { ...updated[existingIndex] }
        if (existingHighlight.style) {
          const newStyle = { ...existingHighlight.style }
          delete newStyle[cssProperty as keyof typeof newStyle]
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
    setComments((prev) => {
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
  }

  const handleDeleteComment = (comment: CommentData, item: unknown) => {
    setComments((prev) => prev.filter((c) => c.commentId !== comment.commentId))
  }

  return (
    <div className="not-prose overflow-hidden">
      <BaseTable<Product>
        items={items}
        headers={headers}
        height="500px"
        onChange={handleChange}
        onBulkChange={handleBulkChange}
        onBulkFieldChange={handleBulkFieldChange}
        highlightCondition={highlights}
        onSetHighlightCondition={(
          highlight: HighlightCondition,
          item: Product
        ) => handleSetHighlight(highlight, item)}
        onRemoveHighlightCondition={(
          highlight: HighlightCondition,
          cssProperty: string,
          item: Product
        ) => handleRemoveHighlight(highlight, cssProperty, item)}
        comments={comments}
        onSaveComment={handleSaveComment}
        onDeleteComment={handleDeleteComment}
        advancedSettings={{
          showIndex: true,
          contrastRow: true,
          currentUsername: "Demo User",
          showFlashOnCellUpdate: true,
          contextMenu: {
            showOnCell: true,
            showOnHeader: true,
          },
        }}
      />
    </div>
  )
}

export default EditableProductTable
