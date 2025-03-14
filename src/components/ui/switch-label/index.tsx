type SwitchOption = {
  label: string
  value: string
  checked?: boolean
}

interface SwitchProps {
  options: SwitchOption[]
  value: string
  onChange: (value: string) => void
}
export const SwitchLabel = ({ options, value, onChange }: SwitchProps) => {
  return (
    <div className="flex w-max items-center justify-between gap-2 rounded-full border border-white/50 bg-white/10 p-1">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onChange(option.value)}
          className={`text-primary-foreground hover:bg-primary/20 hover:border-primary cursor-pointer rounded-full px-4 py-2 font-medium duration-200 md:px-8 ${value === option.value ? 'bg-primary/20 border-primary border' : ''}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
