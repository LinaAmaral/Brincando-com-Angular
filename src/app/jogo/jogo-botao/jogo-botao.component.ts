import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jogo-botao',
  templateUrl: './jogo-botao.component.html',
  styleUrls: ['./jogo-botao.component.css']
})
export class JogoBotaoComponent implements OnInit {

  @Input() 
  color:string; //os valores são 0123 que corresponde as cores
  @Input()
  active: boolean = false;
  @Output()
  adivinha: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(){
  }

  onClick(){
    this.adivinha.emit(this.color); //"escuta" o botão que é digitado pelo jogador
  }
}
