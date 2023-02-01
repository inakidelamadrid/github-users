import {clsx} from "clsx";

export interface HeadingProps {
  text: string;
  level: 1 | 2 
}

export function Heading({ text, level }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classes = clsx('font-bold', {'text-3xl font-bold': level === 1, 'text-2xl': level === 2});

  return <Tag className={classes}>{text}</Tag>;
}
