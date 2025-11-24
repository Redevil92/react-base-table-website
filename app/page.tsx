import { Link } from "lib/transition"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"
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
      <div className="h-[500px] w-300 overflow-auto rounded border">
        <TableWithCustomGroups />
      </div>

      <div className="flex items-center gap-5">
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
