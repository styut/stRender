// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { User } from '../models/user';
// import { jobField } from '../models/jobField';

// @Injectable({
//   providedIn: 'root'
// })
// export class userResumeService {
//   storedUser:any = localStorage.getItem('userConnect');
//   // user: User = { id: 0, username: '', password: '', jobSearchField: jobField.Client };
//   user: User=JSON.parse(this.storedUser)
//   acountResume: number = parseInt(localStorage.getItem(this.user.password) || '0', 10); // קביעת הערך ההתחלתי ל־0 אם ה־LocalStorage ריק
//   private countResume: BehaviorSubject<number> = new BehaviorSubject<number>(this.acountResume);
//   cv:string[]=JSON.parse(localStorage.getItem('listCv'+this.user.password) || '[]');
//   private listCv: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.cv);
  
   
//   constructor() { 
//     // const storedUser = localStorage.getItem('userConnect');
//     // if (storedUser) {
//     //     this.user = JSON.parse(storedUser);

//     // } 


//   }
 

//   setCount() {
//     let count = parseInt(localStorage.getItem(this.user.password) || '0', 10); // קביעת הערך ההתחלתי ל־0 אם ה־LocalStorage ריק
//     count++;
//     localStorage.setItem(this.user.password, count.toString());
//     this.countResume.next(count);
//   }

//   getCount(): Observable<number> {
//     return this.countResume.asObservable();
//   }

//   setCv(job: string) {
//     let listCVjobs: string[] = JSON.parse(localStorage.getItem('listCv'+this.user.password) || '[]'); // קבלת הרשימה מה־LocalStorage והמרתה למערך
//     listCVjobs.push(job);
//     localStorage.setItem('listCv'+this.user.password, JSON.stringify(listCVjobs)); // המרת המערך למחרוזת ושמירתו ב־LocalStorage
//     this.listCv.next(listCVjobs); 
    
//   }

//   getCv(): Observable<string[]> {
//     return this.listCv.asObservable();
//   }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class userResumeService {
  private user: User = JSON.parse(localStorage.getItem('userConnect') || '{}');
  private countResume: BehaviorSubject<number> = new BehaviorSubject<number>(parseInt(localStorage.getItem(this.user.password) || '0', 10));
  private listCv: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(JSON.parse(localStorage.getItem('listCv' + this.user.password) || '[]'));

  constructor() {}

  updateUser() {
    console.log("ddddddddddddddd");
    
    this.user = JSON.parse(localStorage.getItem('userConnect') || '{}');
    this.countResume.next(parseInt(localStorage.getItem(this.user.password) || '0', 10));
    this.listCv.next( JSON.parse(localStorage.getItem('listCv' + this.user.password) || '[]'));

  }

  setCount() {
        let count = parseInt(localStorage.getItem(this.user.password) || '0', 10); // קביעת הערך ההתחלתי ל־0 אם ה־LocalStorage ריק
         count++;
        localStorage.setItem(this.user.password, count.toString());
         this.countResume.next(count);
      }

  getCount(): Observable<number> {
    return this.countResume.asObservable();
  }

  setCv(job: string) {
    this.updateUser();
    let listCVjobs: string[] = JSON.parse(localStorage.getItem('listCv' + this.user.password) || '[]');
    listCVjobs.push(job);
    localStorage.setItem('listCv' + this.user.password, JSON.stringify(listCVjobs));
    this.listCv.next(listCVjobs);
  }

  getCv(): Observable<string[]> {
    return this.listCv.asObservable();
  }
}
