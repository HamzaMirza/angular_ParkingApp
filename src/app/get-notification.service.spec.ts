import { TestBed, inject } from '@angular/core/testing';

import { GetNotificationService } from './get-notification.service';

describe('GetNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetNotificationService]
    });
  });

  it('should be created', inject([GetNotificationService], (service: GetNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
