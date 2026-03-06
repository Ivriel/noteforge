import React, { Fragment } from "react";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { SidebarTrigger } from "./ui/sidebar";
import { Logout } from "./logout";
import { ModeToggle } from "./mode-toggle";

interface PageWrapperProps {
    children: React.ReactNode;
    breadcrumbs: {
        label: string;
        href: string;
    }[];
}

export function PageWrapper({ children, breadcrumbs }: PageWrapperProps) {
    return (
        <div className="flex flex-col gap-4">
            <header className="flex items-center p-4 border-b">
                <div className="flex items-center gap-4 justify-between w-full">
                    <div className="flex items-center gap-4">
                        <SidebarTrigger />
                        <Breadcrumb>
                            <BreadcrumbList>

                                {breadcrumbs.map((breadcrumb, index) => {
                                    // Mengecek apakah item saat ini adalah urutan terakhir dalam array breadcrumbs
                                    const isLast = index === breadcrumbs.length - 1;

                                    return (
                                        <Fragment key={breadcrumb.label}>
                                            <BreadcrumbItem>
                                                {isLast ? (
                                                    // Jika di halaman terakhir: teks ditebalkan dan tidak bisa diklik (UX aktif)
                                                    <span className="font-bold text-foreground">
                                                        {breadcrumb.label}
                                                    </span>
                                                ) : (
                                                    // Jika bukan terakhir: tetap tampilkan link untuk navigasi balik
                                                    <BreadcrumbLink href={breadcrumb.href}>
                                                        {breadcrumb.label}
                                                    </BreadcrumbLink>
                                                )}
                                            </BreadcrumbItem>

                                            {/* Baris ini memastikan separator (pemisah) hanya muncul di ANTARA item.
          Jika item adalah yang terakhir, separator tidak akan dirender.
      */}
                                            {!isLast && <BreadcrumbSeparator />}
                                        </Fragment>
                                    );
                                })}


                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <div className="flex items-center gap-4">
                        <ModeToggle />
                        <Logout />
                    </div>
                </div>
            </header >

            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                {children}
            </div>
        </div >
    )
}