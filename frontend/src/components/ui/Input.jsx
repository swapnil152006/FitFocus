export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          border
          border-slate-300
          rounded-xl
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-blue-500
          transition
        "
      />
    </div>
  );
}