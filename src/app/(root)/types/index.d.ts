import React from 'react';
import { BADGE_CRITERIA } from '@app/(root)/constants';

export interface BaseProps {
  children?: React.ReactNode;
  className?: string;
}

export interface PageParams<T extends object> {
  params: {
    [key in keyof T]: string | string[] | T[key];
  };
  searchParams: {
    [key in keyof T]: string | string[] | T[key];
  };
}

export type Theme = 'dark' | 'light' | 'system';

export interface ThemeContextValue {
  mode: Theme;
  updateTheme: (theme: Theme) => void;
}

export interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
}

export interface ThemeMenuAction {
  label: string;
  icon: string;
  value: Theme;
}

export interface Job {
  id?: string;
  employer_name?: string;
  employer_logo?: string | undefined;
  employer_website?: string;
  job_employment_type?: string;
  job_title?: string;
  job_description?: string;
  job_apply_link?: string;
  job_city?: string;
  job_state?: string;
  job_country?: string;
}

export interface Tag {
  id?: string;
  name: string;
  noOfQuestion?: number;
}
export interface User {
  id?: string;
  username?: string;
  name: string;
  authProviderId: string;
  email: string;
  profilePictureUrl?: string | null;
  bio?: string | null;
  location?: string | null;
  portfolioWebsite?: string | null;
  reputation?: number | null;
  createdAt?: Date | null;
}
export interface Question {
  id?: string;
  title: string;
  explanation: string;
  views?: number;
  upvotes?: number;
  downvotes?: number;
  tags: Tag[];
  author?: Partial<User>;
  // eslint-disable-next-line no-use-before-define
  answers?: Answer[];
  createdAt?: Date;
}

export interface Answer {
  id?: string;
  content: string;
  upvote?: number;
  downvote?: number;
  createdAt?: Date;
  updatedAt?: Date;
  hasUpvoted?: boolean;
  hasDownvoted?: boolean;
  author?: Partial<User>;
  question?: Partial<Question>;
}

export interface GetQuestionsParams {
  page?: number;
  pageSize?: number;
  searchQuery?: string;
  filter?: string;
}

export interface GetAnswerParams {
  questionId: string;
  sortBy?: string;
  page?: number;
  pageSize?: number;
}

export interface PaginationParams {
  page?: number;
  pageSize?: number;
  searchQuery?: string;
  filter?: string;
}
export interface Country {
  name: {
    common: string;
  };
}

export interface ServerActionResult<T> {
  error?: string;
  statusCode: number;
  data?: T;
}
export interface ParamsProps {
  params: { id: string };
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

export interface BadgeCounts {
  GOLD: number;
  SILVER: number;
  BRONZE: number;
}

export interface Filter {
  name: string;
  value: string;
}

export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA;
