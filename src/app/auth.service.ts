import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { DeleteLogsService } from './delete-logs.service';

@Injectable()
export class AuthService {
user: Observable<firebase.User>;
isLoggedIn:boolean=false;
uid:string="";
key:string="";
userName:string="";
getisLoggedIn():Promise<any>
{
  return new Promise(resolve => {
    try{ this.user.subscribe(i=>{
          if(i)
            {
              this.isLoggedIn=true;
              this.uid=i.uid;  

            }
                
            resolve(this.isLoggedIn);
        });
    }
      catch(e){}
  })
}
  constructor(private firebaseAuth: AngularFireAuth,DeleteLogsService:DeleteLogsService) 
  {
     this.user = firebaseAuth.authState;

     if(!this.isLoggedIn)
        this.user.subscribe(i=>{
          if(i)
            {
              this.isLoggedIn=true;
              this.uid=i.uid;
            }
        
        });
       
   }
signup(email: string, password: string):Promise<any> 
{
    let result:any="void";    
      return new Promise((resolve,reject)=> 
      {
          this.firebaseAuth
          .auth
          .createUserWithEmailAndPassword(email, password)
          .then(value => 
          {
            this.uid=value.uid;
            console.log('uid inserted',this.uid);
            resolve(this.uid);
          })
          .catch(err => {
          reject(err.message);
          });
      });
  }

  login(email: string, password: string):Promise<any>  {
    return new Promise((resolve,reject) =>{
 this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(
        (success) => {
          this.isLoggedIn=true;
        console.log('Nice, it worked!');
       resolve(this.isLoggedIn);
      }
    )
      .catch(err => {
        reject(err.message);
        console.log('Something went wrong:',err.message);
      });

    } )
    
   
  }

  logout() {
     
     return this.firebaseAuth
      .auth
      .signOut().then(
        success =>  this.isLoggedIn=false
      );
 
    
  }
}
