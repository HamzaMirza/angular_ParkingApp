import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListObservable } from 'angularfire2/database';
@Injectable()
export class GetAllUsersService {
  usersUid:string[]=[];
  userList:Object[]=[];
  userkey:string[]=[];
  user$: FirebaseListObservable<any[]>;
  constructor(private af:AngularFireDatabase)
  {
     this.user$ = this.af.list('/usersDetails_resident/');

    this.af.list('/users', { preserveSnapshot: true}).subscribe(snapshots=>
          {
            snapshots.forEach(snapshot => 
            {
                if(snapshot.val().type=="Student")
                {
                  this.usersUid.push(snapshot.val().uid);
                  this.userkey.push(snapshot.key);

                }
            });
          });
          let index=0;
     this.af.list('/usersDetails_student', { preserveSnapshot: true}).subscribe(snapshots=>
          {
            snapshots.forEach(snapshot => 
            {
                if(snapshot.val().uid==this.usersUid[index])
                {
                   this.userList.push(snapshot.val()); 
                   index++;
                }
            });
          })

  }

}
