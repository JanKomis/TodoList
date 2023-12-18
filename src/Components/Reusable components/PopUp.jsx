import { XIcon } from "@primer/octicons-react";

export default function PopUp({ title, setClosePopUp, closePopUp, children }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[999] bg-black bg-opacity-50 ">
      <div className="w-80 px-4 py-2 flex flex-col bg-red-500 m-auto border-4 rounded-lg relative">
        <h2 className="block bg-blue-400">{title}</h2>
        <button
          className="absolute top-0 right-0 z-[999]"
          onClick={() => setClosePopUp((closePopUp) => (closePopUp = false))}
        >
          <XIcon size={24} />
        </button>
        <div className="block">{children}</div>
      </div>
    </div>
  );
}

/*
<div className="fixed inset-0 flex items-center justify-center z-[999] bg-black bg-opacity-50 ">
      <div className="h-32 w-80 flex flex-col bg-red-500 m-auto border-4 rounded-lg">
        <h2 className="block bg-blue-400">{title}</h2>
        <button className="absolute right-0 top-0 p-1 z-[999]"
          onClick={() => setClosePopUp((closePopUp) => (closePopUp = false))}
        >
          <XIcon size={24} />
        </button>
        <div className="block">{children}</div>
      </div>
    </div>




export default function PopUp({ title, setClosePopUp, closePopUp, children }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[999] bg-black bg-opacity-50 ">
      <div className="h-32 w-80 flex bg-red-500 m-auto border-4 rounded-lg relative">
        <h2 className="block">{title}</h2>
        <button className="absolute right-0 top-0 p-1"
          onClick={() => setClosePopUp((closePopUp) => (closePopUp = false))}
        >
          <XIcon size={24} />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
*/
