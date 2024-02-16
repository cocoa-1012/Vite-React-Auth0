import { UploadProps } from './types'

function UploadField({ label, placeholder }: UploadProps) {
  return (
    <div className=' w-full pt-0 pb-2'>
      <p className='font-semibold font-poppins text-[16px] text-white3 text-left mb-2'>
        {label}
      </p>
      <div className=' relative flex  max-w-[584px]'>
        <input
          className=' flex-1 bg-input text-white3 p-3 rounded-l-lg border border-border outline-none'
          type='text'
          placeholder={placeholder}
          // value={formik.values.email}
          name='upload'
        />
        <button className=' bg-button uppercase font-semibold font-poppins text-[18px] text-white1 text-center flex items-center px-6 my-0 rounded-r-[100px] cursor-pointer'>
          Upload
        </button>
      </div>
    </div>
  )
}

export default UploadField
