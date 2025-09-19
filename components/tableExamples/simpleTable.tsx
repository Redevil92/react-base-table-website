"use client"

import React from "react"
import { BaseTable, BaseTableHeader } from "react-base-data-table"

import "react-base-data-table/style.css"

const data = [
  { id: 1, name: "Alice", age: 24, country: "USA" },
  { id: 2, name: "Bob", age: 30, country: "UK" },
  { id: 3, name: "Charlie", age: 28, country: "Canada" },
]

const headers: BaseTableHeader[] = [
  { text: "Name", id: "name", width: 200 },
  { text: "Age", id: "age", width: 100 },
  { text: "Country", id: "country", width: 200 },
]

const SimpleBaseTable = () => (
  <BaseTable items={data} headers={headers}></BaseTable>
)

export default SimpleBaseTable
