import { VehicleModel } from '../../../models/VehicleModel';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-vehicle-card',
  imports: [],
  templateUrl: './vehicle-card.html',
  styleUrl: './vehicle-card.css',
})
export class VehicleCard {
  vehicle = input<VehicleModel>(new VehicleModel);
}
