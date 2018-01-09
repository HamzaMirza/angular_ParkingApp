import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable  } from 'angularfire2/database';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: string;
userName:string;
  password: string;
  repassword:string;
  cellNum:string;
  error:any;
  showSignUp:boolean=false;
  types=['Admin','Resident'];
  typeSelected:string=this.types[0];
  showSpinner:boolean=false;
  todos$: FirebaseListObservable<any[]>;
 addTodo(email: string,type:string,uid:string,userName:string): void {
  this.todos$.push({ userName: userName, type: type,uid:uid,email:email});
}
  constructor(private router:Router,public authService: AuthService,private af:AngularFireDatabase) 
  {
    this.authService.getisLoggedIn().then(
      (success) => 
      {
        this.showSpinner=true;
        if(this.authService.isLoggedIn)
        {
          this.af.list('/users', { preserveSnapshot: true}).subscribe(snapshots=>
          {
            snapshots.forEach(snapshot => 
            {
                if(snapshot.val().uid==this.authService.uid)
                {
                  this.authService.userName=snapshot.val().userName;
                  console.log(''+['/'+snapshot.val().type.toLowerCase()]);
                  this.router.navigate(['/'+snapshot.val().type.toLowerCase()]);
                }
            });
          })
        }
        else
        {
          this.showSpinner=false;
          console.log(this.authService.isLoggedIn);
        }

  }
   );
         

  }

  ngOnInit() {
 
   this.todos$ = this.af.list('/users');
    
   
  }
signup() {
  if(this.userName==""|| this.email==""|| this.password=="")
      {
          this.error="ALL FIELDS ARE REQUIRED";
            return false;
      }
       else
        {

  if(this.password)
    {
      this.showSpinner=true;
      try
      {
        let err= this.authService.signup(this.email, this.password).then(
          (success)=>
          {
              this.addTodo(this.email,this.typeSelected,this.authService.uid,this.userName);
               console.log("data inserted",this.email,this.typeSelected,this.authService.uid,this.userName );
               this.authService.userName=this.userName;
               if(this.typeSelected=="Admin")
                {
                  this.af.list('/usersDetails').push({uid:this.authService.uid, name: this.userName,cellNum:this.cellNum,key:""});
                  
                  this.af.list('/usersDetails', { preserveSnapshot: true}).subscribe(snapshots=>
                 {
                    snapshots.forEach(snapshot => 
                    {
                        if(snapshot.val().uid==this.authService.uid)
                        {
                          
                          this.af.object('/usersDetails/' + snapshot.key)
                            .update({key:snapshot.key}).then(
                              success=> this.onSubmitLogin('a')
                            );
                        }
                    });
                  });
                
                }
               else if(this.typeSelected=="Resident")
               {
                  this.af.list('/usersDetails_resident').push({uid:this.authService.uid, name: this.userName, address:"",cellNum:this.cellNum,key:""});
                  this.af.list('/usersDetails_resident', { preserveSnapshot: true}).subscribe(snapshots=>
                    {
                        snapshots.forEach(snapshot => 
                        {
                            if(snapshot.val().uid==this.authService.uid)
                            {
                              
                              this.af.object('/usersDetails_resident/' + snapshot.key)
                                .update({key:snapshot.key}).then(
                              success=> this.onSubmitLogin('a')
                            );
                            }
                        });
                      });
               }
                
              
          },
          (error)=>{this.error=error;this.showSpinner=false;}//"Email/Password not correct!"
        );
        
      
     
      }
      catch(e){}
      finally{
        this.showSpinner=true;
         this.router.navigate(['/'+this.typeSelected.toLowerCase()]);
      }
      
      
    }
  else
    this.error="Password donot match";
   
        }   
  }
signupEnable()
            {
              this.showSignUp=!this.showSignUp;
            }
  onSubmitLogin(data) {
    try
    {
      this.showSpinner=true;

      var tf:boolean=false;
      var viewed:boolean=false;
       this.authService.login(this.email, this.password).then(
         (success)=>{
          this.af.list('/users', { preserveSnapshot: true})
          .subscribe(snapshots=>{
              snapshots.forEach(snapshot => {
                if(snapshot.val().email==this.email)
                {
                  this.authService.userName=snapshot.val().userName;
                  
                  tf=true;
                  this.router.navigate(['/'+snapshot.val().type.toLowerCase()]);
                }
              });
              viewed=true;
          });
            
         },
        (error)=>{this.error="Email/Password not correct!";this.showSpinner=false;}
       );
     
       
    }
    catch(e)
    {
      this.error=e;
      this.showSpinner=false;
    }
    finally{
           if(!tf && viewed) 
            {
              this.error="Account not found";
              this.showSpinner=true;
              this.logout();
            }
    }
  }

  logout() {

    this.authService.logout();
  }
}
