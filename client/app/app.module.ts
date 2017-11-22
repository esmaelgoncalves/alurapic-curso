import { BotaoModule } from './botao/botao.module';
import { PainelModule } from './painel/painel.module';
import { FotoModule } from './foto/foto.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import 'rxjs/add/operator/map';

import { CadastroComponent } from './cadastro/cadastro-component/cadastro.component';
import { ListagemComponent } from './listagem/listagem-component/listagem.component';

import { routing } from './app.routes';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FotoModule,
    PainelModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    BotaoModule
  ],
  declarations: [AppComponent, CadastroComponent, ListagemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }