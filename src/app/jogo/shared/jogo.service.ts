/**
 * @author: Alessandra Murat <alessandra.murat@outlook.com>
 * @author: Diego Neris <oliveirasurfista@gmail.com>
 * @author: Jade Oliveira <jadeyasmim20@gmail.com>
 * @author: Lina Amaral <lina.amaralcaetano@gmail.com>
 * @since 1.0
 */

import { Injectable } from '@angular/core';
import { START_COUNT, COLORS } from './jogo.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  private _showInicio: boolean;
  private _showJogo: boolean;
  

  //criamos um array para o mestre armazenar os comandos dados, e um para o jogador armazenar os botões clicados. Criamos um count para contabilizar o número de botões a cada rodada, sempre começa em 2. Usamos o subject para ficar escutando a reposta do jogador.
  mestre: string[] = [];
  jogador: string[] = [];
  count: number;
  estado = new Subject<any>();

  //o jogo começa com 2 botões acendendo, esse valor vem do model
  constructor() {
    this.count = START_COUNT;
  }
  
  inicializar():void{
    this._showInicio = true;
    this._showJogo = false;
  }
  get showInicio():boolean{
    return this._showInicio;
  }
  get showJogo():boolean{
    return this._showJogo;
  }
  iniciarJogo():void{
    this._showInicio = false;
    this._showJogo = true;
  }




  // aleatoriamente ele escolhe as cores que foram definidas no model
  private get randomColor(): string {
    return COLORS[Math.floor(Math.random() * 4)];
  };

  //incrementamos uma nova cor ao array do mestre
  appendMestre(increment: boolean = false): void {
    if (increment) {
      this.count++;
    }
    this.mestre.push(this.randomColor);
  }

  //chama a função que gera uma nova cor, retorna o array que o jogador deve seguir.
  mestreManda(): string[] {
    this.mestre = []
    for (let i = 0; i < this.count; i++) {
      this.appendMestre()
    }
    this.definirEstado();
    return this.mestre;
  }

  //restart os comandos do mestre
  restartMestre(): string[] {
    this.count = START_COUNT;
    return this.mestreManda();
  }

  //toda vez que o jogador faz uma movimento, coloca o movimento no final do array e chama a função que compara com os comandos do mestre. Se o jogador tiver errado ele limpa o array do jogador, se estiver certo ele chama a função que armazena os dados do mestre e count.
  jogadorMovimenta(val: string) {
    this.jogador.push(val);
    if (!this.comparaComMestre()) {
      this.jogador = [];
      console.log("errou")
    }
    this.definirEstado();
  }
  //compara o array do jogador com o array do mestre, se for diferente retorna falso (jogador errou), se for igual atualizo a rodada e retorno verdadeiro
  comparaComMestre() {
    for (let i = 0; i < this.jogador.length; i++) {
      if (this.jogador[i] !== this.mestre[i]) {
        return false;
      }
    }
    if (this.jogador.length === this.mestre.length) {
      this.atualizarJogo();
    }
    return true;
  }

  //adiciono uma nova cor ao array do mestre e zero o array do jogador
  atualizarJogo() {
    this.appendMestre(true);
    this.jogador = [];
  }

  //Armazena as informações para a próxima rodada
  definirEstado() {
    this.estado.next({
      jogador: this.jogador,
      mestre: this.mestre,
      count: this.count,
    })
  }

  mensagenErro(){
    
  }
}
