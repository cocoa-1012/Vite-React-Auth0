import PageTitle from '../../components/PageTitle'
import GameNightsTable from '../../components/GameNightsTable'
type GameNightType = {
  id: number,
  gameNight: string,
  date: string,
  time: string,
  location: string,
  participants: number,
  voting: 'yes' | 'no' | 'pending' | undefined,
  games: string[],
}

const gameNightsData: Array<GameNightType> = [
  {
    id: 0,
    gameNight: 'First Game Night Title',
    date: '20.07.2023',
    time: '19:00',
    location: 'Daniels Hud',
    participants: 5,
    voting: 'yes',
    games: ['Terraforming Mars1', 'Terraforming Mars2', 'Terraforming Mars3', 'Terraforming Mars4',]
  },
  {
    id: 1,
    gameNight: 'First Game Night Title',
    date: '20.07.2023',
    time: '19:00',
    location: 'Daniels Hud',
    participants: 3,
    voting: 'no',
    games: ['Terraforming Mars5', 'Terraforming Mars6', 'Terraforming Mars7', 'Terraforming Mars8',]
  },
  {
    id: 2,
    gameNight: 'First Game Night Title',
    date: '20.07.2023',
    time: '19:00',
    location: 'Daniels Hud',
    participants: 1,
    voting: 'no',
    games: ['Terraforming Mars8', 'Terraforming Mars9', 'Terraforming Mars11', 'Terraforming Mars23',]
  },
  {
    id: 3,
    gameNight: 'First Game Night Title',
    date: '20.07.2023',
    time: '19:00',
    location: 'Daniels Hud',
    participants: 7,
    voting: 'yes',
    games: ['Terraforming Mars', 'Terraforming Mars', 'Terraforming Mars', 'Terraforming Mars',]
  },
  {
    id: 4,
    gameNight: 'First Game Night Title',
    date: '20.07.2023',
    time: '19:00',
    location: 'Daniels Hud',
    participants: 4,
    voting: 'pending',
    games: ['Terraforming Mars', 'Terraforming Mars', 'Terraforming Mars', 'Terraforming Mars',]
  },
  {
    id: 5,
    gameNight: 'First Game Night Title',
    date: '20.07.2023',
    time: '19:00',
    location: 'Daniels Hud',
    participants: 3,
    voting: 'yes',
    games: ['Terraforming Mars', 'Terraforming Mars', 'Terraforming Mars', 'Terraforming Mars',]
  },
]

function ControlRoomPage() {
  return (
    <div className='max-w-[800px] w-full mx-auto flex flex-col gap-4 items-center'>
      <PageTitle title='Control Room' />
      <div className='flex flex-col sm:flex-row w-full items-start justify-center col-span-3 gap-8'>
        <div className=' flex flex-col bg-table w-full min-h-24 p-4 rounded-xl'>
          <p className=' text-white2 text-[40px] font-bold font-teko text-left'>
            3
          </p>
          <p className=' text-white3 font-normal text-base font-poppins'>Upcoming Game Nights</p>
        </div>
        <div className=' flex flex-col bg-table w-full min-h-24 p-4 rounded-xl'>
          <p className=' text-white2 text-[40px] font-bold font-teko text-left'>
            0
          </p>
          <p className=' text-white3 font-normal text-base font-poppins'>Game Nights hosted</p>
        </div>
        <div className=' flex flex-col bg-table w-full min-h-24 p-4 rounded-xl'>
          <p className=' text-white2 text-[40px] font-bold font-teko text-left'>
            0
          </p>
          <p className=' text-white3 font-normal text-base font-poppins'>Game Nights participated</p>
        </div>
      </div>

      <div className=' w-full py-6'>
        <div className='flex items-center gap-3 w-full'>
          <p className=' text-white2 text-[40px] font-bold font-teko text-left'>
            Your Game Nights
          </p>
        </div>
        <GameNightsTable data={gameNightsData} />
      </div>

      <div className=' w-full py-6'>
        <div className='flex items-center gap-3 w-full'>
          <p className=' text-white2 text-[40px] font-bold font-teko text-left leading-none'>
            Archived Game Nights
          </p>
        </div>
        <GameNightsTable data={gameNightsData} />
      </div>
    </div>
  )
}

export default ControlRoomPage;
