
interface SearchProps {
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
}

export function Search({ placeholder, value="", onChange }: SearchProps) {
  return (
    <div className="flex items-center justify-center h-screen">
      <input value={value} type="text" className="border border-gray-300 rounded p-2" placeholder={placeholder}/>
    </div>
  );
}
