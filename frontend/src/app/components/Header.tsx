import LogoImg from '../assets/images/logo.png'

function Header() {
  return (
    <div className='flex justify-between w-full mx-auto py-3 max-w-[1400px] px-0 md:px-8 pt-4'>
      <img src={LogoImg} className=' cursor-pointer' />
      <div className='flex items-center font-poppins text-[15px] gap-8'>
        <p className='text-white font-medium cursor-pointer hover:text-white4'>
          Control Room
        </p>
        <p className=' hidden sm:flex text-white font-medium cursor-pointer hover:text-white4 '>
          Collection
        </p>
        <p className=' hidden sm:flex text-button font-bold cursor-pointer hover:opacity-90 '>
          NEW GAME NIGHT
        </p>
        <img
          src='http://via.placeholder.com/32x32'
          alt='avatar'
          className=' rounded-full cursor-pointer'
        />
      </div>
    </div>
  )
}

export default Header
