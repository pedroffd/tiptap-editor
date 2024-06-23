import { LucideIcon, Bold, Italic, Strikethrough, Code, Highlighter, Heading1, Heading2, Pilcrow, List, ListOrdered, ListChecks, Quote, Minus, WrapText, Eraser, Undo, Redo } from 'lucide-react';

type IconTypes = {
  [key: string]: LucideIcon;
};

const icons: IconTypes = {
  bold: Bold,
  italic: Italic,
  strikethrough: Strikethrough,
  code: Code,
  highlight: Highlighter,
  heading1: Heading1,
  heading2: Heading2,
  paragraph: Pilcrow,
  bulletList: List,
  orderedList: ListOrdered,
  taskList: ListChecks,
  codeBlock: Code,
  blockquote: Quote,
  horizontalRule: Minus,
  hardBreak: WrapText,
  clearFormat: Eraser,
  undo: Undo,
  redo: Redo,
};

export default function MenuItem({
  icon,
  title,
  action,
  isActive = null,
}: {
  icon?: string;
  title?: string;
  action?: () => void;
  isActive?: (() => boolean) | null;
}) {
  const IconComponent = icon ? icons[icon] : null;

  return (
    <button
      className={`menu-item ${isActive && isActive() ? 'is-active' : ''} bg-transparent border-none rounded-md text-white cursor-pointer h-7 mr-1 p-1 w-7 hover:bg-gray-800`}
      onClick={action}
      title={title}
    >
      {IconComponent && <IconComponent className="h-full w-full" />}
    </button>
  );
}
