'use client'

import H2 from '@/components/ui/typography/h2'
import { Highlights } from './_components/highlights'
import { QuickActions } from './_components/quick-actions'
import { InputExtend } from '@/components/ui/extend/input-extend'
import { useState } from 'react'

export default function Home() {
  const [search, setSearch] = useState('')
  return (
    <>
      <div className="grow space-y-8 overflow-auto">
        <InputExtend
          name={'search'}
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <H2 className="text-white">Welcome Back, Madelen</H2>

        {/* 
        <HomeBanner />
*/}
        <Highlights />

        <QuickActions />
      </div>
    </>
  )
}
