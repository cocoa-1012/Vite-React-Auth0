import { toListString } from '../../utils/array'

import { useAlert } from '../../contexts/AlertContext'

import {
  FormErrors,
  HandleFormApiErrors,
} from './types'

const useHandleFormApiErrors = (): HandleFormApiErrors => {
  const { setAlert } = useAlert()

  return ({
    defaultMessage = 'Something went wrong.',
    error,
    setErrors,
    showFieldErrorsAsToast = false,
  }) => {
    const errors = error.data?.errors
    const message = error.data?.message

    if (setErrors) {
      const formErrors = Object.keys(errors || {}).reduce((acc: FormErrors, key) => {
        const errorMessage = errors?.[key as keyof typeof errors].message

        if (errorMessage) {
          acc[key] = errorMessage
        }

        return acc
      }, {})

      setErrors(formErrors)
    }
    const showToast = showFieldErrorsAsToast === true
          || !Object.keys(errors || {}).length
          || (Array.isArray(showFieldErrorsAsToast) && (showFieldErrorsAsToast || []).find(field => !!errors?.[field]))

    if (showToast) {
      const fieldErrorMessages = (Array.isArray(showFieldErrorsAsToast) && (showFieldErrorsAsToast || []).reduce((acc: string[], key) => {
        if (errors?.[key]?.message) {
          acc.push(errors?.[key]?.message as string)
        }

        return acc
      }, [])) || []

      const description = (fieldErrorMessages.length && toListString(fieldErrorMessages)) || message || defaultMessage
      setAlert({
        description,
        type: 'error',
      })
    }
  }
}

export default useHandleFormApiErrors

export * from './types'
