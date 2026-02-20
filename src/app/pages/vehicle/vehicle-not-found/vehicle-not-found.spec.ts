import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleNotFound } from './vehicle-not-found';

describe('VehicleNotFound', () => {
  let component: VehicleNotFound;
  let fixture: ComponentFixture<VehicleNotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleNotFound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleNotFound);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
