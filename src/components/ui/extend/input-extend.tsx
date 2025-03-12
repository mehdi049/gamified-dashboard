'use client'

import { useState } from 'react'
import { Input } from '../input'
import Image from 'next/image'
import { Button } from '../button'

interface InputFieldProps {
  //control: Control<any>
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: React.HTMLInputTypeAttribute
  label?: string
  description?: React.ReactNode
  placeholder?: string
  isRequired?: boolean
  disabled?: boolean
  suffix?: React.ReactNode
  className?: string
}

export const InputExtend = ({
  value,
  onChange,
  placeholder,
  name,
  className,
  type,
}: InputFieldProps) => {
  const [isPaswordVisible, setIsPaswordVisible] = useState(false)

  let inputPadding = 'px-4'
  switch (type) {
    case 'search':
      inputPadding = 'pl-12'
      break
    default:
      inputPadding = 'pr-12'
      break
  }
  return (
    <div className={`relative ${className}`}>
      {type === 'search' && (
        <Image
          src="/svg/search.svg"
          width={22}
          height={22}
          alt="search"
          className="absolute top-4 left-4"
        />
      )}
      <Input
        placeholder={placeholder}
        value={value}
        name={name}
        className={inputPadding}
        onChange={onChange}
        type={type === 'password' && isPaswordVisible ? 'text' : type}
      />
      {type === 'password' && (
        <>
          {isPaswordVisible ? (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsPaswordVisible(false)}
              type="button"
              className="absolute top-2 right-0"
            >
              <Image src="/svg/eye-slash.svg" height={18} width={18} alt="" />
            </Button>
          ) : (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsPaswordVisible(true)}
              type="button"
              className="absolute top-2 right-0"
            >
              <Image src="/svg/eye.svg" height={18} width={18} alt="" />
            </Button>
          )}
        </>
      )}
    </div>
  )
}
