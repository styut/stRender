
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-resume-modal',
  templateUrl: './resume-modal.component.html',
  styleUrls: ['./resume-modal.component.scss']
})
export class ResumeModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ResumeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public resumeData: any
  ) { }

  onCloseClick(): void {
    this.dialogRef.close('down');
  }

 
}

