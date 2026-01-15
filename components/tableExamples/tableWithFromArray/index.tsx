"use client"

import React, { useState } from "react"
import { BaseTable, BaseTableHeader } from "react-base-data-table"

// Example: Student with multiple test scores stored as an array
// The fromArray feature expands each array item into a separate row
interface TestScore {
  subject: string
  score: number
  grade: string
  date: string
}

interface Student {
  id: number
  name: string
  class: string
  testScores: TestScore[] // Each test score becomes a row
}

const initialStudents: Student[] = [
  {
    id: 1,
    name: "John Smith",
    class: "10A",
    testScores: [
      { subject: "Math", score: 95, grade: "A", date: "2026-01-10" },
      { subject: "Science", score: 88, grade: "B+", date: "2026-01-11" },
      { subject: "English", score: 92, grade: "A-", date: "2026-01-12" },
    ],
  },
  {
    id: 2,
    name: "Sarah Johnson",
    class: "10A",
    testScores: [
      { subject: "Math", score: 78, grade: "C+", date: "2026-01-10" },
      { subject: "Science", score: 95, grade: "A", date: "2026-01-11" },
      { subject: "English", score: 85, grade: "B", date: "2026-01-12" },
    ],
  },
  {
    id: 3,
    name: "Mike Chen",
    class: "10B",
    testScores: [
      { subject: "Math", score: 100, grade: "A+", date: "2026-01-10" },
      { subject: "Science", score: 92, grade: "A-", date: "2026-01-11" },
    ],
  },
  {
    id: 4,
    name: "Emily Davis",
    class: "10B",
    testScores: [
      { subject: "Math", score: 82, grade: "B-", date: "2026-01-10" },
      { subject: "Science", score: 79, grade: "C+", date: "2026-01-11" },
      { subject: "English", score: 88, grade: "B+", date: "2026-01-12" },
      { subject: "History", score: 94, grade: "A", date: "2026-01-13" },
    ],
  },
  {
    id: 5,
    name: "David Wilson",
    class: "10A",
    testScores: [
      { subject: "Math", score: 91, grade: "A-", date: "2026-01-10" },
      { subject: "Science", score: 87, grade: "B+", date: "2026-01-11" },
      { subject: "English", score: 90, grade: "A-", date: "2026-01-12" },
    ],
  },
  {
    id: 6,
    name: "Lisa Anderson",
    class: "10B",
    testScores: [
      { subject: "Math", score: 88, grade: "B+", date: "2026-01-10" },
      { subject: "Science", score: 93, grade: "A-", date: "2026-01-11" },
      { subject: "English", score: 97, grade: "A+", date: "2026-01-12" },
    ],
  },
  {
    id: 7,
    name: "James Brown",
    class: "10A",
    testScores: [
      { subject: "Math", score: 72, grade: "C", date: "2026-01-10" },
      { subject: "Science", score: 81, grade: "B-", date: "2026-01-11" },
      { subject: "English", score: 75, grade: "C+", date: "2026-01-12" },
    ],
  },
  {
    id: 8,
    name: "Amanda Martinez",
    class: "10B",
    testScores: [
      { subject: "Math", score: 94, grade: "A", date: "2026-01-10" },
      { subject: "Science", score: 89, grade: "B+", date: "2026-01-11" },
      { subject: "English", score: 91, grade: "A-", date: "2026-01-12" },
      { subject: "History", score: 86, grade: "B", date: "2026-01-13" },
    ],
  },
  {
    id: 9,
    name: "Robert Taylor",
    class: "10A",
    testScores: [
      { subject: "Math", score: 85, grade: "B", date: "2026-01-10" },
      { subject: "Science", score: 84, grade: "B", date: "2026-01-11" },
    ],
  },
  {
    id: 10,
    name: "Jennifer Lee",
    class: "10B",
    testScores: [
      { subject: "Math", score: 98, grade: "A+", date: "2026-01-10" },
      { subject: "Science", score: 96, grade: "A", date: "2026-01-11" },
      { subject: "English", score: 94, grade: "A", date: "2026-01-12" },
    ],
  },
  {
    id: 11,
    name: "Christopher White",
    class: "10A",
    testScores: [
      { subject: "Math", score: 77, grade: "C+", date: "2026-01-10" },
      { subject: "Science", score: 80, grade: "B-", date: "2026-01-11" },
      { subject: "English", score: 82, grade: "B-", date: "2026-01-12" },
    ],
  },
  {
    id: 12,
    name: "Victoria Garcia",
    class: "10B",
    testScores: [
      { subject: "Math", score: 89, grade: "B+", date: "2026-01-10" },
      { subject: "Science", score: 91, grade: "A-", date: "2026-01-11" },
      { subject: "English", score: 88, grade: "B+", date: "2026-01-12" },
      { subject: "History", score: 92, grade: "A-", date: "2026-01-13" },
    ],
  },
  {
    id: 13,
    name: "Mark Robinson",
    class: "10A",
    testScores: [
      { subject: "Math", score: 81, grade: "B-", date: "2026-01-10" },
      { subject: "Science", score: 86, grade: "B", date: "2026-01-11" },
      { subject: "English", score: 79, grade: "C+", date: "2026-01-12" },
    ],
  },
  {
    id: 14,
    name: "Elizabeth Harris",
    class: "10B",
    testScores: [
      { subject: "Math", score: 93, grade: "A-", date: "2026-01-10" },
      { subject: "Science", score: 90, grade: "A-", date: "2026-01-11" },
      { subject: "English", score: 96, grade: "A+", date: "2026-01-12" },
    ],
  },
  {
    id: 15,
    name: "Daniel Martin",
    class: "10A",
    testScores: [
      { subject: "Math", score: 76, grade: "C+", date: "2026-01-10" },
      { subject: "Science", score: 82, grade: "B-", date: "2026-01-11" },
      { subject: "English", score: 80, grade: "B-", date: "2026-01-12" },
    ],
  },
  {
    id: 16,
    name: "Michelle Thompson",
    class: "10B",
    testScores: [
      { subject: "Math", score: 87, grade: "B+", date: "2026-01-10" },
      { subject: "Science", score: 88, grade: "B+", date: "2026-01-11" },
      { subject: "English", score: 89, grade: "B+", date: "2026-01-12" },
    ],
  },
  {
    id: 17,
    name: "Kevin Jones",
    class: "10A",
    testScores: [
      { subject: "Math", score: 92, grade: "A-", date: "2026-01-10" },
      { subject: "Science", score: 91, grade: "A-", date: "2026-01-11" },
      { subject: "English", score: 93, grade: "A", date: "2026-01-12" },
    ],
  },
  {
    id: 18,
    name: "Nicole Clark",
    class: "10B",
    testScores: [
      { subject: "Math", score: 84, grade: "B", date: "2026-01-10" },
      { subject: "Science", score: 85, grade: "B", date: "2026-01-11" },
      { subject: "English", score: 83, grade: "B", date: "2026-01-12" },
    ],
  },
  {
    id: 19,
    name: "Brandon Rodriguez",
    class: "10A",
    testScores: [
      { subject: "Math", score: 75, grade: "C", date: "2026-01-10" },
      { subject: "Science", score: 78, grade: "C+", date: "2026-01-11" },
    ],
  },
  {
    id: 20,
    name: "Rachel Young",
    class: "10B",
    testScores: [
      { subject: "Math", score: 96, grade: "A", date: "2026-01-10" },
      { subject: "Science", score: 94, grade: "A", date: "2026-01-11" },
      { subject: "English", score: 98, grade: "A+", date: "2026-01-12" },
    ],
  },
  {
    id: 21,
    name: "Steven Allen",
    class: "10A",
    testScores: [
      { subject: "Math", score: 80, grade: "B-", date: "2026-01-10" },
      { subject: "Science", score: 83, grade: "B", date: "2026-01-11" },
    ],
  },
  {
    id: 22,
    name: "Angela King",
    class: "10B",
    testScores: [
      { subject: "Math", score: 86, grade: "B", date: "2026-01-10" },
      { subject: "Science", score: 87, grade: "B+", date: "2026-01-11" },
      { subject: "English", score: 90, grade: "A-", date: "2026-01-12" },
    ],
  },
  {
    id: 23,
    name: "Ryan Scott",
    class: "10A",
    testScores: [
      { subject: "Math", score: 89, grade: "B+", date: "2026-01-10" },
      { subject: "Science", score: 85, grade: "B", date: "2026-01-11" },
      { subject: "English", score: 87, grade: "B+", date: "2026-01-12" },
    ],
  },
  {
    id: 24,
    name: "Jessica Wright",
    class: "10B",
    testScores: [
      { subject: "Math", score: 91, grade: "A-", date: "2026-01-10" },
      { subject: "Science", score: 89, grade: "B+", date: "2026-01-11" },
    ],
  },
  {
    id: 25,
    name: "Matthew Lopez",
    class: "10A",
    testScores: [
      { subject: "Math", score: 83, grade: "B", date: "2026-01-10" },
      { subject: "Science", score: 81, grade: "B-", date: "2026-01-11" },
      { subject: "English", score: 84, grade: "B", date: "2026-01-12" },
    ],
  },
  {
    id: 26,
    name: "Laura Hill",
    class: "10B",
    testScores: [
      { subject: "Math", score: 88, grade: "B+", date: "2026-01-10" },
      { subject: "Science", score: 92, grade: "A-", date: "2026-01-11" },
      { subject: "English", score: 90, grade: "A-", date: "2026-01-12" },
    ],
  },
  {
    id: 27,
    name: "Andrew Nelson",
    class: "10A",
    testScores: [
      { subject: "Math", score: 74, grade: "C", date: "2026-01-10" },
      { subject: "Science", score: 76, grade: "C+", date: "2026-01-11" },
    ],
  },
  {
    id: 28,
    name: "Sophia Carter",
    class: "10B",
    testScores: [
      { subject: "Math", score: 95, grade: "A", date: "2026-01-10" },
      { subject: "Science", score: 93, grade: "A-", date: "2026-01-11" },
      { subject: "English", score: 97, grade: "A+", date: "2026-01-12" },
      { subject: "History", score: 94, grade: "A", date: "2026-01-13" },
    ],
  },
  {
    id: 29,
    name: "Jonathan Mitchell",
    class: "10A",
    testScores: [
      { subject: "Math", score: 88, grade: "B+", date: "2026-01-10" },
      { subject: "Science", score: 86, grade: "B", date: "2026-01-11" },
    ],
  },
  {
    id: 30,
    name: "Olivia Perez",
    class: "10B",
    testScores: [
      { subject: "Math", score: 85, grade: "B", date: "2026-01-10" },
      { subject: "Science", score: 87, grade: "B+", date: "2026-01-11" },
      { subject: "English", score: 86, grade: "B", date: "2026-01-12" },
    ],
  },
]

