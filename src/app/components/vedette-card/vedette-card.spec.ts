import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VedetteCard } from './vedette-card';

describe('VedetteCard', () => {
  let component: VedetteCard;
  let fixture: ComponentFixture<VedetteCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VedetteCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VedetteCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
