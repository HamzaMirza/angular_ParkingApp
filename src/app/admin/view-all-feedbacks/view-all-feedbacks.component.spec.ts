import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllFeedbacksComponent } from './view-all-feedbacks.component';

describe('ViewAllFeedbacksComponent', () => {
  let component: ViewAllFeedbacksComponent;
  let fixture: ComponentFixture<ViewAllFeedbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllFeedbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
