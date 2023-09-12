import type { ComponentPropsWithoutRef as PropsOf } from 'react';
import cn from '$/cn'

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   primary?: boolean;
// }
// type ButtonProps = JSX.IntrinsicElements['button'];

interface ButtonProps extends PropsOf<"button"> {
  primary?: boolean;
}

export default function Button ({ primary, className, children, ...props }: ButtonProps ) {
  const defaulClass = 'px-3 py-2 border border-blue-600 bg-blue-500 text-white'
  return <button {...props} className={cn(defaulClass)}>
    { children }
  </button>
}