import axios from 'axios'

// runnning mock data server : json-server --watch db.json
export function getMessage() {
  return axios.get('http://localhost:3000/message').then(response => {
    return response.data
  })
}
