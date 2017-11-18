import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'listagem',
    templateUrl: './app/listagem/listagem-component/listagem.component.html'
})
export class ListagemComponent {
    fotos: Object[] = [];

    constructor(private http: Http) {

        http.get('v1/fotos')
            .map(res => res.json())
            .subscribe(
            fotos => this.fotos = fotos,
            erro => console.log(erro),
            );
    }
}