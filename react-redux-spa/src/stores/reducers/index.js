import * as app from './app';
import * as login from './login'; 
import * as home from './home'; 

export default {
	...app,
	...login,
	...home
}