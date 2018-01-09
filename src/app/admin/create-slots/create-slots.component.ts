import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable  } from 'angularfire2/database';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-create-slots',
  templateUrl: './create-slots.component.html',
  styleUrls: ['./create-slots.component.css']
})
export class CreateSlotsComponent implements OnInit {

  constructor(public authService: AuthService,private af:AngularFireDatabase) { }

  ngOnInit() {
  }
   isCorrect:boolean=false;
 isformSubmitted:boolean=false;
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
                   
            
                   this.isformSubmitted=true;
                  });},
      error=>{
        this.isCorrect=false; this.isformSubmitted=true;
      }
    ); 
   
  }

}
