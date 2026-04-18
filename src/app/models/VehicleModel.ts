import { FuelType, Transmission, VehicleStatus, VehicleType } from "../utils/vehicle.utils";

export class VehicleModel {
    id: number = 1;
    brand: string = "Crossover";
    model: string = "Skoda Kodiaq 2.0 TDI 150 ch SCR DSG7 Selection";
    vin: string = "vin1";
    description: String = "La Mercedes-AMG GT incarne la perfection sportive avec son design agressif et ses performances exceptionnelles. Équipée d'un moteur V8 biturbo de 4.0L développant 585 chevaux, elle offre des sensations de conduite incomparables."
    registration: string = "126458TS4K";
    pricePerDays: number = 500000;
    seats: number = 5;
    power: number = 250;
    agencyId: number = 1;
    image: string = "https://media.lesechos.com/api/v1/images/view/5c0653898fe56f69d133d266/1024x576-webp/021698098919-web.webp";

    type: VehicleType = VehicleType.SUV;
    fuel: FuelType = FuelType.DIESEL;
    transmission: Transmission = Transmission.AUTOMATIC;
    status: VehicleStatus = VehicleStatus.AVAILABLE;
    details: String[] = ["Moteur V8 4.0L Biturbo", "Système AMG Performance Exhaust", "Intérieur cuir Nappa premium", 
        "0-100 km/h en 3.6s", "Suspension adaptative AMG Ride Control", "Écran multimédia MBUX 12.3 pouces"
    ];

    copy(): VehicleModel {
        return Object.assign(new VehicleModel, this)
    }
}