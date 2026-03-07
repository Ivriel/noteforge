import type { Editor } from '@tiptap/core'
import { useEditorState } from '@tiptap/react'
import React from 'react'
import {
    Bold,
    Italic,
    Strikethrough,
    Code,
    Eraser,
    RemoveFormatting,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    List,
    ListOrdered,
    CodeSquare,
    Quote,
    Minus,
    CornerDownLeft,
    Undo,
    Redo,
    Pilcrow
} from 'lucide-react'

import { menuBarStateSelector } from './menu-bar-state'
import styles from './rich-text-editor.module.css'

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
    const editorState = useEditorState({
        editor,
        selector: menuBarStateSelector,
    })

    if (!editor || !editorState) {
        return null
    }

    return (
        <div className={styles.controlGroup}>
            <div className={styles.buttonGroup}>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editorState.canBold}
                    className={editorState.isBold ? styles.isActive : ''}
                    title="Bold"
                >
                    <Bold size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editorState.canItalic}
                    className={editorState.isItalic ? styles.isActive : ''}
                    title="Italic"
                >
                    <Italic size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editorState.canStrike}
                    className={editorState.isStrike ? styles.isActive : ''}
                    title="Strikethrough"
                >
                    <Strikethrough size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editorState.canCode}
                    className={editorState.isCode ? styles.isActive : ''}
                    title="Code"
                >
                    <Code size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().unsetAllMarks().run()}
                    title="Clear marks"
                >
                    <RemoveFormatting size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().clearNodes().run()}
                    title="Clear nodes"
                >
                    <Eraser size={16} />
                </button>
                <div className={styles.separator} />
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editorState.isParagraph ? styles.isActive : ''}
                    title="Paragraph"
                >
                    <Pilcrow size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editorState.isHeading1 ? styles.isActive : ''}
                    title="Heading 1"
                >
                    <Heading1 size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editorState.isHeading2 ? styles.isActive : ''}
                    title="Heading 2"
                >
                    <Heading2 size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editorState.isHeading3 ? styles.isActive : ''}
                    title="Heading 3"
                >
                    <Heading3 size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={editorState.isHeading4 ? styles.isActive : ''}
                    title="Heading 4"
                >
                    <Heading4 size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    className={editorState.isHeading5 ? styles.isActive : ''}
                    title="Heading 5"
                >
                    <Heading5 size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    className={editorState.isHeading6 ? styles.isActive : ''}
                    title="Heading 6"
                >
                    <Heading6 size={16} />
                </button>
                <div className={styles.separator} />
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editorState.isBulletList ? styles.isActive : ''}
                    title="Bullet list"
                >
                    <List size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editorState.isOrderedList ? styles.isActive : ''}
                    title="Ordered list"
                >
                    <ListOrdered size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editorState.isCodeBlock ? styles.isActive : ''}
                    title="Code block"
                >
                    <CodeSquare size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editorState.isBlockquote ? styles.isActive : ''}
                    title="Blockquote"
                >
                    <Quote size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                    title="Horizontal rule"
                >
                    <Minus size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setHardBreak().run()}
                    title="Hard break"
                >
                    <CornerDownLeft size={16} />
                </button>
                <div className={styles.separator} />
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editorState.canUndo}
                    title="Undo"
                >
                    <Undo size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editorState.canRedo}
                    title="Redo"
                >
                    <Redo size={16} />
                </button>
            </div>
        </div>
    )
}