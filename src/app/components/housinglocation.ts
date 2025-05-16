export interface HousingLocationInterface {
    // Definir estructura de datos esperada de un objeto
    // A través de propiedades
    id: number;
    name: string;
    city: string;
    state: string;
    photo: string;
    availableUnits: number;
    wifi: boolean;
    laundry: boolean;
}
