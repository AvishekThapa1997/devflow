import { QuestionDto } from './question-dto';

interface UserDto {
  id?: string;
  username?: string;
  name?: string;
  authProviderId: string;
  email: string;
  profilePictureUrl?: string | null;
  bio?: string | null;
  location?: string | null;
  portfolioWebsite?: string | null;
  reputation?: number | null;
  saved?: QuestionDto[] | null;
  createdAt?: Date | null;
}

export { type UserDto };
