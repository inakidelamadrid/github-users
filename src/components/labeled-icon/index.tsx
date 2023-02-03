import {clsx} from "clsx";

interface LabeledIconProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export const LabeledIcon= ({ className="", icon, label }: LabeledIconProps) => {
  return (
    <div
      className={clsx(className, "flex items-center gap-x-2 text-sm")}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};