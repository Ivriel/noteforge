"use client"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronRight, File } from "lucide-react";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { useQueryState } from "nuqs";

interface SidebarDataProps {
    data: {
        navMain: {
            title: string;
            items: {
                title: string;
                url: string;
            }[];
        }[];
    };
}

export function SidebarData({ data }: SidebarDataProps) {
    const [search] = useQueryState("search", { defaultValue: "" });

    // --- LOGIKA PENCARIAN BARU ---
    const searchLower = search.toLowerCase();

    const filteredData = data.navMain
        .map((item) => {
            // 1. Cek apakah judul kategori (Laci) cocok dengan pencarian
            const parentMatches = item.title.toLowerCase().includes(searchLower);

            // 2. Saring isi catatannya, ambil HANYA catatan yang cocok
            const matchingChildren = item.items.filter((subItem) =>
                subItem.title.toLowerCase().includes(searchLower)
            );

            // 3. Modifikasi lacinya: 
            // - Kalau user mencari nama Laci, tampilkan SEMUA isinya.
            // - Kalau tidak, tampilkan isi yang cocok saja (matchingChildren).
            return {
                ...item,
                items: parentMatches ? item.items : matchingChildren,
            };
        })
        .filter((item) => {
            // 4. Buang Laci dari layar JIKA: judul lacinya tidak cocok DAN isinya kosong (tidak ada yang cocok)
            const parentMatches = item.title.toLowerCase().includes(searchLower);
            return parentMatches || item.items.length > 0;
        });
    // -----------------------------

    return (
        <>
            {filteredData.map((item) => (
                <Collapsible
                    key={item.title}
                    title={item.title}
                    defaultOpen
                    className="group/collapsible"
                >
                    <SidebarGroup>
                        <SidebarGroupLabel
                            asChild
                            className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        >
                            <CollapsibleTrigger>
                                {item.title}{" "}
                                {item.items.length > 0 && (
                                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                )}
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {item.items.map((subItem: { title: string; url: string }) => (
                                        <SidebarMenuItem key={subItem.title}>
                                            <SidebarMenuButton asChild>
                                                <a href={subItem.url}>
                                                    <File />
                                                    <span>{subItem.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>
            ))}
        </>
    );
}