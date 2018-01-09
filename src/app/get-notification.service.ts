import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListObservable } from 'angularfire2/database';
@Injectable()
export class GetNotificationService {
  notifications$: FirebaseListObservable<any[]>;
  length=0;
  constructor(private af:AngularFireDatabase)  {
        this.notifications$ = this.af.list('/feedbacks');
  this.af.list('/feedbacks',{preserveSnapshot:true}).subscribe(snapshots=>{
    snapshots.forEach(snapshot=>{
      this.length++;
    })
  })

   }
}
