import { QuestionDto } from './question-dto';

interface UserDto {
  _id?: string;
  username?: string;
  name?: string;
  authProviderId: string;
  email: string;
  profilePictureUrl?: string;
  bio?: string;
  location?: string;
  portfolioWebsite?: string;
  reputation?: number;
  saved?: QuestionDto[];
  createdAt: Date;
}

export { type UserDto };
