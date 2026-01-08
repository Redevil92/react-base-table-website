"use client"

import React, { useState } from "react"
import { BaseTable, BaseTableHeader } from "react-base-data-table"
import CommentData from "react-base-data-table/dist/types/components/BaseTable/models/CommentData"
import HighlightCondition from "react-base-data-table/dist/types/components/BaseTable/models/HighlightCondition"

import database from "./database.json"

// Team colors for Italian Serie A teams (muted/pastel versions)
const teamColors: Record<string, { bg: string; text: string; border: string }> =
  {
    // Milan - Red and Black (muted)
    Milan: { bg: "#E8D4D8", text: "#7A1A2F", border: "#AC1A2F" },
    // Inter - Blue and Black (muted)
    Inter: { bg: "#D4E5F0", text: "#0068A8", border: "#0068A8" },
    // Juventus - Black and White (muted)
    Juventus: { bg: "#E0E0E0", text: "#1A1A1A", border: "#000000" },
    // Napoli - Light Blue (muted)
    Napoli: { bg: "#D9F0F8", text: "#0A7AA8", border: "#12A0D7" },
    // Roma - Maroon and Yellow (muted)
    Roma: { bg: "#EBD8DB", text: "#8E1F2F", border: "#8E1F2F" },
    // Lazio - Light Blue and White (muted)
    Lazio: { bg: "#E0F0F8", text: "#0D2C54", border: "#87CEEB" },
    // Fiorentina - Purple (muted)
    Fiorentina: { bg: "#E8DCF0", text: "#5B2D8C", border: "#5B2D8C" },
    // Atalanta - Blue and Black (muted)
    Atalanta: { bg: "#D8E4F0", text: "#1E4D8C", border: "#1E4D8C" },
    // Bologna - Red and Blue (muted)
    Bologna: { bg: "#EBD6D8", text: "#A21C26", border: "#A21C26" },
    // Torino - Maroon (muted)
    Torino: { bg: "#E8D0D0", text: "#8B0000", border: "#8B0000" },
    // Genoa - Red and Blue (muted)
    Genoa: { bg: "#EBD4DC", text: "#A50034", border: "#A50034" },
    // Sampdoria - Blue (muted)
    Sampdoria: { bg: "#D8E4F4", text: "#0056A6", border: "#0056A6" },
    // Udinese - Black and White (muted)
    Udinese: { bg: "#E5E5E5", text: "#2A2A2A", border: "#000000" },
    // Sassuolo - Green and Black (muted)
    Sassuolo: { bg: "#D8F0E0", text: "#007A3D", border: "#00A651" },
    // Verona - Yellow and Blue (muted)
    Verona: { bg: "#FFF8D9", text: "#003DA5", border: "#003DA5" },
    // Empoli - Blue (muted)
    Empoli: { bg: "#D8E8F4", text: "#00529B", border: "#00529B" },
    // Lecce - Yellow and Red (muted)
    Lecce: { bg: "#FFF8DC", text: "#C41E3A", border: "#C41E3A" },
    // Monza - Red and White (muted)
    Monza: { bg: "#F8D8DA", text: "#C41E3A", border: "#E30613" },
    // Salernitana - Maroon (muted)
    Salernitana: { bg: "#E5D8DC", text: "#6B1D2B", border: "#6B1D2B" },
    // Cagliari - Red and Blue (muted)
    Cagliari: { bg: "#EBD4DC", text: "#A50034", border: "#A50034" },
    // Frosinone - Yellow and Blue (muted)
    Frosinone: { bg: "#FFF8D9", text: "#003DA5", border: "#003DA5" },
    // Venezia - Orange, Green, Black (muted)
    Venezia: { bg: "#FAE8D8", text: "#B85A10", border: "#F47B20" },
    // Como - Blue (muted)
    Como: { bg: "#D8E8F4", text: "#0066B3", border: "#0066B3" },
    // Parma - Yellow and Blue (muted)
    Parma: { bg: "#FFF8D4", text: "#0033A0", border: "#0033A0" },
    // Cremonese - Gray and Red (muted)
    Cremonese: { bg: "#E8E8E8", text: "#5A5A5A", border: "#7A7A7A" },
    // Spezia - White and Black (muted)
    Spezia: { bg: "#F5F5F5", text: "#2A2A2A", border: "#000000" },
    // Default for unknown teams
    default: { bg: "#F0F1F3", text: "#374151", border: "#6B7280" },
  }

const getTeamColors = (team: string) => {
  return teamColors[team] || teamColors["default"]
}

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

const TableWithGroups = () => {
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set())
  const [highlights, setHighlights] = useState<HighlightCondition[]>([])
  const [comments, setComments] = useState<CommentData[]>([])

  const handleSetHighlight = (highlight: HighlightCondition, item: any) => {
    const newHighlight = {
      ...highlight,
      propertyId: "player",
      value: item.player,
    }
    setHighlights((prev) => {
      const existingIndex = prev.findIndex(
        (h) => h.propertyId === "player" && h.value === item.player
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
    item: any
  ) => {
    setHighlights((prev) => {
      const existingIndex = prev.findIndex(
        (h) => h.propertyId === "player" && h.value === item.player
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

  const handleSaveComment = (comment: CommentData, item: any) => {
    const newComment = {
      ...comment,
      propertyId: "player",
      value: item.player,
    }
    setComments((prev) => {
      const existingIndex = prev.findIndex(
        (c) =>
          c.propertyId === "player" &&
          c.value === item.player &&
          c.columnId === comment.columnId
      )
      if (existingIndex >= 0) {
        const updated = [...prev]
        updated[existingIndex] = newComment
        return updated
      }
      return [...prev, newComment]
    })
  }

  const handleDeleteComment = (comment: CommentData, item: any) => {
    setComments((prev) =>
      prev.filter(
        (c) =>
          !(
            c.propertyId === "player" &&
            c.value === item.player &&
            c.columnId === comment.columnId
          )
      )
    )
  }

  return (
    <div className="not-prose">
      <BaseTable
        items={data}
        headers={headers}
        groupBy="team"
        height="500px"
        highlightCondition={highlights}
        onSetHighlightCondition={handleSetHighlight}
        onRemoveHighlightCondition={handleRemoveHighlight}
        comments={comments}
        onSaveComment={handleSaveComment}
        onDeleteComment={handleDeleteComment}
        advancedSettings={{
          currentUsername: "Demo User",
        }}
        groupByCustomRender={(
          _,
          value,
          columnCount,
          isCollapsed,
          onCollapseGroup,
          filteredItemsInGroup
        ) => {
          const colors = getTeamColors(value as string)
          const playerCount = filteredItemsInGroup?.length || 0

          return (
            <td
              colSpan={columnCount}
              onClick={() => onCollapseGroup(value)}
              style={{
                backgroundColor: colors.bg,
                color: colors.text,
                borderLeft: `3px solid ${colors.border}`,
                padding: "6px 12px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    transition: "transform 0.2s ease",
                    transform: isCollapsed ? "rotate(-90deg)" : "rotate(0deg)",
                  }}
                >
                  ▼
                </span>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    backgroundColor: colors.border,
                    color: "#FFFFFF",
                    padding: "1px 6px",
                    borderRadius: "10px",
                    fontSize: "11px",
                    fontWeight: "500",
                  }}
                >
                  {playerCount}
                </span>
              </div>
            </td>
          )
        }}
      />
    </div>
  )
}

export default TableWithGroups
