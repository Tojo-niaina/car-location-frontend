import { Component, signal } from '@angular/core';
import { VehicleCard } from '../vehicle-card/vehicle-card';
import { VehicleModel } from '../../../models/VehicleModel';
import { Menu } from '../../../components/menu/menu';
import { MainFooter } from '../../../components/main-footer/main-footer';
import { VehicleStatus } from '../../../utils/vehicle.utils';

@Component({
  selector: 'app-vehicle-list',
  imports: [Menu, VehicleCard, MainFooter],
  templateUrl: './vehicle-list.html',
  styleUrl: './vehicle-list.css',
})
export class VehicleList {
  vehicles = signal<VehicleModel[]>([]);
  
  constructor() {
    const listTemp: VehicleModel[] = [];

    for(let i = 1, j = 0; j < 40 ; i++, j++){
      const v = new VehicleModel()
      v.image = `/assets/img/car${i}.jpg`;
      v.status = this.randomVehicleStatus()
      if (i == 4) i = 0;
      listTemp.push(v);
    }

    this.vehicles.set(listTemp);
  }

  randomVehicleStatus(): VehicleStatus {
  const statuses = Object.values(VehicleStatus);
  return statuses[Math.floor(Math.random() * statuses.length)];
}
}
