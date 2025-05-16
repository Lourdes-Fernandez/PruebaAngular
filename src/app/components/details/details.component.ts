import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocationInterface } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService); // Tiene los métodos

  housingLocation: HousingLocationInterface | undefined;

  formAngular = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  })

  constructor(){
    const housingLocationId = Number(this.route.snapshot.params['id']); // Captura la id de la ruta activa
    // Los params son el /:id por ejemplo
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId)
  }

  onSubmit(){
    this.housingService.submitApplication(
      this.formAngular.value.firstName ?? '',
      this.formAngular.value.lastName ?? '',
      this.formAngular.value.email ?? ''
    ) 
    // El operador de cualescencia nula: ?? En caso de que sea null o undefined proporcionará el valor especificado posteriormente
  }
}
