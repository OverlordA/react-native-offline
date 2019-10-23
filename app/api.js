import axios from 'axios';

const instance = axios.create();

const baseSSO = 'http://my-qa.markett.com';
const baseApi = 'http://qa.markett.com';

instance.defaults.timeout = 2500;

// Override timeout for this request as it's known to take a long time
instance.get('/longRequest');