// Headers configuration using fromArray
// The header 'id' must match the property name in the testScores array objects
const headers: BaseTableHeader[] = [
  { text: "ID", id: "id", width: 60 },
  { text: "Student Name", id: "name", width: 150 },
  { text: "Class", id: "class", width: 80 },
  // These columns use fromArray to display data from testScores array
  // Each testScores item creates a new row
  {
    text: "Subject",
    id: "subject", // matches testScores[].subject
    width: 120,
    fromArray: "testScores",
    arrayRowsOnly: true,
  },
  {
    text: "Score",
    id: "score", // matches testScores[].score
    width: 80,
    fromArray: "testScores",
    arrayRowsOnly: true,
    editOptions: {
      editable: true,
      type: "number",
    },
  },
  {
    text: "Grade",
    id: "grade", // matches testScores[].grade
    width: 80,
    fromArray: "testScores",
    arrayRowsOnly: true,
    editOptions: {
      editable: true,
      type: "list",
      options: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "F"],
    },
  },
  {
    text: "Test Date",

    id: "date", // matches testScores[].date
    width: 120,
    arrayRowsOnly: true,
    fromArray: "testScores",
  },
]

const TableWithFromArray = () => {
  const [items, setItems] = useState<Student[]>(initialStudents)

  const handleChange = (
    updatedItem: Student,
    originalIndex: number,
    fromArray?: { fromArrayIndex: number; headerId: string }
  ) => {
    console.log("Change detected:", { updatedItem, originalIndex, fromArray })

    if (fromArray) {
      console.log(
        `Array field "${fromArray.headerId}" at index ${fromArray.fromArrayIndex} was updated`
      )
    }

    const newItems = [...items]
    newItems[originalIndex] = updatedItem
    setItems(newItems)
  }

  return (
    <div className="not-prose overflow-hidden">
      {/* <div className="mb-4 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
        <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
          fromArray Feature Demo
        </h3>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          This table demonstrates the{" "}
          <code className="rounded bg-blue-100 px-1 dark:bg-blue-900">
            fromArray
          </code>{" "}
          feature which expands array data into multiple rows. Each student has
          multiple test scores, and each test score is displayed as a separate
          row. The Score and Grade columns are editable.
        </p>
      </div> */}
      <BaseTable<Student>
        items={items}
        headers={headers}
        height="500px"
        onChange={handleChange}
        advancedSettings={{
          showIndex: false,
          contrastRow: false,
          showFlashOnCellUpdate: true,
        }}
      />
    </div>
  )
}

export default TableWithFromArray
