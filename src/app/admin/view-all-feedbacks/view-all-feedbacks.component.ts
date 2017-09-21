import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { GetNotificationService } from '../../get-notification.service';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListObservable } from 'angularfire2/database';
import { DateService } from '../../date.service';

@Component({
  selector: 'app-view-all-feedbacks',
  templateUrl: './view-all-feedbacks.component.html',
  styleUrls: ['./view-all-feedbacks.component.css']
})
export class ViewAllFeedbacksComponent implements OnInit {

constructor(public authService: AuthService,public GetNotificationService:GetNotificationService,private af:AngularFireDatabase,private DateService:DateService) { }
      isCorrect=false;

  ngOnInit() {
  }
  feeds$: any;
  index=0;
  resetModal()
  {
    this.index=0;
        this.feeds$="";
  }
loadModal(index,post)
{
  this.feeds$=post;
  this.index=index;
}
onReply(data)
{
 console.log(data,",",this.index,",",this.feeds$.key) 
        
 this.af.object('/feedbacks/' +  this.feeds$.key).update({replied:'yes'});
   this.af.list('/feedbacks/' + this.feeds$.key).push({ reply:data.reply,Replier: this.authService.userName,date:this.DateService.getCurrentDate(),adminUid:this.authService.uid }).then(
      success=>{
        this.isCorrect=true;
        this.index=0;
        this.feeds$="";
         
      },
      error=>
      {
        this.isCorrect=false;
        this.index=0;
        this.feeds$="";
      }
    ); ;
}
}
