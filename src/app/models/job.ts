import { jobField } from "./jobField";
export interface Job {
    id: number;
    jobField: jobField;
    jobTitle: string;
    scopeOfHours: string;
    area: string;
    requirements: string[];
    workFromHome: boolean;
  }
