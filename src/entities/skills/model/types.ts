import type { UserShort } from "@/entities/auth";
import type { Specialization } from "@/entities/specializations";

export interface Skill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  specializations?: Specialization[];
  createdBy?: UserShort;
}

export interface SkillsResponse {
  total: number;
  page: number;
  limit: number;
  data: Skill[];
}