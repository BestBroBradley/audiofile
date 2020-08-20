import axios from 'axios'

const BASE_URL = "http://ec2-18-224-170-0.us-east-2.compute.amazonaws.com:3001/"
const backendAxios = axios.create({
  baseURL: BASE_URL,
  header: {'X-Custom-Header': 'foobar'}
})

export default  {
  getAllUsers: function() {
    console.log('BRUUUUUUU')
    return backendAxios.get(`/users`);
  },

  doesThisWork: function() {
    console.log("pizza");
  }
}