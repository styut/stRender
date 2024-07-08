import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { map } from 'rxjs/operators';
import {jobField } from "../models/jobField";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class jobService {

  constructor(private http: HttpClient) { }
  jobFilter:Job[]=[];
  
  getAllJobs():Observable<Job[]>{
    return this.http.get<Job[]>('https://localhost:44337/api/jobs/GetAlljobs')
   
  }
  // filter(area:string,region:string): Observable<[]>{
  //  this.getAllJobs().subscribe(res=>{
  //   this.jobFilter=res;
  //  });
   
  // }
  filterByAreaRegion(filterData:any): Observable<Job[]> {
    console.log("sari");
    
    return this.getAllJobs().pipe(
      map(jobs => {
        // סינון המשרות על פי הפרמטרים area ו-region
        if (filterData.area && filterData.region) {
          return jobs.filter(job => jobField[job.jobField].toString() === filterData.region && job.area === filterData.area);
        } else if (filterData.area) {
          return jobs.filter(job => job.area === filterData.area);
        } else if (filterData.region) {
          return jobs.filter(job => jobField[job.jobField].toString() === filterData.region);
        } else {
          return jobs;
        }
      })
    );
  }

  filter(job: string): Job[] {
    console.log();
    const a=parseInt(job);
    this.getAllJobs().subscribe(res=>{
    this.jobFilter=res;
   });
    return this.jobFilter.filter(p =>jobField[p.jobField].toString() === jobField[a].toString());
  }
}
