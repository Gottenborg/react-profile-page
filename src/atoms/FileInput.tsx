interface TextInputProps {
  label?: string;
  placeholder?: string;
  id: string;
  disabled?: boolean;
  type?: string;
}

function TextInput({ label, placeholder, id, disabled, type }: TextInputProps) {
  const classes = `
    w-full h-11 pl-3.5 pr-7 py-3 bg-slate-800 text-slate-200 rounded-lg
    justify-start items-center gap-2.5 inline-flex hover:bg-slate-900
    hover:border-slate-900 hover:shadow-md focus:border-slate-200 focus:outline-none
    ${disabled
      ? 'bg-slate-200 placeholder-slate-400 border border-slate-300 cursor-not-allowed disabled hover:bg-slate-200 hover:border-slate-200 hover:shadow-none'
      : ''}
  `;

  const onInput = () => {
    // You can implement the logic for emitting 'input' here if needed.
  };

  return (
    <div>
      <label htmlFor={id}>
        {label && <span>{label}</span>}
        <input
          id={id}
          type={type || 'text'}
          name={id}
          disabled={disabled}
          className={classes}
          placeholder={placeholder || 'Some placeholder'}
          onChange={onInput}
        />
      </label>
    </div>
  );
}

export default TextInput;
