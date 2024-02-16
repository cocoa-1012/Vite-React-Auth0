import Button from '../../components/Button'
import Description from '../../components/Description'
import SubTitle from '../../components/SubTitle'
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

function GameSetUpGamesPage({ isSignUp, setCurrentStep }: GameSetUpProps) {
  return (
    <div className='w-full mx-auto flex flex-col gap-4 items-center'>
      <Description text='Select the games you will play' />

      <div className=' w-full'>
        <div className=' block sm:flex justify-between gap-2 items-center'>
          <SubTitle text='Add games to the game night' />
          <SearchField placeholder='Search...' />
        </div>
        <CustomTable data={gameList} isEdit={true} />
      </div>

      <div className='flex w-full justify-between'>
        <Button
          text='Previous'
          type='button'
          btnFor='prev'
          onClick={() => {
            setCurrentStep(isSignUp ? 'collection' : 'about')
          }}
        />
        <Button
          text='Next'
          type='button'
          onClick={() => {
            setCurrentStep('friends')
          }}
        />
      </div>
    </div>
  )
}

export default GameSetUpGamesPage
