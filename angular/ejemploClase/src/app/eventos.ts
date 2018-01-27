import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[MiEvento]',
  host:{
    '(mouseenter)':'onmouseenter()',
    '(mouseleave)':'onmouseleave()',
    '(click)':'onclick()'
  }
})

export class MiEvento{
  onmouseenter(){
    console.log('Entramos');
  }
  onmouseleave(){
    console.log('Salimos');
  }
  onclick(){
    console.log('Clicamos');
  }
}
