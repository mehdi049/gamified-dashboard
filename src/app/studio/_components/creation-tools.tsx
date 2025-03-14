import { AreaWhiteBlurBg } from '@/components/ui/area/area-white-blur-bg'
import { Button } from '@/components/ui/button'

import { CardAction } from '@/components/ui/card/card-action'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Li } from '@/components/ui/list/li'
import { Ul } from '@/components/ui/list/ul'
import { Tag } from '@/components/ui/tag'
import H3 from '@/components/ui/typography/h3'
import H5 from '@/components/ui/typography/h5'
import { Tools } from '@/types/tools.types'
import { DialogTitle } from '@radix-ui/react-dialog'
import Image from 'next/image'
import Link from 'next/link'
import { ROUTES } from '../../../../routes'

const tools: Tools[] = [
  {
    image: 'action-img1',
    title: 'Product Page Builder',
    text: 'HTML for your products and meshes',
    tags: ['IMVU', 'Creating', 'Explorer +'],
  },
  {
    image: 'action-img3',
    title: 'Product Page Builder',
    text: 'HTML for your products and meshes',
    tags: ['IMVU', 'Creating', 'Explorer +'],
  },
  {
    image: 'action-img2',
    title: 'Product Page Builder',
    text: 'HTML for your products and meshes',
    tags: ['IMVU', 'Creating', 'Explorer +'],
  },
]
export const CreationTools = () => {
  return (
    <>
      <H3>Your Creation Tools</H3>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 2xl:grid-cols-3">
        {tools.map((tool, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <CardAction
                key={index}
                background={tool.image}
                title={tool.title}
                titleSize="text-2xl"
                text={tool.text}
                cardSize="sm"
                tags={tool.tags}
              />
            </DialogTrigger>
            <DialogContent className="w-full p-8 lg:max-w-[1024px]">
              <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:justify-between">
                <Image
                  src={`/img/${tool.image}.png`}
                  alt={tool.title}
                  width={430}
                  height={610}
                  className="lg:min-h-md max-w-full rounded-2xl object-cover object-center lg:h-full lg:min-w-md"
                />

                <div className="space-y-6">
                  <DialogTitle>
                    <H3>{tool.title}</H3>
                  </DialogTitle>

                  <AreaWhiteBlurBg>
                    <p>
                      Say goodbye to Imgur, HTML, and coding! Use the visual
                      editor to effortlessly design with AI, automatically
                      generating a stunning product page to showcase your maps
                      and boost derivation sales.
                    </p>
                  </AreaWhiteBlurBg>
                  <H5 className="tracking-wider uppercase">
                    Benefits Overview
                  </H5>
                  <Ul>
                    <Li className="text-xs font-semibold">
                      Upload & manage your maps directly on OOR3D.
                    </Li>
                    <Li className="text-xs font-semibold">
                      Update your IMVU product&apos;s HTML on OOR3D, even
                      without IMVU access.
                    </Li>
                    <Li className="text-xs font-semibold">
                      AI-powered backgrounds and decorations
                    </Li>
                    <Li className="text-xs font-semibold">
                      {' '}
                      Increase your derivation sales.
                    </Li>
                  </Ul>

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-foreground/70 text-sm">
                        Category
                      </span>{' '}
                      <Tag text="Creating" />
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-foreground/70 text-sm">
                        Compatibility
                      </span>{' '}
                      <Tag text="IMVU" />
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-foreground/70 text-sm">Access</span>{' '}
                      <Tag text="Explorer" />
                      <Tag text="Designer" />
                      <Tag text="Creator" />
                      <Tag text="Trailblazer" />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Link href={ROUTES.STUDIO.EMPROTIUM}>
                      <Button size="sm">
                        <Image
                          src="/svg/rocket.svg"
                          alt="Rocket"
                          width={20}
                          height={20}
                        />
                        Launch
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  )
}
