import { TagDto } from './tag-dto';
import { UserDto } from './user-dto';

interface QuestionDto {
  id?: string;
  title: string;
  explanation: string;
  views?: number;
  upvotes?: number;
  downvotes?: number;
  tags: (TagDto | string)[];
  author?: Partial<UserDto>;
  answers?: any[];
  createdAt?: Date;
}

export { type QuestionDto };
