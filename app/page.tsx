import { Link } from "lib/transition"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EditableProductTable from "@/components/tableExamples/editableProductTable"
import TableWithFromArray from "@/components/tableExamples/tableWithFromArray"
import TableWithCustomGroups from "@/components/tableExamples/tableWithGroup/groupFootballExample/tableWithCustomGroups"

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <h1 className="mb-4 text-4xl font-bold sm:text-7xl">
        React base data table
      </h1>

      <p className="text-foreground mb-8 max-w-[600px] sm:text-base">
        A powerful and customizable React data table component with built-in
        sorting, filtering, virtualization, and more.
      </p>

      <Tabs defaultValue="grouped" className="w-full max-w-[1200px]">
        <TabsList className="mb-4">
          <TabsTrigger value="grouped">Grouped Table</TabsTrigger>
          <TabsTrigger value="editable">Editable Table</TabsTrigger>
          <TabsTrigger value="fromArray">From Array</TabsTrigger>
        </TabsList>
        <TabsContent value="grouped">
          <div className="w-full overflow-auto">
            <TableWithCustomGroups />
          </div>
        </TabsContent>
        <TabsContent value="editable">
          <div className="w-full overflow-auto">
            <EditableProductTable />
          </div>
        </TabsContent>
        <TabsContent value="fromArray">
          <div className="w-full overflow-auto">
            <TableWithFromArray />
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}
