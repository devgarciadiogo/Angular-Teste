import { Component } from '@angular/core';
import { CepService } from './cep.service'; // Importar o serviço

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Arquivo HTML do componente
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-teste';
  resultadoCep: any;

  constructor(private cepService: CepService) {}

  buscar(cep: string) {
    this.cepService.buscarCep(cep).subscribe(
      (dados) => {
        this.resultadoCep = dados;
      },     
      (erro) => {
        console.error('Erro ao buscar o CEP', erro);
      }
    );
  }
}
