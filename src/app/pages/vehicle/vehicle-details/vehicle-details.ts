import { Component, inject, input } from '@angular/core';
import { VehicleModel } from '../../../models/VehicleModel';
import { Menu } from '../../../components/menu/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  imports: [Menu],
  templateUrl: './vehicle-details.html',
  styleUrl: './vehicle-details.css',
})
export class VehicleDetails {
  private router = inject(Router)
  vehicle = input<VehicleModel>(new VehicleModel);

  reservation() {
    this.router.navigate(["/reservation"])
  }
}
