export default function ItemContainer({ children }) {
  return <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">{children}</ul>;
}
