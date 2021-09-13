import axios from 'axios';
import { Service } from 'axios-middleware';

const base = 'http://localhost:5001/blog-adbdb/us-central1/';

//const base = 'https://pokemon-go1.p.rapidapi.com';
//const headers = {
//    "x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
//    "x-rapidapi-key": "cfa115aad1msh305ef3ffc77f4c4p15fe57jsn6029c6a90445",
//    "useQueryString": true
//};

class Register {
    constructor(){
        if (typeof Register.instance === 'object') return Register.instance;
        Register.instance = this;
    }

    onResponse(response){
        const res = JSON.parse(response.data);
        return res;
    }
}

class Request {
    
    public url;
    public baseURL;
    public request;
    public custom

    constructor(url, baseURL?){
        this.url = url;
        this.baseURL = baseURL || base;
        this.request = axios.create({ baseURL: this.baseURL});
        const service = new Service(this.request);
        service.register(new Register());
        this.custom = axios
    }

    get(){
        return this.request({ url: this.url });
    }

    getOne(id){
        return this.request({ url: this.url +'/'+ id });
    }

    post(value){
        return this.request({ url: this.url, data: value, method: 'post' });
    }

    put(value, id){
        return this.request({ url: this.url +'/'+ id, data: value, method: 'put' });
    }

    delete(id){
        return this.request({ url: this.url +'/'+ id, method: 'delete' });
    }
}

export default Request;