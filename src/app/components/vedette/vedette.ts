import { Component, input } from '@angular/core';
import { VehicleModel } from '../../models/VehicleModel';

@Component({
  selector: 'app-vedette',
  imports: [],
  templateUrl: './vedette.html',
  styleUrl: './vedette.css',
})
export class Vedette {
  vehicle = input<VehicleModel>(new VehicleModel);
}
