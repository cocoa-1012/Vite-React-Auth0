export type GameSetUpProps = {
  isSignUp?: Boolean,
  currentStep: string,
  setCurrentStep: (step: any) => void,
}

export type FormValues = {
  title: string,
  description: string,
  date: Date | string | undefined,
  time: string,
  place: string,
}