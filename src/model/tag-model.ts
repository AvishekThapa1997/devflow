import { Schema, model, models, Model } from 'mongoose';
import { IQuestion } from './question-model';
import { IUser } from './user-model';

export interface ITag {
  _id?: Schema.Types.ObjectId;
  name: string;
  description: string;
  questions: IQuestion[];
  followers: IUser[];
  createdAt: Date;
}

const TagSchema = new Schema<ITag>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
console.log('QUESTION');
const Tag = (models.Tag as Model<ITag>) ?? model<ITag>('Tag', TagSchema);

export default Tag;
