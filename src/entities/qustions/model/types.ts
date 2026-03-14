import type { UserShort } from "@/entities/auth";
import type { Skill } from "@/entities/skills";
import type { Specialization } from "@/entities/specializations";
import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export interface Question {
  id: number;
  title: string;
  slug: string;
  description: string;
  code: string;
  imageSrc: string;
  keywords: string[];

  longAnswer: string;
  shortAnswer: string;

  status: 'public' | 'private' | string; 
  rate: number;
  complexity: number;

  createdById: string;
  updatedById: string;

  questionSpecializations: Specialization[];
  questionSkills: Skill[];

  createdAt: string;
  updatedAt: string;

  createdBy: UserShort;
  updatedBy: UserShort;

  checksCount: number;
  isLearned: boolean;
  isFavorite: boolean;

  profileId: string;
  lastUpdate: string;
}

export interface PaginatedResponse<T> {
  total: number;
  page: number;
  limit: number;
  data: T[];
}

type QuestionItemFilds = 'imageSrc' | 'title' | 'rate' | 'complexity' | 'shortAnswer' | 'id'

export type QuestionItemProps = Pick<Question, QuestionItemFilds>

export type QuestionsResponse = PaginatedResponse<Question>;

export interface FetchQuestionsPapams {
  page: number;
  limit?: number;
  skillFilterMode?: string;
  specializationId?: number;
  skills?: string[];
  complexity?: number[];
  rate?: number[];
  title?: string;
}

export type QuestionDitailsFilds = 
'title' 
| 'description' 
| 'shortAnswer' 
| 'longAnswer'
| 'keywords'
| 'complexity'
| 'questionSkills'
| 'updatedBy'

export type QuestionDitailsProps = {
  [K in QuestionDitailsFilds]?: Question[K];
};

export type FetchError = {
  errorQuestionId?: FetchBaseQueryError | SerializedError | null;
}
