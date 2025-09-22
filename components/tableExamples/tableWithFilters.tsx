"use client"

import React from "react"
import { BaseTable, BaseTableHeader } from "react-base-data-table"

const data = [
  { id: 1, name: "Alice", age: 24, country: "USA" },
  { id: 2, name: "Bob", age: 30, country: "UK" },
  { id: 3, name: "Charlie", age: 28, country: "Canada" },
]

const headers: BaseTableHeader[] = [
  { text: "Name", id: "name", width: 200, hasFilter: true },
  { text: "Age", id: "age", width: 100, hasFilter: true },
  { text: "Country", id: "country", width: 200, hasFilter: true },
]

const TableWithFilters = () => (
  <BaseTable items={data} headers={headers}></BaseTable>
)

export default TableWithFilters
