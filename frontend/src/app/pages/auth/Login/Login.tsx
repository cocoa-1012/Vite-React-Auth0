import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../../../components/Button/Button'
import Description from '../../../components/Description'
import InputField from '../../../components/InputField/InputField'
import PageTitle from '../../../components/PageTitle'
import SocialLinks from '../../../components/SocialLoginLinks/SocialLoginLinks'

import useHandleFormApiErrors from '../../../hooks/useHandleFormApiErrors'

import { useAuth } from '../../../contexts/AuthContext/AuthContextProvider'
import useSession from '../../../hooks/useSession'

import { FormValues } from './types'


function LoginPage() {
  const session = useSession()
  const handleFormApiErrors = useHandleFormApiErrors()
  const {
    loginWithEmailPassword,
    loginWithGoogle,
  } = useAuth()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  })

  const handleSubmit = useCallback(async (values: FormValues, { setErrors }: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    setIsSubmitting(true)
    
    try {
      await loginWithEmailPassword(values.email, values.password)
      // TODO: implement API call for POST /userinfo that will do following
      // 1. After successful login, find user from MongoDB user collection using email
      // 2. If user exists with this email, update lastLogin, API will return status code = 200
      // 3. If user doesn't exist already, this is new user API will return status code = 201
      // 4. if status code = 201, setSession({ ...session, isNewUser: true })
      // 5. if status code = 200, do nothing
      // 6. from gameSetup screens, use session.isNewUser to branch off logic
    } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
      handleFormApiErrors({
        error: error.error_description,
        setErrors,
        showFieldErrorsAsToast: true,
      })
    }

    setIsSubmitting(false)
  }, [])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  })

  return (
    <div className='max-w-[500px] mx-auto flex flex-col gap-4 items-center'>
      <PageTitle title='Login' />
      <Description text='Welcome back. Enter your credentials to access your account.' />
      <form onSubmit={formik.handleSubmit} className=' w-full'>
        <div className='relative'>
          <InputField
            label='Your Email'
            placeholder='example@example.com'
            value={formik.values.email}
            name='email'
            onValueChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <div className=' absolute bottom-0 text-error text-base'>
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className='relative'>
          <InputField
            label='Your Password'
            placeholder='Enter your password'
            password
            value={formik.values.password}
            name='password'
            onValueChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <div className=' absolute bottom-0 text-error text-base'>
              {formik.errors.password}
            </div>
          )}
        </div>
        <div className='flex justify-between w-full gap-8'>
          <p
            className=' uppercase text-button font-bold font-poppins text-[15px] text-left cursor-pointer'
            onClick={() => navigate('/forgot-password', { replace: true })}
          >
            forgot password?
          </p>
          <Button type='submit' text='Login' disabled={isSubmitting} />
        </div>
      </form>
      <div className='flex w-full justify-between items-center mt-8'>
        <div className=' flex-1 h-[0.5px] w-full bg-border'></div>
        <div className=' font-poppins text-white3 font-normal text-base mx-4'>
          Or login with
        </div>
        <div className=' flex-1 h-[0.5px] w-full bg-border'></div>
      </div>
      <SocialLinks
        loginWithGoogle={loginWithGoogle}
      />
      <div className='flex items-center gap-2 pt-20'>
        <p className=' font-poppins font-normal text-base text-white3'>
          Are you new here?
        </p>
        <p
          className=' uppercase font-bold font-poppins text-lg text-button cursor-pointer'
          onClick={() => navigate('/signup', { replace: true })}
        >
          Create an account
        </p>
      </div>
    </div>
  )
}

export default LoginPage
