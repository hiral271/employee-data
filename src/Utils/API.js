import axios from "axios";
const BASEURL = "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?";


export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
