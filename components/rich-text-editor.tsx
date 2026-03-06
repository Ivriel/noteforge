"use client"
import { TextStyleKit } from '@tiptap/extension-text-style'
import { EditorContent, JSONContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

import { MenuBar } from './menu-bar'
import styles from './rich-text-editor.module.css'
import { updateNote } from '@/server/notes'

interface RichTextEditorProps {
  content?: JSONContent[];
  noteId?: string;
}

const extensions = [TextStyleKit, StarterKit]

export default function RichTextEditor({ content, noteId }: RichTextEditorProps) {
  const editor = useEditor({
    extensions,
    autofocus: true,
    immediatelyRender: false,
    editable: true,
    injectCSS: false,
    onUpdate: ({ editor }) => {
      if (noteId) {
        const content = editor.getJSON()
        console.log(content)
        updateNote(noteId, { content })
      }
    },
    content
  })

  return (
    <>
      <MenuBar editor={editor} />
      <div className={styles.editorWrapper}>
        <EditorContent editor={editor} className={styles.tiptap} />
      </div>
    </>
  )
}