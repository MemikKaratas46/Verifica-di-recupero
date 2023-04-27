import { Component } from '@angular/core';
import { Animale } from './animali/animali.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Angular_empty';
  animali:Animale[] = [
    {
      "nome": "cane",
      "verso": "bau",
      "zampe": 4,
      "movimento": "cammina"
   },
   {
      "nome": "rana",
      "verso": "cra",
      "zampe": 4,
      "movimento": "salta"
   },
   {
      "nome": "canarino",
      "verso": "fiu",
      "zampe": 2,
      "movimento": "vola"
   },
   {
      "nome": "serpente",
      "verso": "fss",
      "zampe": 0,
      "movimento": "striscia"
   }
  ];
  OrdinaAnimaliNome(){
    return this.animali.sort((a: Animale, b: Animale) => a.nome.localeCompare(b.nome));
  }
  OrdinaAnimaliZampe(){
    return this.animali.sort((a: Animale, b: Animale) => a.zampe - b.zampe);
  }
  constructor(){
  }
}
