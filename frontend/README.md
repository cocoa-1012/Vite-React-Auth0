**Pre-Requisites**

- Node Version 20.10.0
- Yarn Version 1.22.21
- React Version 18.2.0

---

## Run locally

1. Copy the .env.example file and rename to .env.local
2. Fill out the variables as provided
3. Run `yarn` to install dependencies
4. `yarn start` or `yarn start --host`

Note - this project uses *vite*

To run manually use `vite`

## Auth0 Configuration

1. Create Auth0 account
2. On Auth0.com portal, Create a tenant
3. Create a SPA application.
4. Get the Domain, Client ID from this application and set to .env file.
5. Go to "Authentication/Database" and create a new DB Connection, get the name and set to .env file
6. Configure "Allowed Web Origins", "Allowed Logout URLs", "Allowed Callback URLs", "Allowed Origins (CORS)" on Auth0 Application Setting tab to your web application domain(For development case, it will be http://localhost:5173, for auth callback it should be http://localhost:5173/auth-callback.). 
Also configure "Allowed Logout URLs" as "http://localhost:5173/signin".
If you skip this step, authentication will fail with 403 error.

----------------Need to Review again---------------
7. Go to "Connections" tab of OAuth application, make sure Social/google-oauth2 is turned on.
8. Create a Google developer account and on create a new project on developer console.(URL: https://console.cloud.google.com)
9. On this new project, go to "API Services/Credentials" sidebar.
10. Click on "+CREATE CREDENTIALS" on top bar, and click on "OAuth client ID" from drop down.
11. Enter information for "OAuth consent screen".
 Important: Under "Authorized domains" section, add "auth0.com"
 Once completed consent screen, Go back to Sidebar "API Services/Credentials" to go back to project dashboard.
12. Click on "+CREATE CREDENTIALS"/"OAuth client ID" again. And enter valid information.
If you are on development stage, Please add "Test users" so you can test OAuth properly.
Add Oauth domain(for example: https://dev-zqiy2ahxcrse3uqd.us.auth0.com) to "Authorized JavaScript origins" and (Domain + /login/callback) to "Authorized redirect URIs" domains(example: https://dev-zqiy2ahxcrse3uqd.us.auth0.com/login/callback).
Copy Click ID, Client secret.
13. Go to Auth0 portal, Authentication/Social/Google and enter client ID and secret we copied from above step.
Double check your application is enalbed in Authentication/Social.
Important: If you don't config proper "Allowed Callback URLs", you will encounter OAuth error and Google OAuth won't work.(For example: You can enter http://localhost:5173)
--------------------------------------------
---

## Production Deployment

1. Ensure the .env.production file is setup with the appropriate variables 
2. Run `yarn build`
3. This will create a build in the */dist* folder
4. Deploy to firebase using `firebase deploy`

---

## Notes
