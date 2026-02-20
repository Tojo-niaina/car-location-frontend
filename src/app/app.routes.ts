import { Routes } from '@angular/router';
import { VehicleList } from './pages/vehicle/vehicle-list/vehicle-list';
import { VehicleDetails } from './pages/vehicle/vehicle-details/vehicle-details';
import { VehicleNotFound } from './pages/vehicle/vehicle-not-found/vehicle-not-found';
import { Home } from './pages/home/home';
import { Reservation } from './pages/reservation/reservation';
import { Login } from './pages/login/login';
import { Subscribe } from './pages/subscribe/subscribe';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'vehicle',
        children: [
            {
                path: '',
                component: VehicleList
            },
            {
                path: ':id',
                component: VehicleDetails
            }
        ]
    },
    {
        path: 'reservation',
        component: Reservation
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'subscribe',
        component: Subscribe
    },
    {
        path: '**',
        component: VehicleNotFound
    }
];
