import * as React from "react"

import { SearchForm } from "@/components/search-form"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { getNotebooks } from "@/server/notebooks"
import Image from "next/image"
import { SidebarData } from "./sidebar-data"

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const notebooks = await getNotebooks()
  // This is sample data.
  const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
      ...(notebooks?.notebooks?.map((notebook) => ({
        title: notebook.name,
        url: `/dashboard/${notebook.id}`,
        items: ((notebook as any).notes || []).map((note: any) => ({
          title: note.title,
          url: `/dashboard/notebook/${notebook.id}/note/${note.id}`,
        })) || []
      })) ?? [])
    ],
  }
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 my-4">
          <Image src="/noteforge-logo.png" alt="Noteforge Logo" width={32} height={32} />
          <span className="text-lg font-bold">Noteforge</span>
        </div>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <SidebarData data={data} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
