import axios from 'axios';

export default {
    getNotes: function() {
        return axios.get('/api/routes');
    },
    getNote: (id) => {
        return axios.get('/api/routes/' + id);
    }, 
    deleteNote: (id) => {
        return axios.delete('/api/routes/' + id);
    },
    saveNote: (noteData) => {
        return axios.post('/api/routes', noteData);
    },
    //ARTICLES
    getArticles: function() {
        return axios.get('/api/routes');
    },
    getArticle: (id) => {
        return axios.get('/api/routes' + id);
    }, 
    deleteArticle: (id) => {
        return axios.delete('/api/routes' + id);
    },
}