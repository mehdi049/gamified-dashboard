import Image from 'next/image'
interface IconBlurProps {
  icon: string
  size?: number
}
export const IconBlur = ({ icon, size = 16 }: IconBlurProps) => {
  return (
    <div className="relative">
      <span className="absolute top-1 left-1 h-2 w-2 rounded-full bg-white blur"></span>
      <Image src={`/svg/${icon}.svg`} alt="icon" width={size} height={size} />
    </div>
  )
}
