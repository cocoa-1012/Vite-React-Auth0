import EditImg from '../../assets/images/edit.png';
import Button from '../../components/Button';
import CustomTable from '../../components/CustomTable';
import Description from '../../components/Description';
import useCurrentValue from '../../hooks/useCurrentValue';
import { GameSetUpProps } from './types';

function GameSetUpReviewPage({ setCurrentStep }: GameSetUpProps) {
  const { currentValue } = useCurrentValue();

  return (
    <div className='w-full mx-auto flex flex-col gap-4 items-center'>
      <Description text='Review your game night`s information' />
      <div className='flex flex-col w-full items-start'>
        <div className='flex items-center gap-3 w-full'>
          <p className=' text-white2 text-[40px] font-bold font-teko text-left'>
            About
          </p>
          <img
            src={EditImg}
            alt='edit'
            onClick={() => {
              setCurrentStep('about');
            }}
            className=' cursor-pointer'
          />
        </div>
        <p className=' text-white2 font-semibold text-base font-poppins py-2'>
          Title
        </p>
        <p className=' text-white2 font-normal text-base font-poppins '>
          {currentValue?.title || ''}
        </p>
        <p className=' text-white2 font-semibold text-base font-poppins py-2 '>
          Description
        </p>
        <p className=' max-w-[584px] text-white2 font-normal text-base font-poppins '>
          {currentValue?.description || ''}
        </p>
        <div className='flex w-full'>
          <div className=' w-1/2 max-w-[292px]'>
            <p className=' text-white2 font-semibold text-base font-poppins py-2'>
              Date
            </p>
            <p className=' text-white2 font-normal text-base font-poppins '>
              {currentValue?.date || ''}
            </p>
          </div>
          <div>
            <p className=' text-white2 font-semibold text-base font-poppins py-2'>
              Time
            </p>
            <p className=' text-white2 font-normal text-base font-poppins '>
              {currentValue?.time || ''}
            </p>
          </div>
        </div>
        <p className=' text-white2 font-semibold text-base font-poppins py-2'>
          Place
        </p>
        <p className=' text-white2 font-normal text-base font-poppins '>
          {currentValue?.place || ''}
        </p>
      </div>

      <div className='w-full'>
        <div className='flex items-center gap-3 w-full'>
          <p className=' text-white2 text-[40px] font-bold font-teko text-left'>
            Games
          </p>
          <img
            src={EditImg}
            alt='edit'
            onClick={() => {
              setCurrentStep('games');
            }}
            className=' cursor-pointer'
          />
        </div>
        <CustomTable
          data={currentValue?.nightGames || []}
          isEdit={false}
          selectedPeople={[]}
          setSelectedPeople={() => {}}
        />
      </div>

      <div className='flex flex-col w-full items-start'>
        <div className='flex items-center gap-3 w-full'>
          <p className=' text-white2 text-[40px] font-bold font-teko text-left'>
            Friends
          </p>
          <img
            src={EditImg}
            alt='edit'
            onClick={() => {
              setCurrentStep('friends');
            }}
            className=' cursor-pointer'
          />
        </div>
        <div className='flex gap-4 flex-wrap pb-8'>
          {currentValue.friends.map((email) => (
            <div className='flex max-w-full bg-tags px-4 py-3 rounded-lg items-center gap-4'>
              <p className=' inline-block text-white3 font-poppins font-normal text-base text-center truncate '>
                {email}
              </p>
              <button className=' text-white3 text-4xl hover:opacity-70'>
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.9998 8.40005L2.0998 13.3C1.91647 13.4834 1.68314 13.575 1.3998 13.575C1.11647 13.575 0.883138 13.4834 0.699805 13.3C0.516471 13.1167 0.424805 12.8834 0.424805 12.6C0.424805 12.3167 0.516471 12.0834 0.699805 11.9L5.5998 7.00005L0.699805 2.10005C0.516471 1.91672 0.424805 1.68338 0.424805 1.40005C0.424805 1.11672 0.516471 0.883382 0.699805 0.700049C0.883138 0.516715 1.11647 0.425049 1.3998 0.425049C1.68314 0.425049 1.91647 0.516715 2.0998 0.700049L6.9998 5.60005L11.8998 0.700049C12.0831 0.516715 12.3165 0.425049 12.5998 0.425049C12.8831 0.425049 13.1165 0.516715 13.2998 0.700049C13.4831 0.883382 13.5748 1.11672 13.5748 1.40005C13.5748 1.68338 13.4831 1.91672 13.2998 2.10005L8.3998 7.00005L13.2998 11.9C13.4831 12.0834 13.5748 12.3167 13.5748 12.6C13.5748 12.8834 13.4831 13.1167 13.2998 13.3C13.1165 13.4834 12.8831 13.575 12.5998 13.575C12.3165 13.575 12.0831 13.4834 11.8998 13.3L6.9998 8.40005Z'
                    fill='#DDDDDD'
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className='flex w-full justify-between'>
        <Button
          text='Previous'
          type='button'
          btnFor='prev'
          onClick={() => {
            setCurrentStep('friends');
          }}
        />
        <Button
          text='Create Game Night'
          type='button'
          onClick={() => {
            alert('You are creating Game Night now!');
          }}
        />
      </div>
    </div>
  );
}

export default GameSetUpReviewPage;
