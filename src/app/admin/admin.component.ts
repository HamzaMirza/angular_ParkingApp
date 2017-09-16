import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable  } from 'angularfire2/database';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
displayForm_Profile:boolean=false;  
 displayForm_Slots:boolean=false; 
 isCorrect:boolean=false;
 isformSubmitted:boolean=false;
 details={uid:"",name:"", address:"",cellNum:"",key:""};
 setDisplayAreas()
 {
    this.displayForm_Profile=false;  
    this.displayForm_Slots=true; 
 }
 setDisplayProfile()
 {  
    this.displayForm_Slots=false; 
    this.displayForm_Profile=false;
 }
  onSubmitAreas(data)
  {
    let arr=[];
   for(let i=0;i<data.totalSlots;i++)
    arr[i]={blah:''};
   this.af.list('/slots/').push({areaName:data.areaName,totalSlot:data.totalSlots,slotsArr:arr,key:""}).then(
      success=>{
        this.isCorrect=true;
        this.af.list('/slots', { preserveSnapshot: true}).subscribe(snapshots=>
                 {
                   this.af.object('/slots/' + snapshots[snapshots.length-1].key)
                            .update({key:snapshots[snapshots.length-1].key});
                   
                  this.displayForm_Slots=false;    
                   this.isformSubmitted=true;
                  });},
      error=>{
        this.isCorrect=false; this.isformSubmitted=true;
      }
    ); 
   
  }
  onSubmitProfile(data)
  {
      this.af.object('/usersDetails/' + this.details.key)
      
      .update({name:data.name,cellNum:data.cellNum,key:this.details.key}).then(
        success=>{
          this.isCorrect=true;
                   this.isformSubmitted=true;
          
        },
        error=>{
          this.isCorrect=false;this.isformSubmitted=true;
        }
      );   

  }
   constructor(private router:Router,public authService: AuthService,private af:AngularFireDatabase) {}

  ngOnInit()
   {
    if(this.authService.userName=="")
    {
       this.af.list('/users', { preserveSnapshot: true}).subscribe(snapshots=>
          {
            snapshots.forEach(snapshot => 
            {
                if(snapshot.val().uid==this.authService.uid)
                {
                  this.authService.userName=snapshot.val().userName;
                }
            });
          });
          
    }
       this.af.list('/usersDetails', { preserveSnapshot: true}).subscribe(snapshots=>
          {
            snapshots.forEach(snapshot => 
            {
                if(snapshot.val().uid==this.authService.uid)
                {
                  
                   this.details= snapshot.val();
                   this.details.key=snapshot.key;
                   this.authService.key=snapshot.key;
                }
            });
          });
  
  }
  changeFlag()
  {
    this.isformSubmitted=!this.isformSubmitted;
  }
  logout() 
  {
    this.authService.logout().then(
      success => this.router.navigate(['/login'])
    );
  }

}
