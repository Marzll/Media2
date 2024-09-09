import { Component } from '@angular/core'
import { Boletim } from './Boletim'


@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrl: './calcula-media.component.css'
})
export class CalculaMediaComponent {
  mediaParcial: number | null
  mediaFinal: number | null
  situacao: string
  boletim: Boletim
  logotipo: string
  mostrarProvaFinal: boolean = false;

  constructor(){
    this.mediaParcial = null
    this.mediaFinal = null
    this.boletim = new Boletim(0,0,0,0)
    this.logotipo = 'https://dados.ifrn.edu.br/base/images/logo-ifrn.png'
  }
  
  calcularMediaParcial(b1: number, b2: number, b3: number, b4: number){
    if (b1 && b2 && b4 && b4){
      this.boletim = new Boletim(b1, b2, b3, b4)
      this.mediaParcial = this.boletim.calcularMediaParcial()
      this.situacao = this.boletim.situacao();
      this.mostrarProvaFinal = this.boletim.avFinal();
    }
    else {
      this.mediaParcial = null;
      this.situacao = 'Dados incompletos';
      this.mostrarProvaFinal = false;
    }
  }
  calcularMediaFinal(provaFinal: number) {
    if (provaFinal !== undefined && provaFinal !== null) {
      this.boletim.registrarProvaFinal(provaFinal);
      this.mediaFinal = this.boletim.calcularMediaFinal();
      this.situacao = this.boletim.situacao();
    } 
    else {
      this.mediaFinal = null;
      this.situacao = 'Dados incompletos';
    }
  }
}
