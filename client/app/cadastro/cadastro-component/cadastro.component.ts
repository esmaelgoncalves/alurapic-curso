import { Component, Input } from '@angular/core';
import { FotoComponent } from '../../foto/foto-component/foto.component';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'cadastro',
    templateUrl: './app/cadastro/cadastro-component/cadastro.component.html'
})
export class CadastroComponent {
    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    

    constructor(private http: Http, private fb: FormBuilder) {
        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: [''],
        });
    }

    cadastrar(event) {
        event.preventDefault();

        console.log(this.foto);
        
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('v1/fotos', JSON.stringify(this.foto), { headers: headers })
            .subscribe(() => {
                this.foto = new FotoComponent();
                console.log('Foto salva com sucesso');
            }, erro => console.log(erro));
    }
}