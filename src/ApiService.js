
import axios from 'axios';

const ApiService = axios.create({
    baseURL: 'https://api.nytimes.com/svc/topstories/v2'

});

export default ApiService;


 /*
'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=FXoIO1EDFnwTRgHMORwcYfvKFBWzbtvi'
    }
*/
//url = 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=FXoIO1EDFnwTRgHMORwcYfvKFBWzbtvi';



