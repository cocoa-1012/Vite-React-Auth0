import { SearchProps } from './types'
import SearchImg from '../../assets/images/search.png'

function SearchField({ placeholder }: SearchProps) {
  return (
    <div className=' w-full pt-0 pb-6'>
      <div className=' relative'>
        <div className=' relative flex w-full justify-end'>
          <input
            className='w-full sm:max-w-[300px] flex-1 bg-input text-white3 p-3 rounded-xl border border-border outline-none'
            type='text'
            placeholder={placeholder}
            // value={formik.values.email}
            name='email'
          />
          <button className=' absolute right-4 top-4'>
            <img src={SearchImg} alt='search' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchField
