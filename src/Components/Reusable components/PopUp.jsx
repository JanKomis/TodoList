export default function PopUp({ setClosePopUp,closePopUp, children }) {
  return (
    <div>
      <h2>Add task</h2>
      <button onClick={() => setClosePopUp(!closePopUp)}>Close</button>
      {children}
    </div>
  );
}
