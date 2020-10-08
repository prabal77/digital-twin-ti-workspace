import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalTwinDisplayComponent } from './digital-twin-display.component';

describe('DigitalTwinDisplayComponent', () => {
  let component: DigitalTwinDisplayComponent;
  let fixture: ComponentFixture<DigitalTwinDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalTwinDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalTwinDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
