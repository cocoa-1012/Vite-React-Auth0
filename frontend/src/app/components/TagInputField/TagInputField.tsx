import { useState } from 'react'

import { TagInputProps } from './types'

function TagInputField({ label, placeholder, onValueChange }: TagInputProps) {
  const [inputVal, setInputVal] = useState('')

  const addEvent = () => {
    onValueChange(inputVal)
    setInputVal('')
  }
  const handleKeyDown = (e: any) => {
    if ((e.keyCode === 13 || e.keyCode === 32) && !!inputVal) {
      if (inputVal) addEvent()
    }
  }

  return (
    <div className=' w-full pt-0 pb-6'>
      <p className='font-semibold font-poppins text-[16px] text-white3 text-left mb-2'>
        {label}
      </p>
      <div className=' relative flex'>
        <div className=' relative flex w-full pb-0'>
          <input
            className=' flex-1 bg-input text-white3 p-3 rounded-l-lg border border-border outline-none'
            type='text'
            placeholder={placeholder}
            value={inputVal}
            name='email'
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className=' bg-button uppercase font-semibold font-poppins text-lg text-white1 text-center flex items-center px-6 my-0 rounded-r-[100px] cursor-pointer'
            onClick={() => addEvent()}
            disabled={!inputVal}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default TagInputField
