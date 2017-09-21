import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable  } from 'angularfire2/database';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.css']
})
export class ResidentComponent implements OnInit {

  constructor(private router:Router,public authService: AuthService,private af:AngularFireDatabase) {}
 details={uid:"",name:"", address:"",cellNum:"",key:""};

  ngOnInit() {
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
  
logout() 
  {
    this.authService.logout().then(
      success => this.router.navigate(['/login'])
    );
  }

}
