import { useNavigate } from 'react-router-dom'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import Description from '../../../components/Description'
import PageTitle from '../../../components/PageTitle'

import { useAuth } from '../../../contexts/AuthContext/AuthContextProvider'
import { useAlert } from '../../../contexts/AlertContext'

import { FormValues } from './types'

function ForgotPasswordPage() {
  const { setAlert } = useAlert()
  const { resetPassword } = useAuth()

  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  })

  const handleSubmit = async (values: FormValues) => {
    try {
      await resetPassword(values.email)
      setAlert({
        description: `We've just sent you an email to reset your password.`,
        type: 'success',
      })
    } catch (err: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
      setAlert({
        description: err.message,
        type: 'success',
      })
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  })

  return (
    <div className='flex max-w-[500px] mx-auto flex-1 items-center'>
      <div className='flex flex-col gap-4 items-center'>
        <PageTitle title='Forgot Password' />
        <Description text='Please enter your email address so we can send you an email for password reset' />
        <div className=' w-full'>
          <form onSubmit={formik.handleSubmit}>
            <div className=' relative'>
              <p className='font-semibold font-poppins text-[16px] text-white3 text-left mb-2'>
                Your Email
              </p>
              <div className=' relative flex w-full pb-6'>
                <input
                  className=' flex-1 bg-input text-white3 p-3 rounded-l-lg border border-border outline-none'
                  type='text'
                  placeholder='example@example.com'
                  value={formik.values.email}
                  name='email'
                  onChange={formik.handleChange}
                />
                <button className=' bg-button uppercase font-semibold font-poppins text-[18px] text-white1 text-center flex items-center px-4 my-0 rounded-r-[100px] cursor-pointer'>
                  Recover Password
                </button>
              </div>
              {formik.touched.email && formik.errors.email && (
                <div className=' absolute bottom-0 text-error text-base'>
                  {formik.errors.email}
                </div>
              )}
            </div>
          </form>
        </div>

        <div className='flex items-center gap-2 mt-60'>
          <p
            className=' uppercase font-bold font-poppins text-lg text-button cursor-pointer'
            onClick={() => navigate('/', { replace: true })}
          >
            Back to Login
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
