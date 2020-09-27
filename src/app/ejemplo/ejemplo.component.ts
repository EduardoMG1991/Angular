import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent{
  nombres: string[] = ['Eduardo', 'Adri', 'fer'];
  etiqueta: string;

  constructor(){
    this.etiqueta = '';
    for (let nombre of this.nombres){
      this.etiqueta = this.etiqueta + nombre;
    }
  }

}
