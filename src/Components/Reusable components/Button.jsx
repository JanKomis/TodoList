export default function Button({ children, onClick, type = "button" }) {
  return <button onClick={onClick} type = {type} className="bg-yellow-400 hover:bg-yellow-600 px-2 py-1"
  >{children}</button>;
}

