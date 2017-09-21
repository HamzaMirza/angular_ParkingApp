import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListObservable } from 'angularfire2/database';
import { GetAreasService } from '../../get-areas.service';
import { AuthService } from '../../auth.service';
@Injectable()
export class GetAllBookingsService 
{
     booking=[];
     slotsKey:{areaName,slotKey,childSlotKey}[]=[];
     bookingsKey=[];
     AllparticularareasSlotsData$:FirebaseListObservable<any[]>[]=[];
     srNo=[];
     displayIndex=[];
     counter=-1;
     startCounter()
     {
         this.counter=0;
     }
     incCounter()
     {
         this.counter++;
     }
    constructor(private af:AngularFireDatabase,public GetAreasService: GetAreasService)
    { 
        this.loadData();
    }
resetData()
{
    this.booking=[];
    this.slotsKey=[];
    this.bookingsKey=[];
    this.AllparticularareasSlotsData$=[];
    this.srNo=[];
    this.displayIndex=[];
    this.counter=-1; 
    this.loadData();
    this.startCounter();
    
}
loadData()
{
         let count=1;
    this.af.list('/slots',{preserveSnapshot:true}).subscribe
    (
      snapshots=>
      {
           snapshots.forEach(snapshot => 
            {
              for(let i=0;i<snapshot.val().totalSlot;i++)
              { 
                 this.AllparticularareasSlotsData$.push(this.af.list('/slots/'+snapshot.key+'/slotsArr/'+i+'/'));
                  console.log(typeof this.AllparticularareasSlotsData$)
                this.af.list('/slots/'+snapshot.key+'/slotsArr/'+i+'/',{preserveSnapshot:true}).subscribe
                (
                  snapshots=>
                  {
                    snapshots.forEach(snapshot => 
                        {
                            
                            if(snapshot.val().areaName)
                             {
                                 this.booking.push(snapshot.val());
                                   this.bookingsKey.push(snapshot.key);
                                this.displayIndex.push(i);
                            
                                  this.srNo.push(count++);
                                
                                  
                                this.slotsKey.push({areaName:snapshot.val().areaName,slotKey:i,childSlotKey:snapshot.key});
                                
                             }
                             else
                                 {
                                     this.booking.push("-1");
                                      this.srNo.push(-1);
                                    
                                 }
                             
                                
                            
                                
                          
                        });
                  }
                );
                
              }
              console.log(this.booking,",",this.srNo)
            });
        }
    );    
        
}
  deleteBooking(data):boolean
  {
        let output=false;
        if(data)
        {
            let slotsKey="";
            for(let i=0;i<this.slotsKey.length;i++)
            {
                if(data.areaName==this.slotsKey[i].areaName && data.key==this.slotsKey[i].childSlotKey )
                {
                    slotsKey=this.slotsKey[i].slotKey;
                }
            } 
            if(slotsKey!=="")
            {
                this.af.object('/slots/'+data.areaKey+'/slotsArr/'+ slotsKey+"/"+data.key).remove().then(
                    success=>{
                        output=true;
                        this.resetData();
                    
                    },
                    error=>output=false
                );
            }     
            console.log('/slots/'+data.areaKey+'/slotsArr/'+ slotsKey+"/"+data.key);  
        } 
        return output; 
    }
}
