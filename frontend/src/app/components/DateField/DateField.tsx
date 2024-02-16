import { DateProps } from './types'

function DateField({
  label,
  placeholder,
  value,
  onValueChange,
  name,
}: DateProps) {

  return (
    <div className=' w-full pt-0 pb-6'>
      <p className='font-semibold font-poppins text-[16px] text-white3 text-left mb-2'>
        {label}
      </p>
      <div className=' relative flex'>
        <input
          className='w-full bg-input text-white3 p-3 rounded-xl border border-border outline-none'
          type='date'
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onValueChange}
        />
      </div>
    </div>
  )
}

export default DateField
