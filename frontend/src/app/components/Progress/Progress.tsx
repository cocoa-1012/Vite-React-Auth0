import { ProgressProps } from './types'

function Progress({ isSignUp, step }: ProgressProps) {
  const signInSteps = ['about', 'games', 'friends', 'review']
  const signUpSteps = ['about', 'collection', 'games', 'friends', 'review']
  const list = isSignUp ? signUpSteps : signInSteps
  const index = list.findIndex((e) => e === step)
  return (
    <div className='hidden md:flex'>
      {list.map((item, i) => (
        <div
          className={`relative flex flex-col items-center w-32 ${
            i === 0
              ? `before:content-none`
              : i <= index
              ? `before:absolute before:content-[''] before:border-b-4 before:border-dashed before:border-[#a4a6ad] before:w-full before:bottom-3 before:-left-1/2 before:z-20`
              : `before:absolute before:content-[''] before:border-b-4 before:border-dashed before:border-proDotted before:w-full before:bottom-3 before:-left-1/2 before:z-20`
          } 
          ${
            list.length - 1 === i
              ? `after:content-none`
              : `after:absolute after:content-[''] after:border-b-4 after:border-dashed after:w-full after:bottom-3 after:left-1/2 after:z-20`
          } 
          `}
        >
          <p
            className={`font-teko text-2xl font-bold  ${
              item === step ? `text-primary` : `text-white4`
            } capitalize`}
          >
            {item}
          </p>
          <p
            className={`font-teko text-[15px] border-x-2 border-[#181c2c] bg-[#181c2c] ${
              item === step
                ? 'text-primary'
                : i > index
                ? 'text-proDotted'
                : 'text-white4'
            } capitalize z-30 `}
          >
            &#x2B22;
          </p>
        </div>
      ))}
    </div>
  )
}

export default Progress
