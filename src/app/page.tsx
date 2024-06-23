'use client'; // Adicione esta linha

import CharacterCount from '@tiptap/extension-character-count'
import Highlight from '@tiptap/extension-highlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './components/MenuBar'

export default function Home() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Highlight,
      TaskList,
      TaskItem,
      CharacterCount.configure({
        limit: 10000,
      }),
    ],
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-100">
      <div className="bg-white border-3 border-black rounded-lg text-black flex flex-col max-h-104">
        {editor && <MenuBar editor={editor} />}
        <EditorContent className="flex-1 overflow-x-hidden overflow-y-auto p-4" editor={editor} />
      </div>
    </main>
  );
}
