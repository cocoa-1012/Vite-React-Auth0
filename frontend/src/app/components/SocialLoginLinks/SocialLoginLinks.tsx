import FacebookImg from '../../assets/images/facebook.png'
import GoogleImg from '../../assets/images/google.png'
import AppleImg from '../../assets/images/apple.png'
import SocialButton from '../SocialButton/SocialButton'

import { Props } from './types'

function SocialLoginLinks({ loginWithGoogle }: Props) {
  return (
    <div className='flex gap-4'>
      <SocialButton src={GoogleImg} onClick={loginWithGoogle} />
      <SocialButton src={AppleImg} link='https://github.com/' />
      <SocialButton src={FacebookImg} link='https://github.com/' />
    </div>
  )
}

export default SocialLoginLinks
