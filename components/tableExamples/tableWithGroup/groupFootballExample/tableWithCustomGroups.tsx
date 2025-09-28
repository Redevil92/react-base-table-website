"use client"

import React from "react"
import { BaseTable, BaseTableHeader } from "react-base-data-table"

import database from "./database.json"

const data = database

const headers: BaseTableHeader[] = [
  { text: "Player", id: "player", width: 150 },
  { text: "Team", id: "team", width: 120 },
  { text: "#", id: "#", width: 60 },
  { text: "Nation", id: "Nation", width: 80 },
  { text: "Position", id: "Position", width: 80 },
  { text: "Age", id: "Age", width: 80 },
  { text: "Minutes", id: "Minutes", width: 80 },
  { text: "Goals", id: "Goals", width: 80 },
  { text: "Assists", id: "Assists", width: 80 },
  { text: "Penalty Shoot on Goal", id: "Penalty Shoot on Goal", width: 120 },
  { text: "Penalty Shoot", id: "Penalty Shoot", width: 100 },
  { text: "Total Shoot", id: "Total Shoot", width: 100 },
  { text: "Shoot on Target", id: "Shoot on Target", width: 100 },
  { text: "Yellow Cards", id: "Yellow Cards", width: 100 },
  { text: "Red Cards", id: "Red Cards", width: 100 },
  { text: "Touches", id: "Touches", width: 80 },
  { text: "Dribbles", id: "Dribbles", width: 80 },
  { text: "Tackles", id: "Tackles", width: 80 },
  { text: "Blocks", id: "Blocks", width: 80 },
  { text: "Expected Goals (xG)", id: "Expected Goals (xG)", width: 120 },
  { text: "Non-Penalty xG (npxG)", id: "Non-Penalty xG (npxG)", width: 120 },
  { text: "Expected Assists (xAG)", id: "Expected Assists (xAG)", width: 120 },
  { text: "Shot-Creating Actions", id: "Shot-Creating Actions", width: 120 },
  { text: "Goal-Creating Actions", id: "Goal-Creating Actions", width: 120 },
  { text: "Passes Completed", id: "Passes Completed", width: 120 },
  { text: "Passes Attempted", id: "Passes Attempted", width: 120 },
  { text: "Pass Completion %", id: "Pass Completion %", width: 120 },
  { text: "Progressive Passes", id: "Progressive Passes", width: 120 },
  { text: "Carries", id: "Carries", width: 80 },
  { text: "Progressive Carries", id: "Progressive Carries", width: 120 },
  { text: "Dribble Attempts", id: "Dribble Attempts", width: 120 },
  { text: "Successful Dribbles", id: "Successful Dribbles", width: 120 },
  { text: "Date", id: "Date", width: 100 },
]

const TableWithGroups = () => (
  <BaseTable
    items={data}
    headers={headers}
    groupBy="team"
    groupByCustomRender={(_, value, columnCount) => (
      <td
        colSpan={columnCount}
        className="bg-red-600"
        style={{ padding: 10, fontWeight: "bold" }}
      >
        <div>{value}</div>
      </td>
    )}
  ></BaseTable>
)

export default TableWithGroups
