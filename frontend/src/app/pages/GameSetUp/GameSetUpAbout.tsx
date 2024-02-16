import Button from '../../components/Button'
import Description from '../../components/Description'
import InputField from '../../components/InputField/InputField'
import TextAreaField from '../../components/TextAreaField/TextAreaField'
import DateField from '../../components/DateField'
import { GameSetUpProps } from './types'

function GameSetUpAboutPage({ isSignUp, setCurrentStep }: GameSetUpProps) {
  return (
    <div className='w-full mx-auto flex flex-col gap-4 items-center'>
      <Description text='Set the details about your game night' />
      <InputField
        label='Title'
        placeholder='Enter the title of your game night'
      />
      <TextAreaField
        label='Description'
        placeholder='Describe your game night'
      />
      <div className='flex w-full gap-8 justify-between'>
        <DateField label='Date' />
        <InputField label='Time' placeholder='hh:mm' />
      </div>
      <InputField label='Place' placeholder="Your game night's location" />
      <div className='flex w-full justify-end'>
        <Button
          text='Next'
          type='button'
          onClick={() => {
            setCurrentStep(isSignUp ? 'collection' : 'games')
          }}
        />
      </div>
    </div>
  )
}

export default GameSetUpAboutPage
