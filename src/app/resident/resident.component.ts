import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.css']
})
export class ResidentComponent implements OnInit {

  constructor(private router:Router,public authService: AuthService) {}

  ngOnInit() {
  }
  
logout() 
  {
    this.authService.logout().then(
      success => this.router.navigate(['/login'])
    );
  }

}
