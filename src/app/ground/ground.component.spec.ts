import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundComponent } from './ground.component';

describe('GroundComponent', () => {
  let component: GroundComponent;
  let fixture: ComponentFixture<GroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
