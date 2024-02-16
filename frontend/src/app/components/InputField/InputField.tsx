import { useState } from 'react'

import { InputProps } from './types'

import EyeImg from '../../assets/images/eye.png'
import EyeClosedImg from '../../assets/images/eye-closed.png'

function InputField({
  label,
  password,
  placeholder,
  value,
  onValueChange,
  name,
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <div className=' w-full pt-0 pb-6'>
      <p className='font-semibold font-poppins text-[16px] text-white3 text-left mb-2'>
        {label}
      </p>
      <div className=' relative flex'>
        <input
          className='w-full bg-input text-white3 p-3 rounded-xl border border-border outline-none'
          type={password && !isPasswordVisible ? 'password' : 'text'}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onValueChange}
        />
        {password && (
          <img
            src={isPasswordVisible ? EyeClosedImg : EyeImg}
            alt='ShowPwd'
            className=' absolute right-4 top-4 cursor-pointer'
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        )}
      </div>
    </div>
  )
}

export default InputField
