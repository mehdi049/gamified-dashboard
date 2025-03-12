'use client'

import { NotificationItem } from '@/components/notification-item'
import { Button } from '@/components/ui/button'
import { CardAction } from '@/components/ui/card/card-action'
import { CardBorderYGradient } from '@/components/ui/card/card-border-y-gradient'
import { CardGradient } from '@/components/ui/card/card-gradient'
import { InputExtend } from '@/components/ui/extend/input-extend'
import { LeftNavItem } from '@/components/ui/left-nav/left-nav-item'
import { LeftNavWrapper } from '@/components/ui/left-nav/left-nav-wrapper'
import { TopNavItem } from '@/components/ui/top-nav/top-nav-item'
import { TopNavWrapper } from '@/components/ui/top-nav/top-nav-wrapper'
import H1 from '@/components/ui/typography/h1'
import H2 from '@/components/ui/typography/h2'
import { useState } from 'react'
import { HightLightItem } from '../(home)/_components/highlight-item'
import { HomeBanner } from '../(home)/_components/home-banner'
import { CardClothes } from '@/components/ui/card/card-clothes'

export default function Page() {
  const [search, setSearch] = useState('')
  const hightLightItem = {
    title: 'CURRENT PLAN',
    icon: 'trophy-gold',
    text: 'Designer',
    ctaText: 'Upgrade',
  }

  return (
    <>
      <div className="grow space-y-8 overflow-hidden">
        <H2>Typography</H2>
        <H1>H1 (35px)</H1>
        <H2>H2 (25px)</H2>
        <hr />
        <H2>Top Navbar menu</H2>
        <TopNavWrapper>
          <TopNavItem icon="help-round" href="#" isActive={false}>
            Settings
          </TopNavItem>
          <TopNavItem icon="help-round" href="#" isActive={true}>
            Settings
          </TopNavItem>
        </TopNavWrapper>

        <hr />
        <H2>Left Navbar menu</H2>

        <LeftNavWrapper>
          <LeftNavItem icon="help-round" href="#" isActive={false}>
            Settings
          </LeftNavItem>
          <LeftNavItem icon="help-round" href="#" isActive={true}>
            Settings
          </LeftNavItem>
        </LeftNavWrapper>
        <H2>Card</H2>
        <CardGradient>abcd</CardGradient>
        <div className="flex items-center gap-4">
          <CardAction
            background="action-img2"
            title="Edit Your First Mesh"
            text="Beginner friendly"
            isFree
            badge="Step 1"
          />
          <CardAction
            background="action-img2"
            title="Edit Your First Mesh"
            text="Beginner friendly"
          />
        </div>
        <CardAction
          background="action-img2"
          title="Edit Your First Mesh"
          titleSize="text-3xl"
          text="Beginner friendly"
          cardSize="sm"
          tags={['IMVU', 'Creating', 'Explorer +']}
        />
        <CardAction
          background="action-img2"
          title="Edit Your First Mesh"
          titleSize="text-lg"
          description="Teaching you how to use the emporium - Step By Step Tutorial"
          cardSize="sm"
          tags={['IMVU']}
          arrowRight={false}
          isVideo
        />
        <div className="flex items-center gap-4">
          <CardClothes
            imgClothes={'/img/clothes.png'}
            imgAvatar={'/img/avatar.png'}
            pseudo={'@EmWatson'}
            date={'12.10.2024'}
          />
          <CardClothes
            imgClothes={'/img/clothes.png'}
            imgAvatar={'/img/avatar.png'}
            pseudo={'@EmWatson'}
            date={'12.10.2024'}
            isLiked
            hasDownload
          />
        </div>
        <CardBorderYGradient>
          <p className="text-sm opacity-70">
            By accessing the Sites and using our Services, you covenant that you
            have carefully read, clearly understood and agreed to stick to the
            provisions of the Agreements and any update and modification
            thereto. In case the User refuses the Agreements or objects to any
            part of the Agreements, the User is prohibited from using the
            Services.{' '}
          </p>
        </CardBorderYGradient>

        <hr />
        <H2>Input</H2>

        <InputExtend
          placeholder="Search anything..."
          type="search"
          name={'search'}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <InputExtend
          placeholder="password"
          type="password"
          name={'pwd'}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <hr />
        <H2>Button</H2>
        <div className="flex items-center gap-4">
          <Button>Join Now</Button>
          <Button disabled>Join Now</Button>
        </div>

        <hr />
        <hr />
        <hr />
        <hr />
        <H2>Home Card</H2>
        <HightLightItem
          title={hightLightItem.title}
          icon={hightLightItem.icon}
          text={hightLightItem.text}
          ctaText={hightLightItem.ctaText}
        />
        <H2>Banner</H2>
        <HomeBanner />
        <H2>Notification</H2>
        <NotificationItem
          icon={'/img/avatar.png'}
          name={'Madelen Sam'}
          time={'1 min ago'}
          message={
            'By accessing the Sites and using our Services, you covenant that you have carefully read, clearly understood and agreed to stick to the provisions of the Agreements and any update and modification thereto. In case the User refuses the Agreements or objects to any part of the Agreements, the User is prohibited from using the Services.'
          }
        />
      </div>
    </>
  )
}
