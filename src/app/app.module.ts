import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule

import { AppComponent } from './app.component';
import { CepService } from './cep.service'; // Importar o serviço

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Adicionar HttpClientModule aqui
  ],
  providers: [CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
