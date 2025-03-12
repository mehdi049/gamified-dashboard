import Image from 'next/image'
interface IconBlurProps {
  icon: string
}
export const IconBlur = ({ icon }: IconBlurProps) => {
  return (
    <div className="relative">
      <span className="absolute top-1 left-1 h-3 w-3 rounded-full bg-white blur"></span>
      <Image src={`/svg/${icon}.svg`} alt="icon" width={21} height={21} />
    </div>
  )
}
