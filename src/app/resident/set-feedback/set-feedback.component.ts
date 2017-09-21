import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { DateService } from '../../date.service';

@Component({
  selector: 'app-set-feedback',
  templateUrl: './set-feedback.component.html',
  styleUrls: ['./set-feedback.component.css']
})
export class SetFeedbackComponent implements OnInit {

  constructor(public authService: AuthService,private af:AngularFireDatabase,private DateService:DateService) { }
isformSubmitted:boolean=false;
 isCorrect:boolean=false;
  ngOnInit() {
  }
   onSubmitFeedback(data)
  {
    this.isCorrect=false;
    this.af.list('/feedbacks/').push({text:data.notifytext,owner:this.authService.userName,date:this.DateService.getCurrentDate(),key:""}).then(
      success=>{this.isCorrect=true;
      this.af.list('/feedbacks', { preserveSnapshot: true}).subscribe(snapshots=>
                 {
                   this.af.object('/feedbacks/' + snapshots[snapshots.length-1].key)
                            .update({key:snapshots[snapshots.length-1].key,replied:'no'}); 
                  });
                   this.isformSubmitted=true;
                  },
      error=>
      {
        this.isCorrect=false;
        this.isformSubmitted=true;
        
      }
    ); 

  }

}
