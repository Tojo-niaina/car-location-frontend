import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vedette } from './vedette';

describe('Vedette', () => {
  let component: Vedette;
  let fixture: ComponentFixture<Vedette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vedette]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vedette);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
