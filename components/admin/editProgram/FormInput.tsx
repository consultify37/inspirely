import React from 'react'

type Props = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
  styleProps?: string
  required?: boolean
}

const FormInput = ({ setValue, value, placeholder, styleProps, required=false }: Props) => {
  return (
    <input 
      className={'text-base p-4 rounded-xl border-2 border-primary outline-none w-full ' + (styleProps ? styleProps : '')}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value) }
      required={required}
    />
  )
}

export default FormInput