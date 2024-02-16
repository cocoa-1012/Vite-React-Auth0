import { useState } from 'react'
import PageTitle from '../../components/PageTitle'
import Progress from '../../components/Progress'
import GameSetUpAboutPage from './GameSetUpAbout'
import GameSetUpCollectionPage from './GameSetUpCollection'
import GameSetUpGamesPage from './GameSetUpGames'
import GameSetUpFriendsPage from './GameSetUpFriends'
import GameSetUpReviewPage from './GameSetUpReview'

import Button from '../../components/Button'

import { useAuth } from '../../contexts/AuthContext'

function GameSetUpPage() {
  const { signOut } = useAuth()

  const [currentStep, setCurrentStep] = useState('about')
  const isSignUp = true
  return (
    <div className='max-w-[800px] w-full mx-auto flex flex-col gap-4 items-center px2'>
      <Button type='submit' text='Test: Sign Out' onClick={() => signOut()} />
      <PageTitle title='Set up your first game night' />
      <Progress isSignUp={isSignUp} step={currentStep} />
      {currentStep === 'about' && (
        <GameSetUpAboutPage
          isSignUp={isSignUp}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 'collection' && (
        <GameSetUpCollectionPage
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 'games' && (
        <GameSetUpGamesPage
          isSignUp={isSignUp}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 'friends' && (
        <GameSetUpFriendsPage
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 'review' && (
        <GameSetUpReviewPage
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
    </div>
  )
}

export default GameSetUpPage
