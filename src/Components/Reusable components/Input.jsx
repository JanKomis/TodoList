export default function Input({
    children,
    value,
    onChange,
    withLabel = true,
    placeholder = "",
  }) {
    return (
      <>
        {withLabel && <label htmlFor="titleInput">{children}</label>}
        <input
          id="titleInput"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </>
    );
  }