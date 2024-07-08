


import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResumeModalComponent } from '../resume-modal/resume-modal.component';
import { style } from '@angular/animations';

@Component({
  selector: 'app-make-resume',
  templateUrl: './make-resume.component.html',
  styleUrl: './make-resume.component.scss'
})
export class MakeResumeComponent {
  constructor(public dialog: MatDialog) { }

  fullName: string = "";
  dateOfBirth: string = "";
  skills: string = "";
  educationLevel: string = "";
  resumeCreated: boolean = false;
  resumeStyle: string = "deafult"; // משתנה שיקבע את סגנון הרקע

  onSubmit() {
    this.resumeCreated = true;

    const dialogRef = this.dialog.open(ResumeModalComponent, {
      width: '800px',
     // רוחב החלון
      data: {  // הנתונים שיועברו למודל
        fullName: this.fullName,
        dateOfBirth: this.dateOfBirth,
        skills: this.skills,
        educationLevel: this.educationLevel,
        resumeStyle:this.resumeStyle,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result =='down') 
        this.downloadHTML();
     
    });
  }
  makeStyle(){
    this.resumeStyle = "luxury";
  }
  makeClasic(){
    this.resumeStyle = "classic";
  }
  downloadHTML() {
    const resumeContent = `
    <style>
      #resume {
        margin: 50px auto;
        padding: 20px;
        border-radius: 10px;
        max-width: 600px;
      }
      .classic {
        background-color: #c4c4c4; /* אפור */
        border: 2px solid #008000; /* ירוק */
        color: #ffffff; /* לבן */
      }
      .luxury {
        background-color: #000000; /* שחור */
        border: 2px solid #ff8c00; /* כתום */
        color:  #ff8c00; /* לבן */
      }
        .deafult {
        background-color: white;
        border: 2px solid  purple;
        color:  solid purple; 
      }
      h2 {
        text-align: center;
      }
      p {
        margin-bottom: 10px;
      }
      strong {
        font-weight: bold;
      }
    </style>
    <div id="resume" class="${this.resumeStyle}">
      <h2>קורות חיים</h2>
      <p><strong>שם מלא:</strong> ${this.fullName}</p>
      <p><strong>תאריך לידה:</strong> ${this.dateOfBirth}</p>
      <p><strong>כישורים:</strong> ${this.skills}</p>
      <p><strong>השכלה:</strong> ${this.educationLevel}</p>
    </div>
  `;

    
    const element = document.createElement('a');
    const file = new Blob([resumeContent], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'resume.html';
    document.body.appendChild(element);
    element.click();
  }
}
