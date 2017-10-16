import axios from "axios";

export default {
    getArticles: (url) => {
        return axios.get(url);
    }
}