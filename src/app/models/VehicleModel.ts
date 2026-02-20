import { FuelType, Transmission, VehicleStatus, VehicleType } from "../utils/vehicle.utils";

export class VehicleModel {
    id: number = 1;
    brand: string = "Crossover";
    model: string = "Skoda Kodiaq 2.0 TDI 150 ch SCR DSG7 Selection";
    vin: string = "vin1";
    registration: string = "126458TS4K";
    pricePerDays: number = 500000;
    seats: number = 5;
    agencyId: number = 1;
    image: string = "https://media.lesechos.com/api/v1/images/view/5c0653898fe56f69d133d266/1024x576-webp/021698098919-web.webp";

    type: VehicleType = VehicleType.SUV;
    fuel: FuelType = FuelType.DIESEL;
    transmission: Transmission = Transmission.AUTOMATIC;
    status: VehicleStatus = VehicleStatus.AVAILABLE;

    copy(): VehicleModel {
        return Object.assign(new VehicleModel, this)
    }
}