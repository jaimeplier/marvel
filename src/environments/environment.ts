// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API: {
    ENDPOINT: `https://gateway.marvel.com/v1/public/`,
    KEY: `?ts=jaimefh&apikey=9fc0e14f7953b628deb1d5306f6b719f&hash=18e3ee5c7718f81f2f1d6023b4418ad8&limit=12`
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
