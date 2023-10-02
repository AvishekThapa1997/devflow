import { Schema, model, models, Model, Document } from 'mongoose';
import { ITag } from './tag-model';
import { IUser } from './user-model';
import { QuestionDto } from '../dto/question-dto';
export interface IQuestion extends Document {
  _id?: Schema.Types.ObjectId;
  title: string;
  explanation: string;
  views: number;
  upvotes: number;
  downvotes: number;
  tags: ITag[];
  author?: IUser;
  answers?: any[];
  createdAt?: Date;
}

export interface IQuestionMethods {
  mapToDto(): QuestionDto;
}

type QuestionModel = Model<IQuestion, {}, IQuestionMethods>;
const QuestionSchema = new Schema<IQuestion, QuestionModel, IQuestionMethods>({
  title: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  downvotes: {
    type: Number,
    default: 0,
  },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag', default: [] }],
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer', default: [] }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

QuestionSchema.method('mapToDto', function () {
  const {
    _id,
    tags,
    author,
    explanation,
    title,
    createdAt,
    views,
    upvotes,
    downvotes,
  } = this;
  const result: QuestionDto = {
    _id: _id.toString(),
    tags: tags.map(({ _id, name }) => {
      return {
        _id: _id?.toString(),
        name,
      };
    }),
    author: {
      _id: author?._id?.toString(),
      name: author?.name,
      profilePictureUrl: author?.profilePictureUrl,
    },
    title,
    explanation,
    createdAt,
    views,
    upvotes,
    downvotes,
  };
  return result;
});

const Question =
  (models.Question as QuestionModel) ??
  model<IQuestion>('Question', QuestionSchema);

export default Question;
