import { Injectable, Attribute } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListObservable } from 'angularfire2/database';
import { DatePipe } from '@angular/common';
import { GetAllBookingsService } from './get-all-bookings.service';

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
 constructor(private af:AngularFireDatabase,public GetAllBookingsService:GetAllBookingsService)  { 
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
                                    let temp=snapshot2.val();
                                    let tempString='/slots/'+snapshot.key+'/slotsArr/'+snapshot1.key+"/"+snapshot2.key;
                                    
                                      if(this.date.transform(snapshot2.val().endDate,'MM/dd/yyyy')<this.dateToday)
                                      {
                                        this.deleteBooking(''+tempString,temp);
                                        
                                      }
                                      else if(this.date.transform(snapshot2.val().endDate,'MM/dd/yyyy')==this.dateToday)
                                       {
                                         
                                             let c = snapshot2.val().endTime.split(':');
                                             let currentTime=this.getCurrentTime().split(':');
                                             
                                             if(c[0]<currentTime[0])
                                             {
                                               this.deleteBooking(''+tempString,temp);
                                             }
                                              else if(c[0]==currentTime[0])
                                             {
                                               if(c[1]<=currentTime[1])
                                                {
                                                  this.deleteBooking(''+tempString,temp);
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
    deleteBooking(path:string,temp)
    {
       this.af.object(path+'/').remove().then(
        success=>{
            console.log("Deleted:",temp);
            this.GetAllBookingsService.resetData();
            
        },
        error=>console.log("Failed to deleted:",temp)
    );
    }
}
