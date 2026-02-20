import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { Vedette } from '../vedette/vedette';
import { VehicleModel } from '../../models/VehicleModel';

@Component({
  selector: 'app-vedette-card',
  imports: [Vedette],
  templateUrl: './vedette-card.html',
  styleUrl: './vedette-card.css',
})
export class VedetteCard {

  vehicles = signal<VehicleModel[]>([]);
  private readonly scrollAmount = 370;

  @ViewChild('featuredScroll', {static: false})
  container!: ElementRef<HTMLDListElement>;

  scroll(direction: number) {
    this.container.nativeElement.scrollBy({
      left: direction * this.scrollAmount,
      behavior: 'smooth'
    });
  }

  constructor() {
    const listTemp: VehicleModel[] = [];

    for(let i = 1, j = 0; j < 10 ; i++, j++){
      const v = new VehicleModel()
      v.image = `/assets/img/car${i}.jpg`;
      if (i == 4) i = 1;
      listTemp.push(v);
    }

    this.vehicles.set(listTemp);
  }
}
