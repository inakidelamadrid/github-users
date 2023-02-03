import {clsx} from "clsx";

export interface HeadingProps {
  className?: string;
  text: string;
  level: 1 | 2 
}

export function Heading({ className="", text, level }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classes = clsx(className, 'font-bold', {'text-3xl': level === 1, 'text-2xl': level === 2});

  return <Tag className={classes}>{text}</Tag>;
}
