import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSlotsComponent } from './create-slots.component';

describe('CreateSlotsComponent', () => {
  let component: CreateSlotsComponent;
  let fixture: ComponentFixture<CreateSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
