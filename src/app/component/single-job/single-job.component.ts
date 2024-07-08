import { Component, Input ,OnInit} from '@angular/core';
import { Job } from '../../models/job';
import { jobField } from '../../models/jobField';
import { userResumeService } from "../../service/userResume.service";
import { MatDialog } from '@angular/material/dialog';
import { ListJobSentCvComponent } from '../list-job-sent-cv/list-job-sent-cv.component';
@Component({
  selector: 'app-single-job',
  templateUrl: './single-job.component.html',
  styleUrls: ['./single-job.component.scss']
})
export class SingleJobComponent {
  hiddenorShow:string="הצגת פרטי משרה:";
  uploadedFiles: string[] = [];
  showJobDetails: boolean = false;
  jobTitle:any='';
 
  constructor(private resumeService: userResumeService,public dialog: MatDialog) {}
  ngOnInit() { 
      if (this.jobData && this.jobData.jobField) {
        this.jobTitle=jobField[this.jobData?.jobField].toString(); 
    }
  }

  @Input() jobData: Job | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0]; 
    this.uploadedFiles.push(file.name);
    this.resumeService.setCount();
    if (this.jobData && this.jobData.jobTitle) {
      this.resumeService.setCv(this.jobData?.jobTitle);
    }
    alert("Your CV has been sent successfully");
  }

  showDetails() {
    this.showJobDetails=!(this.showJobDetails);
    if(this.showJobDetails){
        this.hiddenorShow=" - "
    }
    else  this.hiddenorShow=" + ";
  }
  openPopUp() {
     this.dialog.open(ListJobSentCvComponent, {
      width: '350px', 
      data: {} 
    });
  
  
}


}


