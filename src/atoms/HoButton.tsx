import { FC } from 'react';

interface ButtonProps {
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

const HoButton: FC<ButtonProps> = ({ label, primary = false, onClick }) => {
  const classes = `
    w-100 px-4 py-1 rounded-md border-2 justify-center items-center text-sm font-medium
    ${primary ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-primary'}
  `;

  return (
    <button type="button" className={classes} onClick={onClick}>
      {label}
    </button>
  );
};

export default HoButton;
