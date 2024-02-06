**Pre-Requisites**

- Node Version 20.10.0
- Yarn Version 1.22.21
- React Version 18.2.0

---

## Run locally

1. Copy the .env.example file and rename to .env.local
2. Fill out the variables as provided
3. Run `yarn install` to install dependencies
4. `yarn start`

Note - this project uses *vite*

To run manually use `vite`

---

## Production Deployment

1. Ensure the .env.production file is setup with the appropriate variables 
2. Run `yarn build`
3. This will create a build in the */dist* folder
4. Deploy to firebase using `firebase deploy`

---

## Notes
