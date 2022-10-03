import axios from "axios";

const Apiurl = {
    login: 'signin',
    logout: '',
    otpVerify: 'otpverify',
    signUp: 'signup'
}

function HEADER() {
    let header = {
        "Content-Type": "text/plain",
        // 'token': localStorage.getItem('token') || ''
    };
    return header;
}

// GET API Handler 
function GET(url, data = {}) {
    const header = HEADER();
    return axios(url, {
        method: 'GET',
        url: url,
        headers: header,
    }).then(res => {
        if (res.status === 200 || res.status === 201) {
            console.log('res.data',res.data)
            return res.data;
        }
    }).catch(error => {
        console.log('error :', error)
        // errorHandling(error, GET, url, data);

    })
}

function POST(url, data) {
    console.log('url, data',url, data)
    const header = HEADER();
    return axios(url, {
        method: 'POST',
        url: url,
        data: data,
        headers: header,
    }).then(res => {
        if (res.status === 200 || res.status === 201) {
            console.log('res.data',res.data)
            return res.data;
        }
    }).catch(error => {
        console.log('error :', error)
        return error.response.data
        // errorHandling(error, POST, url, data = {});
    })
}

let url;
const signIn = (data) => {
    url = Apiurl.login
    return POST(url, data)
}

const signUp = (data) => {
    console.log('data',data)
    url = Apiurl.signUp
    return POST(url, data)
}


export {
    signIn,
    signUp
}