import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../auth.service';
import { GetAreasService } from '../get-areas.service';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common';
import { DateService } from '../date.service';
import { GetAllBookingsService } from '../get-all-bookings.service';

@Component({
  selector: 'app-ground',
  templateUrl: './ground.component.html',
  styleUrls: ['./ground.component.css']
})
export class GroundComponent implements OnInit {
  area={name:"",slotsIndex:-1,isAvail:null,availText:"",key:"",slots:[],slotsAmount:0};
  slots$: FirebaseListObservable<any[]>;
  sd:string[]=[];et:string[]=[];ed:string[]=[];st:string[]=[];
  availableClasses={};
  enablebook=false;
  isBooked=false;
  isformSubmitted=false;
  error="hide";
    date=new DatePipe('en-US');//.transform(new Date(), 'MM/dd/yyyy');
    dateToday =new DatePipe('en-US').transform(new Date(), 'MM/dd/yyyy').split('/');
  constructor(private router:Router,public authService: AuthService,private af:AngularFireDatabase,public GetAreasService: GetAreasService,private DateService:DateService,public GetAllBookingsService:GetAllBookingsService) { }

  ngOnInit() {
    
  }
   getCurrentTime() {
    let t= ""+new Date();
    let a=t.split(" ");
    if(a)
    return a[4];
   else
    return "none";
}
    loadSlots(area)
    {
      console.log(area);
        this.resetSlots(area.totalSlot); 
        this.area.name=area.areaName;
        this.area.slotsAmount=area.totalSlot;
        this.area.key=area.key;
        this.area.slots=area.slotsArr;
        this.initSlots(area.totalSlot);      
      
    }
    displayError(err)
    {
      this.error=err;
      this.enablebook=false;
    }
    check(index)
    {
      let startT=this.DateService.parseTime(this.st[index]);
      let endT=this.DateService.parseTime(this.et[index]);
      let startD=this.DateService.parseDate(this.sd[index]);
      let endD=this.DateService.parseDate(this.ed[index]);
      this.resetAvailability();
      
       let c = this.DateService.getArrayTime(this.DateService.parseTime(this.st[index]));
      let inputstartMints= (+c[0]) * 60 + (+c[1]); 
      let d = this.DateService.getArrayTime(this.DateService.parseTime(this.et[index]));
      let inputendMints =(+d[0]) * 60 + (+d[1]);
      if((c[0])=='00') (c[0])="24";
                       if((d[0])=='00') (d[0])="24";
                      console.log(c); 
      if(this.sd[index]=="" || this.st[index]=="" || this.ed[index]=="" || this.et[index]=="")
      {
        this.displayError("Please fill in all the details");
        return;
      }
      else if(c[0] >= d[0])
      {
            let a=this.DateService.getArrayDate(startD);
            let b=this.DateService.getArrayDate(endD);

           if((+a[2])==(+b[2]))
           {
              if((+a[0])==(+b[0]))
              {
                  if((+a[1])==(+b[1]))
                  {
                    if(c[0] > d[0] || c[1] >= d[1])
                    {
                      this.displayError("Please select correct timings");
                      return;
                    }  
                  }
              }
           }
           
      }
      else if(c[0]<d[0] && d[0]=="24")
      {
         let a=this.DateService.getArrayDate(startD);
            let b=this.DateService.getArrayDate(endD);
        if((+a[2])==(+b[2]))
           {
              if((+a[0])==(+b[0]))
              {
                  if((+a[1])==(+b[1]))
                  {
                    
                      this.displayError("Please select correct timings or select next end day");
                      return;
                    
                  }
              }
           }
      }
           if(startT<this.DateService.getCurrentTime() && startD==this.DateService.getCurrentDate())
            {
                      this.displayError("Please select correct start timings");
                      return;
            }  
        {
            let a=this.DateService.getArrayDate(startD);
            let b=this.DateService.getArrayDate(endD);
            
            if((+a[a.length-1])<(+this.dateToday[this.dateToday.length-1]) || (+b[b.length-1])<(+this.dateToday[this.dateToday.length-1]))
            {
              this.displayError("Please select Present/Future years");
               return;
            }
            else if((+a[a.length-1])>(+b[b.length-1]))
            {
              this.displayError("Please select correct years");          
              return;
            }
            if((+a[0])<(+this.dateToday[0]) || (+b[0])<(+this.dateToday[0]))
            {
              this.displayError("Please select Present/Future month");             
               return;
            }
            else if((+a[0])!=(+b[0]))
            {
              this.displayError("Please select same  month");
              return;
            }
            if((+a[1])<(+this.dateToday[1]) || (+b[1])<(+this.dateToday[1])|| (+b[1])<(+a[1]))
            {
              this.displayError("Please select correct day");
               return;
            }
        console.log(a,",",b,",")
            
        }
        console.log(startD,startT,endD,endT)

      
     
       let booking$=[];
      let temp=[];
      this.af.list('slots/'+this.area.key+'/slotsArr/'+index,{preserveSnapshot:true}).subscribe(
        snapshots=>{
           snapshots.forEach(snapshot => 
            {
              temp.push(snapshot.key);
              booking$.push(snapshot.val());
            });
        }
      );
       if(booking$ ==null || booking$==undefined|| typeof temp=='string')
       {
          this.setAvailability(index,true,"Available");
       }
        else
          {
            let buffer="any";
            for(let i=0;i<temp.length-1;i++)
            {
              if(booking$[i].startDate==startD)
              {
     
                  if(booking$[i].startTime==startT)
                  {
                    
                    this.setAvailability(index,false,"Not Available");
                    return ;
                  }
                  else if(booking$[i].startTime<startT)
                  {
                      let a = booking$[i].startTime.split(':');
                      let startMints= (+a[0]) * 60 + (+a[1]); 
                      let b = booking$[i].endTime.split(':');
                      let endMints =(+b[0]) * 60 + (+b[1]); 

                      let c = this.DateService.getArrayTime(this.DateService.parseTime(this.st[index]));
                      let inputstartMints= (+c[0]) * 60 + (+c[1]); 
                      let d = this.DateService.getArrayTime(this.DateService.parseTime(this.et[index]));
                      let inputendMints =(+d[0]) * 60 + (+d[1]); 
                      if((c[0])=='00') (c[0])="24";
                       if((d[0])=='00') (d[0])="24";
                    let tempMints=Math.abs(startMints-endMints);
                    tempMints+=startMints;

                    
                      if(booking$[i].endDate==startD)
                        {
                          if(booking$[i].endTime<=startT )
                            {
                              buffer="available";
                            }
                            else 
                            {
                              
                              buffer="not";
                            }
                        }
                      else if(booking$[i].endDate>startD)
                      {  
                          buffer="not";
                        
                      }
                    




                    // if(tempMints<=inputstartMints )
                    // {
                    //    buffer="available";
                    // }
                    // else if(tempMints>inputstartMints )
                    // {
                      
                    //   buffer="not";
                    // }
                  }
                 else if(booking$[i].startTime>startT)
                  {
                     if(booking$[i].startDate==endD)
                      {
                         if(booking$[i].startTime>=endT )
                          {
                            buffer="available";
                          }
                          else 
                          {
                            
                            buffer="not";
                          }
                      }
                    else if(booking$[i].startDate<endD)
                    {  
                        buffer="not";
                      
                    }
                  }
                }
                 else if(booking$[i].startDate<startD)
                {
                    if(booking$[i].endDate>startD)
                    {
                      this.setAvailability(index,false,"Not Available");
                      return ;
                    }
                    else if(booking$[i].endDate==startD)
                    {
                        if(booking$[i].endTime>startT)
                        {
                          
                          this.setAvailability(index,false,"Not Available");
                          return ;
                        }
                    else if(booking$[i].endTime<=startT)
                    {
                        let a = booking$[i].startTime.split(':');
                        let startMints= (+a[0]) * 60 + (+a[1]); 
                        let b = booking$[i].endTime.split(':');
                        let endMints =(+b[0]) * 60 + (+b[1]); 

                        let c = this.DateService.getArrayTime(this.DateService.parseTime(this.st[index]));
                        let inputstartMints= (+c[0]) * 60 + (+c[1]); 
                        let d =this.DateService.getArrayTime(this.DateService.parseTime(this.et[index]));
                        if((c[0])=='00') (c[0])="24";
                       if((d[0])=='00') (d[0])="24";
                        let inputendMints =(+d[0]) * 60 + (+d[1]); 
                        if((+c[0])<(+d[0]))
                        {
                            buffer="available";
                        }
                        else if((+c[0])>(+d[0]))
                        {
                            buffer="not";
                        }
                        else if((+c[0])==(+d[0]))
                        {
                           if((+c[1])>(+d[1]))
                            {
                                buffer="not";
                            }
                              else  if((+c[1])<=(+d[1]))
                            {
                                buffer="available";
                            }
                        }
                        else if((+c[0])<(+d[0]))
                        {
                                buffer="available";
                        }
                      
                    }
                    }
                    
                }
                  console.log("outside if")
              }
                if(buffer=="available" || buffer=="any")
                {
                  this.setAvailability(index,true,"Available");
                }
                else if(buffer=="not")
                  {
                      this.setAvailability(index,false,"Not Available");
                      return ;
                  }    
              
            }
    }
    resetSlot()
    {
      this.area.slotsIndex=-1;
      this.resetSlots(this.area.slotsAmount);      
      this.initSlots(this.area.slotsAmount);      
    }
    initSlots(totalLength)
    {
        for(let i=0;i<totalLength;i++)
        {
          this.sd.push("");
          this.ed.push("");
          this.st.push("");
          this.et.push("");
          
        }
    }
    resetSlots(totalLength:number)
    {
        
          this.sd=[];
          this.ed=[];
          this.st=[];
          this.et=[];
          
        
    }
    index=0;
    setIndex(ind)
    {
      this.index=ind;
    }
    resetIndex()
    {
      this.index=0;
    }
    onBook(data)
    {

      let startT=this.DateService.parseTime(this.st[this.index]);
      let endT=this.DateService.parseTime(this.et[this.index]);
      let startD=this.DateService.parseDate(this.sd[this.index]);
      let endD=this.DateService.parseDate(this.ed[this.index]);
      if(startT.substring(0,2)=='00')
      {
        startT=startT.replace('00','24');
      }
      if(endT.substring(0,2)=='00')
      {
        endT=endT.replace('00','24');          
      }
 
     this.af.list('slots/'+this.area.key+'/slotsArr/'+this.area.slotsIndex).push({resident:this.authService.userName,rUid:this.authService.uid,areaName:this.area.name,areaKey:this.area.key,startDate:startD,endDate:endD,startTime:startT,endTime:endT,key:""}).then(
      success=>
      {
        this.isBooked=true;
        this.af.list('slots/'+this.area.key+'/slotsArr/'+this.area.slotsIndex+'/', { preserveSnapshot: true}).subscribe(snapshots=>
        {
          this.af.object('slots/'+this.area.key+'/slotsArr/'+this.area.slotsIndex+'/'+ snapshots[snapshots.length-2].key)
                  .update({key:snapshots[snapshots.length-2].key}).then(
                    success=>
                    {
                              this.area.isAvail=true;
                              this.area.availText='Booked';
                              this.resetSlot();
                              this.isBooked=true; this.isformSubmitted=true;
                              this.resetIndex();
                              this.GetAllBookingsService.resetData();

                    },error=>
                            {
                              this.resetIndex();
                                    this.isBooked=false; this.isformSubmitted=true;this.resetSlot(); this.resetIndex();
                            }
                  );
          
         
        });
      },
      error=>{

        this.isBooked=false; this.isformSubmitted=true;this.resetSlot();  this.resetIndex();  
      }
    ); 
      console.log(this.authService.userName,this.authService.uid,this.area.name,this.area.key,startD,endD,startT,endT);

    }

    changeFlag()
    {
      this.isformSubmitted=!this.isformSubmitted;
    }
    setAvailability(index,avail,text)
    {
      this.area.isAvail=avail;
         this.area.availText=text;
         this.area.slotsIndex=index;
          this.availableClasses =  {
            'success': this.area.isAvail && this.area.slotsIndex==index,
            'danger': !this.area.isAvail && this.area.slotsIndex==index
          };
          this.enablebook=avail;
    }
        resetAvailability()
        {
          this.availableClasses={};
          this.area.isAvail=false;
          this.area.availText="";
          this.error="hide";
        }
}
