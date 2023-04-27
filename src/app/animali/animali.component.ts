import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Animale } from './animali.model';
@Component({
  selector: 'app-animali',
  templateUrl: './animali.component.html',
  styleUrls: ['./animali.component.css']
})
export class AnimaliComponent {
  @Input() animale: Animale;
  
  constructor(){

  }

  ngOnInit(){}
}
