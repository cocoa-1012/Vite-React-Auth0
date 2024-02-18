import Button from '../../components/Button'
import Description from '../../components/Description'
import InputField from '../../components/InputField/InputField'
import TextAreaField from '../../components/TextAreaField/TextAreaField'
import DateField from '../../components/DateField'
import { FormValues, GameSetUpProps } from './types'
import useCurrentValue from '../../hooks/useCurrentValue'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useEffect } from 'react'

function GameSetUpAboutPage({ isSignUp, setCurrentStep }: GameSetUpProps) {
  const { currentValue, setCurrentValue, updateToStore } = useCurrentValue()

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string()
      .min(20, 'Description must be at least 50 characters.')
      .required('Description is required.'),
    date: Yup.date().required('Date is required.'),
    time: Yup.string().required('Time is required.'),
    place: Yup.string().required('Place is required.'),
  });

  const handleSubmit =  async (values: FormValues) => {
    console.log('haha...', values, values.title)
    setCurrentValue({
      title: values.title,
      // description: values.description,
      // date: values.date,
      // time: values.time,
      // place: values.place,
    })
    updateToStore()
    setTimeout(() => {
      setCurrentStep(isSignUp ? 'collection' : 'games')
    }, 3000);
  };

  // useEffect(() => {
  //   console.log("Current Value changed:: ", currentValue)
  // }, [currentValue])

  const formik = useFormik({
    initialValues: {
      title: currentValue?.title || '',
      description: currentValue?.description || '',
      date: currentValue?.date || '',
      time: currentValue?.time || '',
      place: currentValue?.place || '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  })

  return (
    <div className='w-full mx-auto flex flex-col gap-4 items-center'>
      <Description text='Set the details about your game night' />
      <form onSubmit={formik.handleSubmit} className='w-full max-w-[584px]'>
        <div className='relative'>
          <InputField
            label='Title'
            name='title'
            placeholder='Enter the title of your game night'
            value={formik.values.title}
            onValueChange={formik.handleChange}
          />
          {formik.touched.title && formik.errors.title && (
            <div className='absolute bottom-0 text-error text-base'>
              {formik.errors.title}
            </div>
          )}
        </div>
        <div className='relative'>
          <TextAreaField
            label='Description'
            name='description'
            placeholder='Describe your game night'
            value={formik.values.description}
            onValueChange={formik.handleChange}
          />
          {formik.touched.description && formik.errors.description && (
            <div className='absolute bottom-0 text-error text-base'>
              {formik.errors.description}
            </div>
          )}
        </div>
        <div className='flex w-full gap-8 justify-between'>
          <div className='relative'>
            <DateField
              label='Date'
              name='date'
              value={formik.values.date}
              onValueChange={formik.handleChange}
            />
            {formik.touched.date && formik.errors.date && (
              <div className='absolute bottom-0 text-error text-base'>
                {formik.errors.date}
              </div>
            )}
          </div>
          <div className='relative'>
            <InputField
              label='Time'
              name='time'
              placeholder='hh:mm'
              value={formik.values.time}
              onValueChange={formik.handleChange}
            />
            {formik.touched.time && formik.errors.time && (
              <div className='absolute bottom-0 text-error text-base'>
                {formik.errors.time}
              </div>
            )}
          </div>
        </div>
        <div className='relative'>
          <InputField
            label='Place'
            name='place'
            placeholder='Your game night`s location'
            value={formik.values.place}
            onValueChange={formik.handleChange}
          />
          {formik.touched.place && formik.errors.place && (
            <div className='absolute bottom-0 text-error text-base'>
              {formik.errors.place}
            </div>
          )}
        </div>
        <div className='flex w-full justify-end'>
          <Button
            text='Next'
            type='submit'
          />
        </div>
      </form>
    </div>
  );
}

export default GameSetUpAboutPage;
