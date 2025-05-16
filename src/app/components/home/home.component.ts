import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocationInterface } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { FormsModule } from '@angular/forms'; // Previene recargar la página por defecto :D

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent, FormsModule], // CommonModule es para ejecutar estructuras de control en el html :)
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  // Separaremos toda la lógica en un servicio que posteriormente inyectaremos sobre los componentes
  housingService:HousingService = inject(HousingService);

  housingLocationInstanceList:HousingLocationInterface[] = [];

  filteredLocationList:HousingLocationInterface[] = [];

  constructor(){
    this.housingLocationInstanceList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationInstanceList;
  }

  filterResults(event: Event, text:String){
    event.preventDefault();

    if(!text){
      this.filteredLocationList = this.housingLocationInstanceList;
    } else {
      this.filteredLocationList = this.housingLocationInstanceList.filter((housingLocation) => 
        housingLocation?.city.toLowerCase().includes(text.toLowerCase()))
    }

  }
}
