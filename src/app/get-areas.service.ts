import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListObservable } from 'angularfire2/database';
@Injectable()
export class GetAreasService {
areas$: FirebaseListObservable<any[]>;
areasKey=[];
areasSlots:FirebaseListObservable<any[]>[][]=[]; //FirebaseListObservable array;
AllparticularareasSlots$:FirebaseListObservable<any[]>[]=[];
AllparticularareasSlotsData$=[];
  constructor(private af:AngularFireDatabase)  { 
    let localparticularareasSlots$:FirebaseListObservable<any[]>[]=[];
    this.areas$ = this.af.list('/slots');
    this.af.list('/slots',{preserveSnapshot:true}).subscribe
    (
      snapshots=>
      {
           snapshots.forEach(snapshot => 
            {
              this.areasKey.push(snapshot.key);
               
              
              for(let i=0;i<snapshot.val().totalSlot;i++)
              {
                
                
                  localparticularareasSlots$.push(this.af.list('/slots/'+snapshot.key+'/slotsArr/'+i,{preserveSnapshot:true}));
                this.AllparticularareasSlots$.push(this.af.list('/slots/'+snapshot.key+'/slotsArr/'+i,{preserveSnapshot:true})); 
              
              
              this.areasSlots.push(localparticularareasSlots$);
              localparticularareasSlots$=[];
              
              }
            });
        }
    );
    
  }

}
