import { Component, OnInit } from '@angular/core';
import { GetAllBookingsService } from '../../get-all-bookings.service';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  constructor(public AuthService:AuthService,public GetAllBookingsService:GetAllBookingsService) { }
  index=-1;
  detail:any;
  counter=0;
  ngOnInit() {
    this.GetAllBookingsService.startCounter();
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
