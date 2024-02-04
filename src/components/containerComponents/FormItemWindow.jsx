import * as React from "react";
import PopUp from "../reusableComponents/PopUpWindow";

export default function FormItemWindow({
  close,
  setClose,
  windowTitle,
  item,
  setItem,
  listValue,
  setListValue,
  buttonTitle,
  handleSubmit,
}) {
  return (
    <>
      <PopUp setClose={setClose} close={close} title={windowTitle}>
        <form className="flex flex-col pt-2" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="bg-yellow-200/25 text-3xl mb-2 p-1 rounded"
            placeholder={"Title"}
            defaultValue={item.title}
            onChange={(e) => {
              setItem({ ...item, title: e.target.value });
            }}
            maxlength="9"
          ></input>
          <textarea
            placeholder={"Description"}
            defaultValue={item.text}
            className={"bg-yellow-200/25 h-20 mb-2 p-1 text-left rounded"}
            onChange={(e) => {
              setItem({ ...item, text: e.target.value });
            }}
            maxlength="48"
          ></textarea>

          <button
            type="submit"
            className="ml-auto p-1 px-4 rounded-full bg-yellow-600 hover:bg-yellow-600/25"
          >
            {buttonTitle}
          </button>
        </form>
      </PopUp>
    </>
  );
}
