import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import {Router,RouterModule} from '@angular/router';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { DateService } from './date.service';
import { DeleteLogsService } from './delete-logs.service';
import { GetAreasService } from './get-areas.service';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ResidentComponent } from './resident/resident.component';
import { GroundComponent } from './ground/ground.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { MdButtonModule,MdMenuModule,MdToolbarModule,MdIconModule,MdCardModule,MdListModule,MdInputModule,MdGridListModule,MdSelectModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import { DateTimePickerModule } from 'ng-pick-datetime';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ResidentComponent,
    GroundComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule.forRoot([
      {
          path:'login',
          pathMatch:'full',
          component:LoginComponent
      },
      {
          path:'admin',
          component:AdminComponent,
           children:[
                    {
                        path:'ground',
                        component:GroundComponent
                        ,
                         outlet: 'groundOutlet'
                      }
                   ] 
      },
      {
          path:'resident',
          pathMatch:'full',
          component:ResidentComponent
      },
      {
          path:'a',
          pathMatch:'full',
          component:AComponent
      },
      {
        path:'',
        pathMatch:'full',
       redirectTo:'/login'
      
      }/*,
      {
        path:'**',
        redirectTo:'/login'
      }*/
    ]),
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdListModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdGridListModule,
    FlexLayoutModule,
    MdSelectModule,
    DateTimePickerModule
	
  ],
  providers: [DateService,DeleteLogsService,GetAreasService,AuthService,AuthGuard,AngularFireDatabase,AngularFireAuth,AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
