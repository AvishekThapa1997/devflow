import { Schema, model, models, Model } from 'mongoose';
import { IQuestion } from './question-model';

export interface IUser {
  _id?: Schema.Types.ObjectId;
  clerkId: string;
  name: string;
  username: string;
  email: string;
  profilePictureUrl?: string;
  bio?: string;
  location?: string;
  portfolioWebsite?: string;
  reputation?: number;
  saved?: IQuestion[];
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  clerkId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profilePictureUrl: { type: String },
  bio: { type: String },
  location: { type: String },
  portfolioWebsite: { type: String },
  reputation: { type: Number, default: 0 },
  saved: [{ type: Schema.Types.ObjectId, ref: 'Question' }], // Assuming you have a Question model
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = models.User<Model<IUser>> ?? model<IUser>('User', UserSchema);

export default User;
