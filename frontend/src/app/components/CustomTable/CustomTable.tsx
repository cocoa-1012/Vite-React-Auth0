import { useLayoutEffect, useRef, useState } from 'react'
import AvatarImg from '../../assets/images/avatar.png'
import { DataType } from './types'

function CustomTable({
  data,
  isEdit,
  selectedPeople = [],
  setSelectedPeople,
}: {
  data: DataType[],
  isEdit: boolean,
  selectedPeople?: number[],
  setSelectedPeople: any,
}) {
  const checkbox = useRef<HTMLInputElement | null>(null)
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < data.length
    setChecked(selectedPeople.length === data.length)
    setIndeterminate(isIndeterminate)
    if (checkbox.current) checkbox.current.indeterminate = isIndeterminate
  }, [selectedPeople])

  const headerStyle =
    'text-white1 font-bold font-poppins text-sm pl-0 px-4 py-6 text-left min-w-24'
  const rowStyle =
    'text-white3 whitespace-nowrap font-poppins font-normal text-sm py-4 pr-3'

  return (
    <div className='bg-table p-4 rounded-xl scrollbar-custom'>
      <div className='flow-root'>
        <div className='-mx-2 -my-2 overflow-x-auto sm:-mx-2 lg:-mx-2'>
          <div className='inline-block min-w-full max-h-[500px] align-middle sm:px-6 lg:px-4'>
            <div className='relative'>
              <table className='min-w-full table-fixed divide-y divide-input'>
                <thead className='sticky top-0 bg-table z-30'>
                  <tr>
                    {isEdit && (
                      <th
                        scope='col'
                        className='relative px-7 py-6 sm:w-10 sm:px-6'
                      ></th>
                    )}
                    <th scope='col' className={`${headerStyle}  min-w-48`}>
                      Game
                    </th>
                    <th scope='col' className={headerStyle}>
                      Release
                    </th>
                    <th scope='col' className={headerStyle}>
                      Playercount
                    </th>
                    <th scope='col' className={headerStyle}>
                      Playtime
                    </th>
                    <th scope='col' className={headerStyle}>
                      Weight
                    </th>
                    <th scope='col' className={headerStyle}>
                      Rating
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-input'>
                  {data.map((item: DataType) => (
                    <tr
                      key={item.id}
                      className={
                        selectedPeople.includes(item.id)
                          ? 'bg-gray-700'
                          : undefined
                      }
                    >
                      {isEdit && (
                        <td className='relative px-7 sm:w-12 sm:px-6'>
                          {selectedPeople.includes(item.id) && (
                            <div className='absolute inset-y-0 left-0 w-0.5 bg-button' />
                          )}
                          <input
                            type='checkbox'
                            id={'checkBox' + item.id}
                            className='absolute appearance-none left-4 top-1/2 -mt-2 h-4 w-4 rounded bg-none border-2 border-white3 checked:border-none'
                            value={item.id}
                            checked={selectedPeople.includes(item.id)}
                            onChange={(e) =>
                              setSelectedPeople([...selectedPeople, item.id])
                            }
                          />
                          {selectedPeople.includes(item.id) && (
                            <svg
                              className='absolute left-4 top-1/2 -mt-2 w-4 h-4 text-button peer-checked:block'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='4'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              onClick={(e) =>
                                setSelectedPeople(
                                  selectedPeople.filter(
                                    (p: number) => p !== item.id
                                  )
                                )
                              }
                            >
                              <polyline points='20 6 9 17 4 12'></polyline>
                            </svg>
                          )}
                        </td>
                      )}
                      <td className={`${rowStyle} flex gap-2 items-center`}>
                        <span className='w-6 h-6'>
                          <img src={AvatarImg} alt='avatar' />
                        </span>
                        {item.game}
                      </td>
                      <td className={rowStyle}>{item.release}</td>
                      <td className={rowStyle}>{item.playerCount}</td>
                      <td className={rowStyle}>{item.playTime}</td>
                      <td className={rowStyle}>{item.weight}</td>
                      <td className={rowStyle}>{item.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomTable;
