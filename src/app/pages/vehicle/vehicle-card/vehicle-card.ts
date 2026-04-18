import { NgClass } from '@angular/common';
import { VehicleModel } from '../../../models/VehicleModel';
import { Component, input } from '@angular/core';
import { VehicleStatus } from '../../../utils/vehicle.utils';

@Component({
  selector: 'app-vehicle-card',
  imports: [NgClass],
  templateUrl: './vehicle-card.html',
  styleUrl: './vehicle-card.css',
})
export class VehicleCard {
  vehicle = input<VehicleModel>(new VehicleModel);
}
