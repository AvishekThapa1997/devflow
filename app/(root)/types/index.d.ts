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
  id: string;
  name: string;
}

export interface User {
  id: string;
  name: string;
  picture?: string;
}

export interface Answer {
  id: string;
}
export interface Question {
  id: string;
  title: string;
  explanation: string;
  tags: Tag[];
  voteCount: number;
  views: number;
  answers?: Answer[];
  author: User;
  createdAt?: Date;
}

export interface Country {
  name: {
    common: string;
  };
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
