import { Component, OnInit } from '@angular/core';
import { JogoService } from './shared';
import { sleep } from './shared/jogo.model';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {
  count: number;
  colors: any = {
    red: false,
    blue: false,
    green: false,
    yellow: false
  };

  constructor(private jogo: JogoService) { }

  ngOnInit() {
    this.jogo.inicializar();
  }


  get showInicio():boolean{
    return this.jogo.showInicio;
  }
  get showJogo():boolean{
    return this.jogo.showJogo;
  }
  iniciarJogo():void{
    this.jogo.iniciarJogo();
    this.jogo.estado.subscribe(estado => {
      console.log(estado);
      if (this.count != estado.count) {
        this.count = estado.count;
        this.invocarJogador(estado.mestre);
      }
    });
    this.jogo.mestreManda();
  }

  jogadorMovimenta(e: string) {
    this.jogo.jogadorMovimenta(e)
    console.log(e)
  }

  async invocarJogador(mestre: string[]) {
    for (let i = 0; i < mestre.length; i++) {
      this.colors[mestre[i]] = true;
      await sleep(500);
      this.colors[mestre[i]] = false;
      await sleep(200);
    }
  }

  restartJogo():void{
    this.jogo.restartMestre();
  }

}

