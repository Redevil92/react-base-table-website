"use client"

import React from "react"
import { BaseTable, BaseTableHeader } from "react-base-data-table"

interface TableItem {
  id: number
  name: string
  department: string
  role: string
}

export default function GroupedTableExample() {
  const headers: BaseTableHeader[] = [
    {
      id: "name",
      text: "Name",
      width: 200,
    },
    {
      id: "role",
      text: "Role",
      width: 200,
    },
    {
      id: "department",
      text: "Department",
      width: 200,
    },
  ]

  const items: TableItem[] = [
    // Engineering (8 people)
    {
      id: 1,
      name: "John Doe",
      department: "Engineering",
      role: "Senior Developer",
    },
    { id: 2, name: "Jane Smith", department: "Engineering", role: "Tech Lead" },
    {
      id: 3,
      name: "Bob Johnson",
      department: "Engineering",
      role: "Developer",
    },
    {
      id: 4,
      name: "Alice Brown",
      department: "Engineering",
      role: "Developer",
    },
    {
      id: 5,
      name: "Charlie Wilson",
      department: "Engineering",
      role: "Junior Developer",
    },
    {
      id: 6,
      name: "Diana Lee",
      department: "Engineering",
      role: "DevOps Engineer",
    },
    {
      id: 7,
      name: "Edward Davis",
      department: "Engineering",
      role: "QA Engineer",
    },
    {
      id: 8,
      name: "Fiona Garcia",
      department: "Engineering",
      role: "Developer",
    },
    // Design (6 people)
    {
      id: 9,
      name: "George Martinez",
      department: "Design",
      role: "Design Lead",
    },
    { id: 10, name: "Hannah White", department: "Design", role: "UX Designer" },
    { id: 11, name: "Ian Thompson", department: "Design", role: "UI Designer" },
    {
      id: 12,
      name: "Julia Anderson",
      department: "Design",
      role: "Graphic Designer",
    },
    {
      id: 13,
      name: "Kevin Taylor",
      department: "Design",
      role: "UX Researcher",
    },
    {
      id: 14,
      name: "Laura Moore",
      department: "Design",
      role: "Junior Designer",
    },
    // Marketing (5 people)
    {
      id: 15,
      name: "Michael Jackson",
      department: "Marketing",
      role: "Marketing Manager",
    },
    {
      id: 16,
      name: "Nancy Harris",
      department: "Marketing",
      role: "Content Writer",
    },
    {
      id: 17,
      name: "Oscar Clark",
      department: "Marketing",
      role: "SEO Specialist",
    },
    {
      id: 18,
      name: "Patricia Lewis",
      department: "Marketing",
      role: "Social Media Manager",
    },
    {
      id: 19,
      name: "Quinn Walker",
      department: "Marketing",
      role: "Marketing Analyst",
    },
    // Sales (5 people)
    {
      id: 20,
      name: "Rachel Hall",
      department: "Sales",
      role: "Sales Director",
    },
    {
      id: 21,
      name: "Steven Young",
      department: "Sales",
      role: "Account Executive",
    },
    {
      id: 22,
      name: "Tina King",
      department: "Sales",
      role: "Sales Representative",
    },
    {
      id: 23,
      name: "Ulysses Wright",
      department: "Sales",
      role: "Sales Representative",
    },
    {
      id: 24,
      name: "Victoria Scott",
      department: "Sales",
      role: "Business Development",
    },
  ]

  return (
    <div className="not-prose">
      <BaseTable
        headers={headers}
        items={items}
        groupBy="department"
        height="400px"
      />
    </div>
  )
}
