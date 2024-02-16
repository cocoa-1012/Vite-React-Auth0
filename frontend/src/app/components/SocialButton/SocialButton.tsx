import { InputProps } from './types'

function SocialButton({ src, onClick }: InputProps) {
  return (
    <div className=' w-full cursor-pointer' onClick={onClick}>
      <img src={src} alt='social icons' />
    </div>
  )
}

export default SocialButton
