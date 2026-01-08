"use client"

import React from "react"
import { BaseTable, BaseTableHeader } from "react-base-data-table"

interface TableItem {
  [key: string]: string | number
  id: number
  name: string
  email: string
  role: string
}

export default function BasicTableExample() {
  const headers: BaseTableHeader[] = [
    {
      id: "name",
      text: "Name",
      width: 200,
    },
    {
      id: "email",
      text: "Email",
      width: 300,
    },
    {
      id: "role",
      text: "Role",
      width: 150,
    },
  ]

  const items: TableItem[] = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Developer" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "Designer" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com", role: "Manager" },
    { id: 4, name: "Alice Brown", email: "alice.brown@example.com", role: "Developer" },
    { id: 5, name: "Charlie Wilson", email: "charlie.wilson@example.com", role: "QA Engineer" },
    { id: 6, name: "Diana Lee", email: "diana.lee@example.com", role: "Designer" },
    { id: 7, name: "Edward Davis", email: "edward.davis@example.com", role: "Developer" },
    { id: 8, name: "Fiona Garcia", email: "fiona.garcia@example.com", role: "Product Owner" },
    { id: 9, name: "George Martinez", email: "george.martinez@example.com", role: "Developer" },
    { id: 10, name: "Hannah White", email: "hannah.white@example.com", role: "Designer" },
    { id: 11, name: "Ian Thompson", email: "ian.thompson@example.com", role: "DevOps" },
    { id: 12, name: "Julia Anderson", email: "julia.anderson@example.com", role: "Developer" },
    { id: 13, name: "Kevin Taylor", email: "kevin.taylor@example.com", role: "Manager" },
    { id: 14, name: "Laura Moore", email: "laura.moore@example.com", role: "QA Engineer" },
    { id: 15, name: "Michael Jackson", email: "michael.jackson@example.com", role: "Developer" },
    { id: 16, name: "Nancy Harris", email: "nancy.harris@example.com", role: "Designer" },
    { id: 17, name: "Oscar Clark", email: "oscar.clark@example.com", role: "Developer" },
    { id: 18, name: "Patricia Lewis", email: "patricia.lewis@example.com", role: "Scrum Master" },
    { id: 19, name: "Quinn Walker", email: "quinn.walker@example.com", role: "Developer" },
    { id: 20, name: "Rachel Hall", email: "rachel.hall@example.com", role: "Designer" },
    { id: 21, name: "Steven Young", email: "steven.young@example.com", role: "Developer" },
    { id: 22, name: "Tina King", email: "tina.king@example.com", role: "QA Engineer" },
    { id: 23, name: "Ulysses Wright", email: "ulysses.wright@example.com", role: "Developer" },
    { id: 24, name: "Victoria Scott", email: "victoria.scott@example.com", role: "Product Owner" },
    { id: 25, name: "William Green", email: "william.green@example.com", role: "Developer" },
  ]

  return (
    <div className="not-prose border">
      <BaseTable headers={headers} items={items} height="400px" />
    </div>
  )
}
