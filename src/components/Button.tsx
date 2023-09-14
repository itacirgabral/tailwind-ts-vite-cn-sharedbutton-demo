import type { ComponentPropsWithoutRef as PropsOf } from 'react';
import cn from '$/cn'

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   primary?: boolean;
// }
// type ButtonProps = JSX.IntrinsicElements['button'];

interface ButtonProps extends PropsOf<"button"> {
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
}

export default function Button ({ primary, secondary, outline, className, children, ...props }: ButtonProps ) {
  const classes = cn('px-3 py-2 border rounded-full font-bold', {
    'border-blue-800 bg-blue-400 text-white': primary,
    'border-red-800 bg-red-400 text-white': secondary,
    'bg-slate-200 text-blue-800': outline && primary,
    'bg-slate-200 text-red-800': outline && secondary,
  }, className)

  return <button {...props} className={classes}>
    { children }
  </button>
}