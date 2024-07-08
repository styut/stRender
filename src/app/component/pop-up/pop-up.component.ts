// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-pop-up',
//   templateUrl: './pop-up.component.html',
//   styleUrls: ['./pop-up.component.scss']
// })
// export class PopUpComponent {
//   @Input() listCVjobs: string[] = [];

//   closeModal() {
//     // כאן תוסיף את הפונקציה שתסגור את ה-pop-up
//     // לדוגמה:
//     this.listCVjobs = []; // רוקן את הרשימה של הקורות חיים
//   }
// }
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  @Input() appliedJobs: string[] = [];
  showPopup: boolean = false;

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
