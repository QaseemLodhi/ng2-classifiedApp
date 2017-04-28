import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: 'String', required: true },
  description: { type: 'String', required: true },
  body: { type: 'String', required: true },
  user_id:{ type: 'String', required: true },
  date: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Post', postSchema);
