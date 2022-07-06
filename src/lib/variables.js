const ENVIRONMENT = import.meta.env;
// console.log(process.env.NODE_ENV)
const ENV = {
	name: ENVIRONMENT.VITE_APP_NAME,
	description: ENVIRONMENT.VITE_APP_DESCRIPTION,
	apiUrl: process.env.NODE_ENV == 'production'? ENVIRONMENT.VITE_APP_URL : '/service',
	url: process.env.NODE_ENV == 'production'? ENVIRONMENT.VITE_APP_URL.replace('/service','') : '',
  recaptchaKey: ENVIRONMENT.VITE_RECAPTCHA_SITE_KEY,
};

export default ENV;
