import Pre from "@/components/ui/pre"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardGrid } from "@/components/markdown/card"
import { FileTree } from "@/components/markdown/filetree"
import { File, Folder } from "@/components/markdown/filetree/component"
import RoutedLink from "@/components/markdown/link"
import Mermaid from "@/components/markdown/mermaid"
import Note from "@/components/markdown/note"
import { Step, StepItem } from "@/components/markdown/step"
import BasicTableExample from "@/components/tableExamples/basic-table"
import EditableTableExample from "@/components/tableExamples/editable-table"
import SimpleBaseTable from "@/components/tableExamples/simpleTable"
import GroupedTableExample from "@/components/tableExamples/table-with-groups"
import TableWithFilters from "@/components/tableExamples/tableWithFilters"

export const components = {
  a: RoutedLink,
  Card,
  CardGrid,
  FileTree,
  Folder,
  File,
  Mermaid,
  Note,
  pre: Pre,
  Step,
  StepItem,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  BasicTableExample,
  EditableTableExample,
  GroupedTableExample,
  SimpleBaseTable,
  TableWithFilters,
}
