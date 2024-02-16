export type HandleFormApiErrors = <T = string[]>(props: {
  defaultMessage?: string,
  error: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  forcedMessage?: string,
  setErrors: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  showFieldErrorsAsToast?: boolean | (keyof T)[],
}) => void

export type FormErrors = Record<string, string>
