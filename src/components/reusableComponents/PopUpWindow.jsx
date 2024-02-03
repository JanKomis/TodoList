import { XIcon } from "@primer/octicons-react";

export default function PopUpWindow({ title, setClose, close, children }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[999] bg-black bg-opacity-80 ">
      <div className="w-80 px-4 py-2 flex flex-col bg-yellow-500 m-auto rounded-lg relative overflow-hidden">
        <h2 className="block">{title}</h2>
        <hr className="h-px bg-yellow-400 border-0 w-64"/>

        <button
          className="absolute -top-3 -right-3 z-[999] bg-red-700 hover:bg-red-400 p-1 pt-4 pr-4 rounded-lg"
          onClick={() => setClose((close) => (close = false))}
        >
          <XIcon size={24} />
        </button>
        <div className="block">{children}</div>
      </div>
    </div>
  );
}
