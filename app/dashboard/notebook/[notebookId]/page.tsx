import NoteCard from "@/components/note-card";
import { PageWrapper } from "@/components/page-wrapper";
import RichTextEditor from "@/components/rich-text-editor";
import { getNotebookById } from "@/server/notebooks";
import { JSONContent } from "@tiptap/core";

type Params = Promise<{ notebookId: string }>

export default async function NotebookPage({ params }: { params: Params }) {
    const { notebookId } = await params;

    const { notebook } = await getNotebookById(notebookId);

    return (
        <PageWrapper breadcrumbs={[
            { label: "Dashboard", href: "/dashboard" },
            { label: notebook?.name || "Notebook", href: `/dashboard/notebook/${notebookId}` }
        ]}>
            <h1>{notebook?.name}</h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {notebook?.notes?.map((note) => (
                    <NoteCard key={note.id} note={note} />
                ))}
            </div>
        </PageWrapper>
    )
}