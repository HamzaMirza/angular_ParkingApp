import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { GetAllBookingsService } from '../../get-all-bookings.service';

@Component({
  selector: 'app-view-user-bookings',
  templateUrl: './view-user-bookings.component.html',
  styleUrls: ['./view-user-bookings.component.css']
})
export class ViewUserBookingsComponent implements OnInit {

  constructor(public authService: AuthService,public GetAllBookingsService:GetAllBookingsService) { }

 index=-1;
  detail:any;
  counter=0;
  ngOnInit() {
    this.GetAllBookingsService.startCounter();
    console.log(this.authService.userName);
  }
  getCounter()
  {
    return this.counter++;
  }
  cancelBooking()
  {
    if(this.detail)
    {
      console.log(this.detail);
      if(this.GetAllBookingsService.deleteBooking(this.detail))
      {
        this.resetAlert();
        this.counter--;
      }
   }
 
    }
  
  resetAlert()
  {
    this.index=-1;
    this.detail="";
  }
  loadAlert(detail,i)
  {
    this.index=i;
    this.detail=detail;
  }
}
