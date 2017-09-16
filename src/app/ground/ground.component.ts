import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../auth.service';
import { GetAreasService } from '../get-areas.service';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ground',
  templateUrl: './ground.component.html',
  styleUrls: ['./ground.component.css']
})
export class GroundComponent implements OnInit {
  area={name:"",slotsIndex:-1,isAvail:null,availText:"",key:"",slots:[]};
  slots$: FirebaseListObservable<any[]>;
  sd=["","","","",""];et=["","","","",""];ed=["","","","",""];st=["","","","",""];
  availableClasses={};
  enablebook=false;
  isBooked=false;
  isformSubmitted=false;
  error="hide";
    date=new DatePipe('en-US');//.transform(new Date(), 'MM/dd/yyyy');
    dateToday =new DatePipe('en-US').transform(new Date(), 'MM/dd/yyyy').split('/');
  constructor(private router:Router,public authService: AuthService,private af:AngularFireDatabase,public GetAreasService: GetAreasService) { }

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
      this.area.name=area.areaName;
      this.area.slots=area.totalSlots;
      this.area.key=area.key;
      this.area.slots=area.slotsArr;
      
    }
    check(index)
    {
      this.resetAvailability();
       let c = this.st[index].split(':');
                      let inputstartMints= (+c[0]) * 60 + (+c[1]); 
                      let d = this.et[index].split(':');
                      let inputendMints =(+d[0]) * 60 + (+d[1]);
                      console.log(c); 
      if(this.sd[index]=="" || this.st[index]=="" || this.ed[index]=="" || this.et[index]=="")
      {
        this.error="Please fill in all the details";
        return;
      }
      else if(c[0] >= d[0])
      {
           if(c[1] >= d[1])
            {
                this.error="Please select correct timings";
              return;
            }
      }
    
        {
            let a=this.date.transform(this.sd,'MM/dd/yyyy').split('/');
            let b=this.date.transform(this.ed,'MM/dd/yyyy').split('/');
            if((+a[a.length-1])<(+this.dateToday[this.dateToday.length-1]) || (+b[b.length-1])<(+this.dateToday[this.dateToday.length-1]))
            {
              this.error="Please select Present/Future years";
              console.log("1",this.error);
               return;
            }
            else if((+a[a.length-1])>(+b[b.length-1]))
            {
              this.error="Please select correct years";
              console.log("2",this.error);
              
              return;
            }
            if((+a[0])<(+this.dateToday[0]) || (+b[0])<(+this.dateToday[0]))
            {
              this.error="Please select Present/Future month";
              console.log("3",this.error);              
               return;
            }
            else if((+a[0])!=(+b[0]))
            {
              this.error="Please select same  month";
              console.log("4",this.error);
              return;
            }
            if((+a[1])<(+this.dateToday[1]) || (+b[1])<(+this.dateToday[1])|| (+b[1])<(+a[1]))
            {
              this.error="Please select correct day";
              console.log("5",this.error);
               return;
            }
        console.log(a,",",b,",")
            
        }
        console.log(this.sd[index],this.st[index],this.ed[index], this.et[index])

      
     
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
              if(booking$[i].startDate==this.sd[index])
              {
     
                  if(booking$[i].startTime==this.st[index])
                  {
                    
                    this.setAvailability(index,false,"Not Available");
                    return ;
                  }
                  else if(booking$[i].startTime<this.st[index])
                  {
                      let a = booking$[i].startTime.split(':');
                      let startMints= (+a[0]) * 60 + (+a[1]); 
                      let b = booking$[i].endTime.split(':');
                      let endMints =(+b[0]) * 60 + (+b[1]); 

                      let c = this.st[index].split(':');
                      let inputstartMints= (+c[0]) * 60 + (+c[1]); 
                      let d = this.et[index].split(':');
                      let inputendMints =(+d[0]) * 60 + (+d[1]); 
            
                    let tempMints=Math.abs(startMints-endMints);
                    tempMints+=startMints;

                    if(tempMints<=inputstartMints )
                    {
                       buffer="available";
                    }
                    else if(tempMints>inputstartMints )
                    {
                      
                      buffer="not";
                    }
                  }
                 
                }
                 else if(booking$[i].startDate<this.sd[index])
                {
                    if(booking$[i].endDate>this.sd[index])
                    {
                      this.setAvailability(index,false,"Not Available");
                      return ;
                    }
                    else if(booking$[i].endDate==this.sd[index])
                    {
                        if(booking$[i].endTime>this.st[index])
                        {
                          
                          this.setAvailability(index,false,"Not Available");
                          return ;
                        }
                    else if(booking$[i].endTime<=this.st[index])
                    {
                        let a = booking$[i].startTime.split(':');
                        let startMints= (+a[0]) * 60 + (+a[1]); 
                        let b = booking$[i].endTime.split(':');
                        let endMints =(+b[0]) * 60 + (+b[1]); 

                        let c = this.st[index].split(':');
                        let inputstartMints= (+c[0]) * 60 + (+c[1]); 
                        let d = this.et[index].split(':');
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
    }
    onBook(data)
    {
    
     this.af.list('slots/'+this.area.key+'/slotsArr/'+this.area.slotsIndex).push({resident:this.authService.userName,rUid:this.authService.uid,areaName:this.area.name,areaKey:this.area.key,startDate:data.startDate,endDate:data.endDate,startTime:data.startTime,endTime:data.endTime,key:""}).then(
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
                    },error=>
                            {
                                    this.isBooked=false; this.isformSubmitted=true;this.resetSlot();    
                            }
                  );
          
         
        });
      },
      error=>{

        this.isBooked=false; this.isformSubmitted=true;this.resetSlot();    
      }
    ); 
      console.log(data);
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
          this.enablebook=text;
    }
        resetAvailability()
        {
          this.availableClasses={};
          this.area.isAvail=false;
          this.area.availText="";
          this.error="hide";
        }
}
