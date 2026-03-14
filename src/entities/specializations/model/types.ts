import type { UserShort } from "@/entities/auth";

export interface SpecializationsResponce{
    data: Specialization[];
    limit: number;
    page: number;
    total: number;
} 

export interface Specialization {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy: UserShort;
}