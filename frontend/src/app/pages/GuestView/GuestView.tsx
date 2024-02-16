import PageTitle from '../../components/PageTitle'
import ParticipantsTable from '../../components/ParticipantsTable'
import GamesTable from '../../components/GamesTable'
type ParticiantType = {
  id: number,
  nickName: string,
  userName: string,
  email: string,
  accepted: 'yes' | 'no' | 'pending' | undefined,
  voted: 'yes' | 'no' | 'pending' | undefined,
}

type GameType = {
  id: number,
  avatar: string,
  title: string,
  description: string,
  release: number,
  playercount: string,
  playtime: number,
  weight: number,
  rating: number,
  owner: string,
  voted: number,
  unVoted: number,
}

const participants: Array<ParticiantType> = [
  {
    id: 0,
    nickName: 'Freddy',
    userName: 'LordXxx',
    email: 'friendsemail@gmail.com',
    accepted: 'yes',
    voted: 'yes',
  },
  {
    id: 1,
    nickName: 'Freddy',
    userName: 'LordXxx',
    email: 'friendsemail@gmail.com',
    accepted: 'yes',
    voted: 'no',
  },
  {
    id: 2,
    nickName: 'Freddy',
    userName: 'LordXxx',
    email: 'friendsemail@gmail.com',
    accepted: 'yes',
    voted: 'pending',
  },
  {
    id: 3,
    nickName: 'Freddy',
    userName: 'LordXxx',
    email: 'friendsemail@gmail.com',
    accepted: 'pending',
    voted: 'no',
  },
  {
    id: 4,
    nickName: 'Freddy',
    userName: 'LordXxx',
    email: 'friendsemail@gmail.com',
    accepted: 'pending',
    voted: 'no',
  },
  {
    id: 5,
    nickName: 'Freddy',
    userName: 'LordXxx',
    email: 'friendsemail@gmail.com',
    accepted: 'no',
    voted: 'no',
  },
  {
    id: 6,
    nickName: 'Freddy',
    userName: 'LordXxx',
    email: 'friendsemail@gmail.com',
    accepted: 'no',
    voted: 'no',
  },
  {
    id: 7,
    nickName: 'Freddy',
    userName: 'LordXxx',
    email: 'friendsemail@gmail.com',
    accepted: 'no',
    voted: 'no',
  },
  {
    id: 8,
    nickName: 'Freddy',
    userName: 'LordXxx',
    email: 'friendsemail@gmail.com',
    accepted: 'no',
    voted: 'no',
  },
]

const gamesData: Array<GameType> = [
  {
    id: 0,
    avatar: 'http://via.placeholder.com/88x88',
    title: 'Terraforming Mars',
    description:
      'In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level',
    release: 2016,
    playercount: '1-4',
    playtime: 120,
    weight: 3.26,
    rating: 8.4,
    owner: 'LordXxx',
    voted: 2,
    unVoted: 1,
  },
  {
    id: 1,
    avatar: 'http://via.placeholder.com/88x88',
    title: 'Terraforming Mars',
    description:
      'In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level',
    release: 2016,
    playercount: '1-4',
    playtime: 120,
    weight: 3.26,
    rating: 8.4,
    owner: 'LordXxx',
    voted: 3,
    unVoted: 3,
  },
  {
    id: 2,
    avatar: 'http://via.placeholder.com/88x88',
    title: 'Terraforming Mars',
    description:
      'In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level',
    release: 2016,
    playercount: '1-4',
    playtime: 120,
    weight: 3.26,
    rating: 8.4,
    owner: 'LordXxx',
    voted: 1,
    unVoted: 5,
  },
]

function GuestViewPage() {
  return (
    <div className='max-w-[800px] w-full mx-auto flex flex-col gap-4 items-start'>
      <PageTitle title='Our First Game Night Title' />
      <div className='flex flex-col w-full items-start'>
        <div className='flex items-center gap-3 w-full'>
          <p className=' text-white2 text-[40px] font-bold font-teko text-left'>
            About
          </p>
        </div>
        <p className=' text-white2 font-semibold text-base font-poppins py-2 '>
          Description
        </p>
        <p className=' max-w-[584px] text-white2 font-normal text-base font-poppins '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia
          eleifend orci vel faucibus. Nam sit amet mauris est. Suspendisse
          potenti. Vivamus pretium lacinia mauris in vestibulum. Cras sagittis
          mollis purus quis sollicitudin. Proin dictum tincidunt purus, non
          efficitur eros euismod sit amet.
        </p>
        <div className='flex w-full'>
          <div className=' w-1/2 max-w-[292px]'>
            <p className=' text-white2 font-semibold text-base font-poppins py-2'>
              Date
            </p>
            <p className=' text-white2 font-normal text-base font-poppins '>
              01/01/2023
            </p>
          </div>
          <div>
            <p className=' text-white2 font-semibold text-base font-poppins py-2'>
              Time
            </p>
            <p className=' text-white2 font-normal text-base font-poppins '>
              07:00
            </p>
          </div>
        </div>
        <p className=' text-white2 font-semibold text-base font-poppins py-2'>
          Place
        </p>
        <p className=' text-white2 font-normal text-base font-poppins '>
          123 Street name
        </p>
      </div>

      <div className='w-full'>
        <div className='flex items-center gap-3 w-full'>
          <p className=' text-white2 text-[40px] font-bold font-teko text-left py-2'>
            Participants
          </p>
        </div>
        <ParticipantsTable data={participants} />
      </div>

      <div className='flex flex-col w-full items-start mt-4'>
        <div className='flex items-center justify-between gap-3 w-full'>
          <p className=' text-white2 text-[40px] font-bold font-teko text-left py-2'>
            Games
          </p>
          <button
            className=' uppercase font-poppins text-lg font-bold text-button'
            onClick={() => console.log('Add Game!')}
          >
            Add Game
          </button>
        </div>
        <GamesTable data={gamesData} />
        <div className='flex gap-4 flex-wrap pb-8'></div>
      </div>
    </div>
  )
}

export default GuestViewPage
