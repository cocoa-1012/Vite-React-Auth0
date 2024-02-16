import Button from '../../components/Button'
import Description from '../../components/Description'
import SubTitle from '../../components/SubTitle'
import UploadField from '../../components/UploadField'
import SearchField from '../../components/SearchField'
import { GameSetUpProps } from './types'
import CustomTable from '../../components/CustomTable'

type DataType = {
  id: number
  game: string
  release: number
  playerCount: string
  playTime: number
  weight: number
  rating: number
}

const gameList: Array<DataType> = [
  {
    id: 0,
    game: 'Terraforming Mars',
    release: 2016,
    playerCount: '1-4',
    playTime: 120,
    weight: 3.26,
    rating: 8.4,
  },
  {
    id: 1,
    game: 'Terraforming Mars',
    release: 2016,
    playerCount: '1-4',
    playTime: 120,
    weight: 3.26,
    rating: 8.4,
  },
  {
    id: 2,
    game: 'Terraforming Mars',
    release: 2016,
    playerCount: '1-4',
    playTime: 120,
    weight: 3.26,
    rating: 8.4,
  },
  {
    id: 3,
    game: 'Terraforming Mars',
    release: 2016,
    playerCount: '1-4',
    playTime: 120,
    weight: 3.26,
    rating: 8.4,
  },
  {
    id: 4,
    game: 'Terraforming Mars',
    release: 2016,
    playerCount: '1-4',
    playTime: 120,
    weight: 3.26,
    rating: 8.4,
  },
  {
    id: 5,
    game: 'Terraforming Mars',
    release: 2016,
    playerCount: '1-4',
    playTime: 120,
    weight: 3.26,
    rating: 8.4,
  },
  {
    id: 6,
    game: 'Terraforming Mars',
    release: 2016,
    playerCount: '1-4',
    playTime: 120,
    weight: 3.26,
    rating: 8.4,
  },
  {
    id: 7,
    game: 'Terraforming Mars',
    release: 2016,
    playerCount: '1-4',
    playTime: 120,
    weight: 3.26,
    rating: 8.4,
  },
  {
    id: 8,
    game: 'Terraforming Mars',
    release: 2016,
    playerCount: '1-4',
    playTime: 120,
    weight: 3.26,
    rating: 8.4,
  },
  {
    id: 9,
    game: 'Terraforming Mars',
    release: 2016,
    playerCount: '1-4',
    playTime: 120,
    weight: 3.26,
    rating: 8.4,
  },
  {
    id: 10,
    game: 'Terraforming Mars',
    release: 2016,
    playerCount: '1-4',
    playTime: 120,
    weight: 3.26,
    rating: 8.4,
  },
  {
    id: 11,
    game: 'Terraforming Mars',
    release: 2016,
    playerCount: '1-4',
    playTime: 120,
    weight: 3.26,
    rating: 8.4,
  },
  {
    id: 12,
    game: 'Terraforming Mars',
    release: 2016,
    playerCount: '1-4',
    playTime: 120,
    weight: 3.26,
    rating: 8.4,
  },
  {
    id: 13,
    game: 'Terraforming Mars',
    release: 2016,
    playerCount: '1-4',
    playTime: 120,
    weight: 3.26,
    rating: 8.4,
  },
]

function GameSetUpCollectionPage({
  currentStep,
  setCurrentStep,
}: GameSetUpProps) {
  return (
    <div className='w-full mx-auto flex flex-col gap-4 items-center'>
      <Description text='Add your collection to the game night' />
      <SubTitle text='Import from other profiles to your collection' />
      <UploadField
        label='Upload from BGA profiles'
        placeholder='Enter a BGA-Username here...'
      />
      <UploadField
        label='Upload from boardgamegeek.com'
        placeholder='Enter your BGG-Username here...'
      />

      <div className=' w-full'>
        <div className=' block sm:flex justify-between gap-2 items-center'>
          <SubTitle text='Add games manually to your collection' />
          <SearchField placeholder='Search...' />
        </div>
        <CustomTable data={gameList} isEdit />
      </div>

      <div className='flex w-full justify-between'>
        <Button
          text='Previous'
          type='button'
          btnFor='prev'
          onClick={() => {
            console.log('Hello', currentStep)
            setCurrentStep('about')
          }}
        />
        <Button
          text='Next'
          type='button'
          onClick={() => {
            console.log('Hello', currentStep)
            setCurrentStep('games')
          }}
        />
      </div>
    </div>
  )
}

export default GameSetUpCollectionPage
