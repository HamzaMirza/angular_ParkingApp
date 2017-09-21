import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFeedbackComponent } from './set-feedback.component';

describe('SetFeedbackComponent', () => {
  let component: SetFeedbackComponent;
  let fixture: ComponentFixture<SetFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
