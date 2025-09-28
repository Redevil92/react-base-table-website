"use client"

import React from "react"
import { BaseTable, BaseTableHeader } from "react-base-data-table"

const data = [
  { id: 1, name: "Alice", age: 24, country: "USA" },
  { id: 2, name: "Bob", age: 30, country: "UK" },
  { id: 3, name: "Charlie", age: 28, country: "Canada" },
  { id: 4, name: "David", age: 35, country: "USA" },
  { id: 5, name: "Eva", age: 22, country: "UK" },
  { id: 6, name: "Frank", age: 27, country: "Canada" },
  { id: 7, name: "Grace", age: 29, country: "USA" },
  { id: 8, name: "Helen", age: 31, country: "UK" },
  { id: 9, name: "Ian", age: 26, country: "Canada" },
  { id: 10, name: "Jane", age: 33, country: "USA" },
]

const headers: BaseTableHeader[] = [
  { text: "Name", id: "name", width: 200 },
  { text: "Age", id: "age", width: 100 },
  { text: "Country", id: "country", width: 200 },
]

const TableWithGroups = () => (
  <BaseTable
    items={data}
    headers={headers}
    groupBy="country"
    groupByCustomRender={undefined}
  ></BaseTable>
)

export default TableWithGroups
