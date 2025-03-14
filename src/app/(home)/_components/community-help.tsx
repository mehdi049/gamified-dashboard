import { Button } from '@/components/ui/button'
import { CardBorderYGradient } from '@/components/ui/card/card-border-y-gradient'
import H3 from '@/components/ui/typography/h3'
import Image from 'next/image'

export const CommunityHelp = () => {
  return (
    <>
      <H3 className="text-foreground">Get Started – Quick Actions</H3>
      <CardBorderYGradient>
        <div className="flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src="/svg/discord.svg"
              width={125}
              height={125}
              alt="discrod"
            />
            <div>
              <p className="text-lg font-semibold">
                stay in touch with the team
              </p>
              <p className="text-lg font-semibold">
                stay in touch with the team.
              </p>
              <p className="text-lg font-semibold">
                get the latest updates and news from OOR3D!
              </p>
            </div>
          </div>

          <Button>Join Now</Button>
        </div>
      </CardBorderYGradient>
    </>
  )
}
