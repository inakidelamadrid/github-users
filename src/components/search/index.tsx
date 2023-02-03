import {useState} from 'react';
import {clsx} from 'clsx';
import { ReactComponent as Magnifier } from 'icons/iconmonstr-magnifier.svg';

interface SearchProps {
	className?: string;
	placeholder: string;
	value?: string;
	onChange: (value: string) => void;
}

export function Search({ className="", placeholder, value = "", onChange }: SearchProps) {
  const [isFocused, setIsFocused] = useState(false);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

  const onFocusHandler = () => setIsFocused(true);
  const onBlurHandler = () => setIsFocused(false);

	return (
		<div className={clsx(className, "border-2 border-gray-100 rounded p-2 flex gap-x-2")}>
      <Magnifier className={clsx("w-6 h-6", {'fill-cyan-300': isFocused})} />
			<input
				value={value}
				type="text"
				className="outline-none text-sm w-full grow-1"
				placeholder={placeholder}
				onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
			/>
		</div>
	);
}
