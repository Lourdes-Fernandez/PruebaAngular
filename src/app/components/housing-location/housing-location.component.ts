import { Component, Input } from '@angular/core';
import { HousingLocationInterface } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  
  /* 
    Se envían los datos de la instancia de la interfaz a través del property binding
    */
   @Input() housingLocationInput!: HousingLocationInterface;

    /* Sería lo mismo que poner directamente: 
    readonly baseUrl = "https://angular.dev/assets/images/tutorials/common";
    
     housinglocation:HousinglocationInterface = 
       {
       id: 999,
       name: 'Test Home',
       city: 'Test city',
       state: 'ST',
       photo: `${this.baseUrl}/example-house.jpg`,
       availableUnits: 1,
       wifi: true,
       laundry: false
     }

      La diferencia es que se están importando los datos desde el ts de home
    */


}
