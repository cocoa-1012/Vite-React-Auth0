import { DataType } from './types'
import { useState } from 'react'

function GamesTable({ data }: { data: DataType[] }) {
  const [truncateState, setTruncateState] = useState<boolean[]>(
    Array(data.length).fill(0)
  );
  const truncatedStr = (str: string) => {
    return str.length > 188 ? str.substring(0, 188) + '...' : str
  };
  const changeTruncateState = (i: number) => {
    const tempArr = [...truncateState]
    tempArr[i] = !tempArr[i]
    setTruncateState(tempArr)
  }
  const headerStyle =
    'text-white1 font-bold font-poppins text-sm px-3 py-4 text-left'
  return (
    <div className=' bg-table p-4 rounded-xl'>
      <div className='flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 shadow-inner'>
          <div className='inline-block min-w-full max-h-[367px] align-middle sm:px-6 lg:px-8 scrollbar-hide'>
            <div className='relative'>
              <table className='min-w-full table-fixed divide-y divide-input'>
                <thead>
                  <tr>
                    <th scope='col' className={`${headerStyle} min-w-40`}>
                      Game Info
                    </th>

                    <th scope='col' className={`${headerStyle}  text-center`}>
                      Voting
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-input'>
                  {data.map((item: DataType, i: number) => (
                    <tr key={item.id}>
                      <td className='block sm:flex gap-4 font-poppins font-normal text-sm py-5 px-3'>
                        <img
                          src={item.avatar}
                          alt='avatar'
                          className='rounded h-[88px] w-[88px] mb-4'
                        />
                        <div>
                          <p className='w-full text-white2 text-xl font-bold font-teko mb-0 text-left'>
                            {item.title}
                          </p>
                          <p className='text-white3 text-sm font-poppins'>
                            {truncateState[i]
                              ? item.description
                              : truncatedStr(item.description)}
                            {item.description.length > 188 && (
                              <span
                                className='text-button cursor-pointer'
                                onClick={() => changeTruncateState(i)}
                              >
                                &nbsp;
                                {truncateState[i] ? 'Read less' : 'Read more'}
                              </span>
                            )}
                          </p>
                          <div className=' block sm:flex font-poppins text-sm text-white3'>
                            <div className='w-1/3 pt-3'>
                              <div>
                                <p className=' font-bold'>Release</p>
                                <p className=''>{item.release}</p>
                              </div>
                              <div className=' pt-2'>
                                <p className='font-bold'>Weight</p>
                                <p className=''>{item.weight}</p>
                              </div>
                            </div>
                            <div className=' w-1/3 pt-3'>
                              <div>
                                <p className='font-bold'>Playercount</p>
                                <p className=''>{item.playercount}</p>
                              </div>
                              <div className=' pt-2'>
                                <p className='font-bold'>Rating</p>
                                <p className=''>{item.rating}</p>
                              </div>
                            </div>
                            <div className=' pt-3'>
                              <div>
                                <p className='font-bold'>Playtime</p>
                                <p className=''>{item.playtime}</p>
                              </div>
                              <div className=' pt-2'>
                                <p className='font-bold'>Owner</p>
                                <p className=''>{item.owner}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className=' bg-tags w-20 relative py-4 align-top md:align-middle'>
                        <div className='flex flex-col items-center justify-center gap-6 sticky md:static top-4'>
                          <div className=' relative flex items-center justify-center border-2 border-button rounded-full w-10 h-10'>
                            <svg
                              width='20'
                              height='15'
                              viewBox='0 0 20 15'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M6.94203 11.4375L17.5358 0.84375C17.7858 0.59375 18.0827 0.46875 18.4264 0.46875C18.7702 0.46875 19.067 0.59375 19.317 0.84375C19.567 1.09375 19.692 1.39063 19.692 1.73438C19.692 2.07813 19.567 2.375 19.317 2.625L7.81703 14.125C7.56703 14.375 7.27536 14.5 6.94203 14.5C6.6087 14.5 6.31703 14.375 6.06703 14.125L0.692031 8.75C0.442031 8.5 0.32224 8.20312 0.332656 7.85938C0.343073 7.51562 0.473281 7.21875 0.723281 6.96875C0.973281 6.71875 1.27016 6.59375 1.61391 6.59375C1.95766 6.59375 2.25453 6.71875 2.50453 6.96875L6.94203 11.4375Z'
                                fill='white'
                              />
                            </svg>
                            <p className=' absolute text-button font-poppins text-xs font-semibold -bottom-2 -right-1 bg-white w-4 h-4 rounded-full text-center'>
                              {item.voted}
                            </p>
                          </div>
                          <div className=' relative flex items-center justify-center border-2 border-warning rounded-full w-10 h-10'>
                            <svg
                              width='18'
                              height='17'
                              viewBox='0 0 18 17'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M9 10.25L2.875 16.375C2.64583 16.6042 2.35417 16.7188 2 16.7188C1.64583 16.7188 1.35417 16.6042 1.125 16.375C0.895833 16.1458 0.78125 15.8542 0.78125 15.5C0.78125 15.1458 0.895833 14.8542 1.125 14.625L7.25 8.5L1.125 2.375C0.895833 2.14583 0.78125 1.85417 0.78125 1.5C0.78125 1.14583 0.895833 0.854167 1.125 0.625C1.35417 0.395833 1.64583 0.28125 2 0.28125C2.35417 0.28125 2.64583 0.395833 2.875 0.625L9 6.75L15.125 0.625C15.3542 0.395833 15.6458 0.28125 16 0.28125C16.3542 0.28125 16.6458 0.395833 16.875 0.625C17.1042 0.854167 17.2188 1.14583 17.2188 1.5C17.2188 1.85417 17.1042 2.14583 16.875 2.375L10.75 8.5L16.875 14.625C17.1042 14.8542 17.2188 15.1458 17.2188 15.5C17.2188 15.8542 17.1042 16.1458 16.875 16.375C16.6458 16.6042 16.3542 16.7188 16 16.7188C15.6458 16.7188 15.3542 16.6042 15.125 16.375L9 10.25Z'
                                fill='white'
                              />
                            </svg>
                            <p className=' absolute text-warning font-poppins text-xs font-semibold -bottom-2 -right-1 bg-white w-4 h-4 rounded-full text-center'>
                              {item.unVoted}
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamesTable
