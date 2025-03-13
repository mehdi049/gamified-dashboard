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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Plus } from 'lucide-react'
import { AreaWhiteBlurBg } from '@/components/ui/area/area-white-blur-bg'

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
        <H2>Dialog</H2>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" size="sm">
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <H2>Popover</H2>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon">
              <Plus />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <AreaWhiteBlurBg>
              <p>
                We’re sad to see you go. <br />
                Deleting your account will permanently erase all data, including
                your saved projects, remixes, and profile info. This action
                cannot be undone.
              </p>
            </AreaWhiteBlurBg>
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="leading-none font-medium text-white/70">
                  Dimensions
                </h4>
                <p className="text-sm text-white/70">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width" className="text-white/70">
                    Width
                  </Label>
                  <Input
                    id="width"
                    defaultValue="100%"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxWidth" className="text-white/70">
                    Max. width
                  </Label>
                  <Input
                    id="maxWidth"
                    defaultValue="300px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height" className="text-white/70">
                    Height
                  </Label>
                  <Input
                    id="height"
                    defaultValue="25px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxHeight" className="text-white/70">
                    Max. height
                  </Label>
                  <Input
                    id="maxHeight"
                    defaultValue="none"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

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
