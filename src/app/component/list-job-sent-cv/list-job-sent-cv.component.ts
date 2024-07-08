import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { userResumeService } from "../../service/userResume.service";

@Component({
  selector: 'app-list-job-sent-cv',
  templateUrl:'./list-job-sent-cv.component.html',
  styleUrls: ['./list-job-sent-cv.component.scss']
})
export class ListJobSentCvComponent implements OnInit {
  public listSendCv: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(private userResumeService: userResumeService) {}

  ngOnInit(): void {
    this.userResumeService.getCv().subscribe(cv => {
      this.listSendCv.next(cv);
    });
  }
}
