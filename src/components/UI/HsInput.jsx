const Input = ({
  id,
  onBlur,
  values,
  style,
  label,
  onChange,
  placeholder,
  type,
  text,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full group">
      <h1 className="text-sm font-medium">{label}</h1>
      {type === "input" ? (
        <input
          type={text}
          value={values}
          onBlur={onBlur}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          className={`${style} text-primary duration-100 outline-none  px-6 py-3 w-full rounded-xl font-semibold border-2 group-hover:border-primary`}
        />
      ) : (
        <textarea
          name=""
          id={id}
          onBlur={onBlur}
          cols="30"
          rows="10"
          placeholder={placeholder}
          onChange={onChange}
          value={values}
          className="text-xs md:text-sm duration-150 w-full outline-none border-b rounded-xl border-2 group-hover:border-primary px-6 py-3"
        >
          {values}
        </textarea>
      )}
    </div>
  );
};

export default Input;
