export default function PopUp({ openPopUp, children }) {
  return (
    <div>
      <h2>Add task</h2>
      <button onClick={openPopUp}>Close</button>
      {children}
    </div>
  );
}
