import { jobField } from "./jobField";

export interface User {
    id: number;
    username: string;
    password: string;
    jobSearchField: jobField;
    
    

  }