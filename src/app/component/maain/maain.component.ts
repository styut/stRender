
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from "../../models/user";
import { jobField } from "../../models/jobField";
import { userResumeService } from "../../service/userResume.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-maain',
  templateUrl: './maain.component.html',
  styleUrls: ['./maain.component.scss']
})

export class MaainComponent implements OnInit, OnDestroy {
  userResume: number = 0;
  userResum: number = 0;
  user: User = { id: 0, username: '', password: '', jobSearchField: jobField.Client };
  username: string = '';
  userReigon: jobField = jobField.Client;
  subscription: Subscription = new Subscription();

  constructor(private userResumeService: userResumeService) {}
  ngOnInit() { 
    const storedUser = localStorage.getItem('userConnect');
    if (storedUser) {
        this.user = JSON.parse(storedUser);
        this.userReigon = this.user.jobSearchField;
        this.username = this.user.username || 'אורח';
        const storedUserResume = localStorage.getItem(this.user.password);
     if (storedUserResume) {
        this.userResume = parseInt(storedUserResume) || 0;
     }
    
    } 
    else {
        window.location.href = "login";
        this.username = 'אורח';
    }
    this.subscription = this.userResumeService.getCount().subscribe(count => {
      console.log(count+"count");
      
      this.userResume = count;
  });
}


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateResume($event: number) {
    this.userResume = $event;
  }
  
}
