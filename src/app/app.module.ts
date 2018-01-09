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
import { GetAllUsersService } from './get-all-users.service';
import { GetNotificationService } from './get-notification.service';
import { DeleteLogsService } from './delete-logs.service';
import { GetAreasService } from './get-areas.service';
import { GetAllBookingsService } from './get-all-bookings.service';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ResidentComponent } from './resident/resident.component';
import { GroundComponent } from './ground/ground.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { MdDialogModule,MdProgressBarModule,MdTableModule,MdButtonModule,MdMenuModule,MdToolbarModule,MdIconModule,MdCardModule,MdListModule,MdInputModule,MdGridListModule,MdSelectModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import { DateTimePickerModule } from 'ng-pick-datetime';
import { ViewBookingComponent } from './admin/view-booking/view-booking.component';
import { ViewResidentsComponent } from './admin/view-residents/view-residents.component';
import { ViewFeedbackComponent } from './resident/view-feedback/view-feedback.component';
import { SetFeedbackComponent } from './resident/set-feedback/set-feedback.component';
import { ViewUserBookingsComponent } from './resident/view-user-bookings/view-user-bookings.component';
import { ViewAllFeedbacksComponent } from './admin/view-all-feedbacks/view-all-feedbacks.component';
import { CreateSlotsComponent } from './admin/create-slots/create-slots.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ResidentComponent,
    GroundComponent,
    AComponent,
    BComponent,
    ViewBookingComponent,
    ViewResidentsComponent,
    ViewFeedbackComponent,
    SetFeedbackComponent,
    ViewUserBookingsComponent,
    ViewAllFeedbacksComponent,
    CreateSlotsComponent
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
                        component:GroundComponent,
                         outlet: 'adminOutlet'
                    },
                    {
                        path:'viewbooking',
                        component:ViewBookingComponent,
                         outlet: 'adminOutlet'
                    },
                    {
                        path:'viewusers',
                        component:ViewResidentsComponent,
                         outlet: 'adminOutlet'
                    },
                     {
                        path:'createslots',
                        component:CreateSlotsComponent,
                         outlet: 'adminOutlet'
                    },
                    {
                        path:'viewfeedback',
                        component:ViewAllFeedbacksComponent,
                         outlet: 'adminOutlet'
                    },
                   ] 
      },
      {
          path:'resident',
          component:ResidentComponent,
          children:[
                    {
                        path:'ground',
                        component:GroundComponent,
                         outlet: 'userOutlet'
                    },
                    {
                        path:'userbooking',
                        component:ViewUserBookingsComponent,
                         outlet: 'userOutlet'
                    },
                    {
                        path:'viewfeedback',
                        component:ViewFeedbackComponent,
                         outlet: 'userOutlet'
                    },
                    {
                        path:'setfeedback',
                        component:SetFeedbackComponent,
                         outlet: 'userOutlet'
                    }
                   ] 
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
    DateTimePickerModule,
    MdTableModule,
    MdProgressBarModule,
    MdDialogModule
	
  ],
  providers: [GetNotificationService,GetAllUsersService,GetAllBookingsService,DateService,DeleteLogsService,GetAreasService,AuthService,AuthGuard,AngularFireDatabase,AngularFireAuth,AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
