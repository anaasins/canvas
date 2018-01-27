import { Component } from '@angular/core';

@Component({
  selector: 'primeraComponente',
  templateUrl: './app.html',
})

export class AppComponent {
  title = 'app';
  frase:string="hola, esta es la frase";
  valor:number=10;

  errores:number;
  colores:Array<Object>;

  constructor(){
    this.errores=2;

    this.colores=[
      {id: 1, tono: "verde"},
      {id: 2, tono: "morado"},
      {id: 3, tono: "azul"}
    ]
  }

  sumar(){
    this.errores++;
  }
  restar(){
    this.errores--;
  }
}
