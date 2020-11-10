import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'

export async function sendCredentials(url, credentials) {

    try {
        const response = await axios.post(url, credentials)
        return response.data
    } 
    
    catch (error) {

        if (error.response) {
            throw error.response.data
        } 
        
        else if (error.request) {
            throw error.request
        } 
        
        else {
            throw error
        }

    }
}


