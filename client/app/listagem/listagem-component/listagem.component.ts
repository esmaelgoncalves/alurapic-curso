import { FotoComponent } from './../../foto/foto-component/foto.component';
import { FotoService } from './../../foto/foto.service';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'listagem',
    templateUrl: './app/listagem/listagem-component/listagem.component.html'
})
export class ListagemComponent {
    fotos: FotoComponent[] = [];
    mensagem: string = '';

    constructor(private fotoService: FotoService) {
        this.fotoService.lista()
            .subscribe(
            fotos => this.fotos = fotos,
            erro => console.log(erro)
            );
    }

    remove(foto: FotoComponent) {
        console.log(foto);

        this.fotoService
            .remove(foto)
            .subscribe(
                () => {

                    console.log('Foto removida com sucesso');
                    let novasFotos = this.fotos.slice(0);
                    let indice = novasFotos.indexOf(foto);
                    novasFotos.splice(indice, 1);
                    this.fotos = novasFotos;
                    this.mensagem = 'Foto removida com sucesso';
                }, 
                erro => {
                    console.log(erro);
                    this.mensagem = 'Não foi possível remover a foto';
                }

            );
    }
}