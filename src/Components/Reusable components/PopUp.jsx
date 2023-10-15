export default function PopUp({ title, setClosePopUp, closePopUp, children }) {
  return (
    <div>
      <h2>{title}</h2>
      <button
        onClick={() => setClosePopUp((closePopUp) => (closePopUp = false))}
      >
        Close
      </button>
      {children}
    </div>
  );
}
