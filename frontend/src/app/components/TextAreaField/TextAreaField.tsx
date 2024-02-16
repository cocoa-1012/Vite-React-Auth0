import { TextAreaProps } from './types'

function TextAreaField({
  label,
  placeholder,
  value,
  onValueChange,
  name,
}: TextAreaProps) {

  return (
    <div className=' w-full pt-0 pb-6'>
      <p className='font-semibold font-poppins text-[16px] text-white3 text-left mb-2'>
        {label}
      </p>
      <div className='relative flex'>
        <textarea
          className='w-full bg-input text-white3 p-3 rounded-xl border border-border outline-none resize-none'
          rows={5}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onValueChange}
        />
      </div>
    </div>
  )
}

export default TextAreaField
