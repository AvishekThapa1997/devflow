import { TagDto } from './tag-dto';
import { UserDto } from './user-dto';

interface QuestionDto {
  _id?: string;
  title: string;
  explanation: string;
  views?: number;
  upvotes?: number;
  downvotes?: number;
  tags: (TagDto | string)[];
  author?: UserDto;
  //   answers?: any[];
  createdAt?: Date;
}

export { type QuestionDto };
