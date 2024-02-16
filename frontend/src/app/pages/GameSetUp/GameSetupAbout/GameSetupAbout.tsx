import Button from '../../../components/Button'

import { useAuth } from '../../../contexts/AuthContext'

function GameSetupAbout() {
  const { signOut } = useAuth()

  return (
    <Button type='submit' text='Sign Out' onClick={() => signOut()} />
  )
}

export default GameSetupAbout