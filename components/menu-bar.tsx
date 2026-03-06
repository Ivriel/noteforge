import type { Editor } from '@tiptap/core'
import { useEditorState } from '@tiptap/react'
import React from 'react'

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
                >
                    Bold
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editorState.canItalic}
                    className={editorState.isItalic ? styles.isActive : ''}
                >
                    Italic
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editorState.canStrike}
                    className={editorState.isStrike ? styles.isActive : ''}
                >
                    Strike
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editorState.canCode}
                    className={editorState.isCode ? styles.isActive : ''}
                >
                    Code
                </button>
                <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>Clear marks</button>
                <button onClick={() => editor.chain().focus().clearNodes().run()}>Clear nodes</button>
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editorState.isParagraph ? styles.isActive : ''}
                >
                    Paragraph
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editorState.isHeading1 ? styles.isActive : ''}
                >
                    H1
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editorState.isHeading2 ? styles.isActive : ''}
                >
                    H2
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editorState.isHeading3 ? styles.isActive : ''}
                >
                    H3
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={editorState.isHeading4 ? styles.isActive : ''}
                >
                    H4
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    className={editorState.isHeading5 ? styles.isActive : ''}
                >
                    H5
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    className={editorState.isHeading6 ? styles.isActive : ''}
                >
                    H6
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editorState.isBulletList ? styles.isActive : ''}
                >
                    Bullet list
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editorState.isOrderedList ? styles.isActive : ''}
                >
                    Ordered list
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editorState.isCodeBlock ? styles.isActive : ''}
                >
                    Code block
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editorState.isBlockquote ? styles.isActive : ''}
                >
                    Blockquote
                </button>
                <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>Horizontal rule</button>
                <button onClick={() => editor.chain().focus().setHardBreak().run()}>Hard break</button>
                <button onClick={() => editor.chain().focus().undo().run()} disabled={!editorState.canUndo}>
                    Undo
                </button>
                <button onClick={() => editor.chain().focus().redo().run()} disabled={!editorState.canRedo}>
                    Redo
                </button>
            </div>
        </div>
    )
}