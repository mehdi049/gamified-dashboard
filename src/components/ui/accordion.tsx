'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Minus, Plus } from 'lucide-react'

import { cn } from '@/lib/utils'
import { CardBorderYGradient } from './card/card-border-y-gradient'

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <CardBorderYGradient>
      <AccordionPrimitive.Root data-slot="accordion" {...props} />
    </CardBorderYGradient>
  )
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-b last:border-b-0', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'flex w-full flex-1 items-start justify-between gap-4 rounded-xl text-left text-xl font-semibold text-white/70 transition-all outline-none disabled:pointer-events-none disabled:opacity-50 md:text-2xl [&[data-state=closed]>.accordion-minus]:hidden [&[data-state=open]]:rounded-b-none [&[data-state=open]>.accordion-plus]:hidden',
          className
        )}
        {...props}
      >
        {children}
        <Plus className="accordion-plus pointer-events-none size-4 shrink-0 translate-y-0.5 text-white/70 transition-transform duration-200" />
        <Minus className="accordion-minus pointer-events-none size-4 shrink-0 translate-y-0.5 text-white/70 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <div className="relative">
      <AccordionPrimitive.Content
        data-slot="accordion-content"
        className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden rounded-b-xl pt-2 text-sm text-white/70 md:text-base"
        {...props}
      >
        <div className={cn('', className)}>{children}</div>
      </AccordionPrimitive.Content>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
