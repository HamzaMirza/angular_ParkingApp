import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class DateService {
    datePipe=new DatePipe('en-US');
     getCurrentTime() 
     {
           return ""+this.datePipe.transform(new Date(), 'HH:mm');
     }
      getTimeDate():string
      {
        return ""+new Date();
      }
      getCurrentDate()
      {
          return this.datePipe.transform(new Date(), 'MM/dd/yyyy');
      }
      getArrayDate(date):string[]
        {return date.split('/');}
      getArrayTime(time):string[]
        {return time.split(':');}
      parseDate(timeStamp):string
      {
        return ""+this.datePipe.transform(timeStamp, 'MM/dd/yyyy');
      }
      parseTime(timeStamp):string
      {
        return ""+this.datePipe.transform(timeStamp, 'HH:mm');
      }
      
  constructor() { }

}
