import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DateService } from '../date.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  ////////////////////////Date Time////////////////////////////////////////
  public moment: Date = new Date();
  public pickerColor: string = '#0070ba';
  public min = new Date(2017, 7, 9);
    public max = new Date(2017, 8, 10);
    public input1Moment: any;
    public input4Moment: any;
  /////////////////////////////////////////////////////////////////////////
  getB()
  {

    console.log(this.DateService.parseDate(this.input4Moment));
    console.log(this.DateService.parseTime(this.input1Moment));
    
  }
  constructor(private DateService:DateService) { }

  ngOnInit() {
  }
 tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
