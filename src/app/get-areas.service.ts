import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListObservable } from 'angularfire2/database';
@Injectable()
export class GetAreasService {
areas$: FirebaseListObservable<any[]>;
  constructor(private af:AngularFireDatabase)  { 
    this.areas$ = this.af.list('/slots');
  }

}
