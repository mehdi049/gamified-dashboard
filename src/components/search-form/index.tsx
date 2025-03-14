'use client'

import { InputExtend } from '@/components/ui/extend/input-extend'
import { useState } from 'react'

export const SearchForm = () => {
  const [search, setSearch] = useState('')

  return (
    <InputExtend
      name="search"
      placeholder="Search anything..."
      type="search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}
