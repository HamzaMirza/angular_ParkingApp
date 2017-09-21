import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { GetNotificationService } from '../../get-notification.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

  constructor(public authService: AuthService,public GetNotificationService:GetNotificationService) { }

  ngOnInit() {
  }

}
