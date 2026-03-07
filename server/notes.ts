"use server"

import { db } from "@/db/drizzle"
import { InsertNote, notes } from "@/db/schema"
import { eq } from "drizzle-orm"

export const createNote = async (values: InsertNote) => {
    try {
        await db.insert(notes).values(values)

        return { success: true, message: "Note created successfully" }
    } catch {
        return { success: false, message: "Failed to create note" }
    }
}

export const getNoteById = async (id: string) => {
    try {
        const note = await db.query.notes.findFirst({
            where: eq(notes.id, id),
            with: {
                notebook: true
            }
        });
        return { success: true, note }
    } catch {
        return { success: false, message: "Failed to get note" }
    }
}

export const updateNote = async (id: string, values: Partial<InsertNote>) => {
    try {
        // const session = await auth.api.getSession({
        //     headers: await headers()
        // })

        // const userId = session?.user?.id;

        // if (!userId) {
        //     return { success: false, message: "User not found" };
        // }

        // Contoh filter ganda: ID cocok DAN milik user yang sedang login
        // await db.update(notebooks).set(values).where(and(eq(notebooks.id, id), eq(notebooks.userId, userId)))
        await db.update(notes).set(values).where(eq(notes.id, id));
        return { success: true, message: "Note updated successfully" }
    } catch {
        return { success: false, message: "Failed to update note" };
    }
}

export const deleteNote = async (id: string) => {
    try {
        // const session = await auth.api.getSession({
        //     headers: await headers()
        // })

        // const userId = session?.user?.id;

        // if (!userId) {
        //     return { success: false, message: "User not found" };
        // }

        // Contoh filter ganda: ID cocok DAN milik user yang sedang login
        // await db.delete(notebooks).where(and(eq(notebooks.id, id), eq(notebooks.userId, userId)))
        await db.delete(notes).where(eq(notes.id, id));
        return { success: true, message: "Note deleted successfully" }
    } catch {
        return { success: false, message: "Failed to delete note" }
    }
}