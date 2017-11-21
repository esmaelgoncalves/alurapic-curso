import { FotoService } from './../../foto/foto.service';
import { Component, Input } from '@angular/core';
import { FotoComponent } from '../../foto/foto-component/foto.component';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
    selector: 'cadastro',
    templateUrl: './app/cadastro/cadastro-component/cadastro.component.html'
})
export class CadastroComponent {
    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    mensagem: string = '';

    constructor(private fotoService: FotoService, 
        private fb: FormBuilder, 
        private route: ActivatedRoute, 
        private router: Router) {

        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: [''],
        });

        this.route.params.subscribe(params => {

            let id = params['id'];

            if (id) {
                this.fotoService.buscaPorId(id)
                    .subscribe(
                    foto => this.foto = foto,
                    erro => console.log(erro));
            }
        });

    }

    cadastrar(event) {
        event.preventDefault();

        console.log(this.foto);

        this.fotoService
        .cadastra(this.foto)
        .subscribe(res => {
            this.mensagem = res.mensagem;
            this.foto = new FotoComponent();
            if(!res.inclusao) this.router.navigate(['']);
        }, erro => {
            console.log(erro);
            this.mensagem = 'Não foi possível savar a foto';
        });
    }
}