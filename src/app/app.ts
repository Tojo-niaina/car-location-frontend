import { Component, signal } from '@angular/core';
import { VehicleCard } from './pages/vehicle/vehicle-card/vehicle-card';
import { VehicleList } from './pages/vehicle/vehicle-list/vehicle-list';
import { VehicleDetails } from './pages/vehicle/vehicle-details/vehicle-details';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('car-location-front');
}
