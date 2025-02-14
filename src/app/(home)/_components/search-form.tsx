import { Input } from '@/components/ui/input'
import Image from 'next/image'

export const SearchForm = () => {
  return (
    <div className="relative">
      <Image
        src="/svg/search.svg"
        width={22}
        height={22}
        alt="search"
        className="absolute top-4 left-4"
      />
      <Input placeholder="Search anything..." />
    </div>
  )
}
