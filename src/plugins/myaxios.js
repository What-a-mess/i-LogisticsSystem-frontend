import axios from 'axios'

const myaxios = axios.create({
    // baseURL: 'http://127.0.0.1:4523/mock/348623',
    baseURL: 'http://localhost:8233',
    timeout: 1000
})

export default myaxios