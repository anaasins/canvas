import { Component } from '@angular/core';

@Component({
  selector: 'primeraComponente',
  templateUrl: 'app.html'
})
export class AppComponent {
  title = 'app';
  saludo:string = 'Hola mundo';
  numero:number=10;

  constructor(){
    console.log("Componente creada");
  }
}
