import axios from "axios";

if(process.env.NODE_ENV !== 'production')  {
    axios.defaults.baseURL ='http://localhost:5000';
}
else {
    axios.defaults.baseURL = '/';
}
   