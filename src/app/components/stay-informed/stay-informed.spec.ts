import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayInformed } from './stay-informed';

describe('StayInformed', () => {
  let component: StayInformed;
  let fixture: ComponentFixture<StayInformed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayInformed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StayInformed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
