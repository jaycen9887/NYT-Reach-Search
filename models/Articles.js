const mongoose = requires('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    author: {
        type: String
    },
    date: {
        type: Date
    },
    link: {
        type: String
    },
    section: {
        type:String
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }]
});

let Article = mongoose.model("Article", ArticleSchema);

export default Article;