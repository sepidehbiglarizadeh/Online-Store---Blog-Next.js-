const InputComponent = ({
  label,
  formik,
  name,
  type,
  className,
  placeholder = "",
}) => {
  return (
    <div className={className}>
      <label
        className="flex flex-row justify-between mb-2 text-sm text-gray-500"
        htmlFor={name}
      >
        {label}
        {formik.touched[name] && formik.errors[name] ? (
          <div className="text-rose-600 text-xs">{formik.errors[name]}</div>
        ) : null}
      </label>
      <input
        dir="ltr"
        placeholder={placeholder}
        className="text-left border p-2 text-sm rounded border-gray-200 outline-none w-full focus:outline-none focus:ring-2 focus:ring-violet-800 focus:border-transparent"
        type={type || "text"}
        id={name}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
    </div>
  );
};

export default InputComponent;
