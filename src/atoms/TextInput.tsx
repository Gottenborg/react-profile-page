import { FC, ChangeEvent } from 'react';

interface TextInputProps {
  label?: string;
  placeholder: string;
  id: string;
  disabled?: boolean;
  type?: string;
  value?: string;
  onInput?: (value: string) => void;
}

const TextInput: FC<TextInputProps> = ({
  label,
  placeholder,
  id,
  disabled = false,
  type = 'text',
  value = '',
  onInput,
}) => {
  const classes = `
    w-full h-11 py-3 px-2 bg-white text-slate-700 rounded-lg justify-start items-center gap-2.5 inline-flex focus:border-blue-300 focus:outline-none
    ${disabled
      ? 'disabled'
      : 'hover:border-slate-900 hover:shadow-md border-2'}
  `;

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (onInput) {
      onInput(event.target.value);
    }
  };

  return (
    <label htmlFor={id}>
      {label && <span>{label}</span>}
      <input
        id={id}
        type={type}
        name={id}
        disabled={disabled}
        className={classes}
        placeholder={placeholder}
        value={value}
        onChange={handleInput}
      />
    </label>
  );
};

export default TextInput;
