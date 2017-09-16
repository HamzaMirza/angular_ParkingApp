import { Injectable, Attribute } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListObservable } from 'angularfire2/database';
import { DatePipe } from '@angular/common';

@Injectable()
export class DeleteLogsService {
 dateToday =new DatePipe('en-US').transform(new Date(), 'MM/dd/yyyy');
 date=new DatePipe('en-US');

getCurrentTime() {
    let t= ""+new Date();
    let a=t.split(" ");
    if(a)
    return a[4];
   else
    return "none";
};
 constructor(private af:AngularFireDatabase)  { 
     this.af.list('/slots', { preserveSnapshot: true}).subscribe(
       snapshots=>{

         snapshots.forEach
         (
  
           
            snapshot=>
            {
            
                this.af.list('/slots/'+snapshot.key+'/slotsArr', { preserveSnapshot: true}).subscribe(
                snapshots=>{
                  snapshots.forEach
                  (
                      snapshot1=>
                      {
                        
                            this.af.list('/slots/'+snapshot.key+'/slotsArr/'+snapshot1.key, { preserveSnapshot: true}).subscribe(
                            snapshots=>{
                              snapshots.forEach
                              (
                                  snapshot2=>
                                  {
                                      if(this.date.transform(snapshot2.val().endDate,'MM/dd/yyyy')<this.dateToday)
                                        console.log(snapshot2.val());
                                      else if(this.date.transform(snapshot2.val().endDate,'MM/dd/yyyy')==this.dateToday)
                                       {
                                         
                                             let c = snapshot2.val().endDate.split(':');
                                             let currentTime=this.getCurrentTime().split(':');
                                             //Bug to remove
                                             let hour=(+currentTime[0]);
                                              if((+currentTime[0])>12)
                                                hour= (+currentTime[0])-12;
                                             ////////////////////////
                                             if(c[0]<hour)
                                             {
                                               console.log("innerTime",snapshot2.val());
                                             }
                                              else if(c[0]==hour)
                                             {
                                               if(c[1]<=currentTime[1])
                                                {
                                                  console.log("innerTime",snapshot2.val());
                                                }
                                             }
                                          
                                       }
                                  }
                                )
                        
                            }
                          )
                      }
                    )
            
                }
              )
            }
          )
  
       }
     );
  }

}
