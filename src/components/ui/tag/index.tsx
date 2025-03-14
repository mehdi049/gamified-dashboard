interface TagProps {
  text: string
}
export const Tag = ({ text }: TagProps) => {
  return (
    <span className="text-foreground inline-block rounded-md bg-[#D9D9D91A] px-2 py-1.5 text-center text-xs font-medium uppercase opacity-40">
      {text}
    </span>
  )
}
