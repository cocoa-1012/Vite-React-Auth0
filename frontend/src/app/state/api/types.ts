export type Auth0Session = {
  accessToken: string | undefined,
  appState: string | undefined,
  expiresIn: string | undefined,
  idToken: string | undefined,
  idTokenPayload: string | undefined,
  refreshToken: string | undefined,
  scope: string | undefined,
  state: string | undefined,
  tokenType: string | undefined,
}