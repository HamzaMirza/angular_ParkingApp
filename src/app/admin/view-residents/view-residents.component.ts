import { Component, OnInit } from '@angular/core';
import { GetAllUsersService } from '../../get-all-users.service';
import { GetAreasService } from '../../get-areas.service';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-view-residents',
  templateUrl: './view-residents.component.html',
  styleUrls: ['./view-residents.component.css']
})
export class ViewResidentsComponent implements OnInit {
showSpinner: boolean = true;
  constructor(public GetAllUsersService:GetAllUsersService,public GetAreasService: GetAreasService,public authService: AuthService) { }

  ngOnInit() {
    this.GetAllUsersService.user$.subscribe(() => this.showSpinner = false);
  }

}
